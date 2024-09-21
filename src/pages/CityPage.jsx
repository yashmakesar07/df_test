import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { removeCity } from "../redux/features/citySlice"; // Adjust the import path as necessary
import { RiArrowUpDownFill } from "react-icons/ri";

const CityPage = () => {
  const dispatch = useDispatch();
  const allState = useSelector((state) => state); // Get the entire state

  // Debugging: Log the entire state
  
  const states = allState.state.states.states; // Adjust based on the actual structure of your state
  console.log("Full State:", states );

  // Check if states is an array
  if (!Array.isArray(states)) {
    console.error("States is not an array:", states);
    return <div>Error: States data is not structured as expected.</div>;
  }

  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "ascending",
  });

  // Flatten all cities from each state into a single array
  const cities = states.flatMap((state) => state.cities || []); // Safely access cities

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedCities = [...cities].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const handleDelete = (code) => {
    dispatch(removeCity(code));
  };

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Cities</h2>
        <button className="bg-[#662671] text-white px-4 py-2 rounded mb-4 md:mb-0">
          Add New City
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th
                className="px-4 py-2 text-center bg-[#FFF8B7] cursor-pointer"
                onClick={() => handleSort("code")}
              >
                <div className="flex flex-row justify-center items-center">
                  ID <RiArrowUpDownFill />
                </div>
              </th>
              <th
                className="px-4 py-2 text-center bg-[#FFF8B7] cursor-pointer"
                onClick={() => handleSort("name")}
              >
                <div className="flex flex-row justify-center items-center">
                  Name <RiArrowUpDownFill />
                </div>
              </th>
              <th
                className="px-4 py-2 text-center bg-[#FFF8B7] cursor-pointer"
                onClick={() => handleSort("stateCode")}
              >
                <div className="flex flex-row justify-center items-center">
                  City Code <RiArrowUpDownFill />
                </div>
              </th>
              <th
                className="px-4 py-2 text-center bg-[#FFF8B7] cursor-pointer"
                onClick={() => handleSort("stateCode")}
              >
                <div className="flex flex-row justify-center items-center">
                  State Name <RiArrowUpDownFill />
                </div>
              </th>
              <th
                className="px-4 py-2 text-center bg-[#FFF8B7] cursor-pointer"
                onClick={() => handleSort("stateCode")}
              >
                <div className="flex flex-row justify-center items-center">
                  Status  <RiArrowUpDownFill />
                </div>
              </th>
              <th className="px-4 py-2 text-center bg-[#FFF8B7]">Action</th>
            </tr>
          </thead>
          <tbody>
            {states.map((state) =>
              state.cities.map((city, index) => (
                <tr
                  key={city.code}
                  className={`hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-4 py-2 text-center">{city.name}</td>
                  <td className="px-4 py-2 text-center">{city.code}</td>
                  <td className="px-4 py-2 text-center">{state.name}</td>
                  <td className="px-4 py-2 text-center">
                  <span
                    className={`px-2 py-1 rounded ${
                      city.status === "active" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                    }`}
                  >
                    {city.status}
                  </span>
                </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                      // Add your edit functionality here
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => handleDelete(city.code)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CityPage;