    // src/pages/StatePage.js
    import { useSelector, useDispatch } from "react-redux";
    import { useState } from "react";
    import { removeState } from "../redux/features/stateSlice";
    import { RiArrowUpDownFill } from "react-icons/ri";
    import ConfirmDeleteModal from "../components/ConfirmDeleteModal"; // Adjust the path as necessary

    const StatePage = () => {
    const dispatch = useDispatch();
    const states = useSelector((state) => state.state);
        console.log(states)
    const [sortConfig, setSortConfig] = useState({
        key: "name",
        direction: "ascending",
    });
    
    const [isModalOpen, setModalOpen] = useState(false);
    const [stateToDelete, setStateToDelete] = useState(null);

    const handleSort = (key) => {
        let direction = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
        direction = "descending";
        }
        setSortConfig({ key, direction });
    };

    const sortedStates = [...states].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
    });

    const handleDelete = (code) => {
        console.log(code)
        dispatch(removeState());
        setModalOpen(false);
    };

    const openModal = (state) => {
        setStateToDelete(state);
        setModalOpen(true);
    };

    return (
        <div className="p-4">
        <div className="flex flex-col justify-center items-center md:flex-row justify-between items-center ">
            <h2 className="text-2xl font-bold mb-5 ">States</h2>
            <button className="bg-[#662671] text-white px-4 py-2 rounded mb-4 md:mb-0">
            Add New State
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
                    State Code <RiArrowUpDownFill />
                    </div>
                </th>
                <th
                    className="px-4 py-2 text-center bg-[#FFF8B7] cursor-pointer"
                    onClick={() => handleSort("status")}
                >
                    <div className="flex flex-row justify-center items-center">
                    Status <RiArrowUpDownFill />
                    </div>
                </th>
                <th className="px-4 py-2 text-center bg-[#FFF8B7]">Action</th>
                </tr>
            </thead>
            <tbody>
                {sortedStates.map((state, index) => (
                <tr
                    key={state.code}
                    className={`hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                >
                    <td className="px-4 py-2 text-center">{index + 1}</td>
                    <td className="px-4 py-2 text-center">{state.name}</td>
                    <td className="px-4 py-2 text-center">{state.code}</td>
                    <td className="px-4 py-2 text-center">
                    <span
                        className={`px-2 py-1 rounded ${
                        state.status === "active" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                        }`}
                    >
                        {state.status}
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
                        onClick={() => openModal(state)}
                    >
                        Delete
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        <ConfirmDeleteModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            onConfirm={() => handleDelete(stateToDelete.code)}
            stateName={stateToDelete?.name}
        />
        </div>
    );
    };

    export default StatePage;
