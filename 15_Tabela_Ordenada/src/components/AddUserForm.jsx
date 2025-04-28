import { useState } from "react";

function AddUserForm({ data, setData }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [role, setRole] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !age.trim() || !role.trim()) return;
        setData([
            ...data,
            { nome: name, idade: age, cargo: role }
        ]);
        setName("");
        setAge("");
        setRole("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-wrap gap-2 items-center mb-4 bg-gray-50 p-4 rounded-lg shadow"
        >
            <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={e => setName(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded flex-1 min-w-[100px] outline-none focus:ring-2 focus:ring-blue-200"
            />
            <input
                type="number"
                placeholder="Idade"
                value={age}
                onChange={e => setAge(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded flex-1 min-w-[80px] outline-none focus:ring-2 focus:ring-blue-200"
                min="0"
            />
            <input
                type="text"
                placeholder="Cargo"
                value={role}
                onChange={e => setRole(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded flex-1 min-w-[100px] outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition"
            >
                Adicionar
            </button>
        </form>
    );
}

export default AddUserForm;
