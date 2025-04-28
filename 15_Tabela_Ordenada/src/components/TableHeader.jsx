import { FaSortUp, FaSortDown } from "react-icons/fa";

const TableHeader = ({ sortConfig, onSort }) => {
  const columns = [
    { key: "nome", label: "Nome" },
    { key: "idade", label: "Idade" },
    { key: "cargo", label: "Cargo" },
  ];

  return (
    <thead className="bg-blue-100">
      <tr>
        {columns.map(({ key, label }) => {
          const active = sortConfig?.key === key;
            return (
            <th
              key={key}
              onClick={() => onSort(key)}
              className={`
              px-2 sm:px-4 py-2 
              text-xs sm:text-sm 
              font-semibold text-left 
              cursor-pointer select-none
              transition-colors
              ${active ? "text-blue-900 bg-blue-300 border-blue-600 shadow-md" : "text-blue-700 hover:bg-blue-200"}
              rounded-t
              `}
              style={{
              boxShadow: active ? "0 2px 8px rgba(37, 99, 235, 0.10)" : undefined,
              borderTop: "2px solid #2563eb",
              borderLeft: "1px solid #bfdbfe",
              borderRight: "1px solid #bfdbfe",
              }}
            >
              <span className="inline-flex items-center space-x-1">
              <span>{label}</span>
              {active && (
                <span className="text-blue-800">
                {sortConfig.direction === "asc" ? (
                  <FaSortUp />
                ) : (
                  <FaSortDown />
                )}
                </span>
              )}
              </span>
            </th>
            );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;