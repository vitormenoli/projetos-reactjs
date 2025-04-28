import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";
import AddUserForm from "./components/AddUserForm";

export default function App() {
  const [data, setData] = useState([
    { nome: "Vitor", idade: 18, cargo: "Desenvolvedor Jr" },
    { nome: "Menoli", idade: 50, cargo: "Desenvolvedor Senior" }
  ]);

  const [sortConfig, setSortConfig] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (typeof aVal === "number") {
        return sortConfig.direction === "asc" ? aVal - bVal : bVal - aVal;
      }
      return sortConfig.direction === "asc"
        ? String(aVal).localeCompare(bVal)
        : String(bVal).localeCompare(aVal);
    });
  }, [data, sortConfig]);

  const filteredData = sortedData.filter(
    (row) =>
      row.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.cargo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onColumnClick = (key) => {
    setSortConfig((current) => {
      if (current?.key === key) {
        return {
          key,
          direction: current.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  return (
    <div className="mt-8 px-4 max-w-3xl mx-auto ">
      <h1 className="text-2xl sm:text-4xl font-bold text-center bg-gray-200 rounded-lg py-2 mb-4 border">
        Tabela de Usuários
      </h1>

      <div className="mb-6 bg-gray-500 p-5 pb-5 rounded-lg shadow-lg">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <AddUserForm data={data} setData={setData} />
      </div>

      <div className="w-full">
        <table className="w-full table-auto border-collapse">
          <TableHeader sortConfig={sortConfig} onSort={onColumnClick} />
          <tbody>
            {filteredData.map((row, idx) => (
              <TableRow key={idx} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
