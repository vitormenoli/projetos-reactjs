const TableRow = ({ row }) => (
  <tr className="odd:bg-gray-200 even:bg-gray-300 hover:bg-gray-400 transition-colors duration-200">
    <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-500">{row.nome}</td>
    <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-500">{row.idade}</td>
    <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-500">{row.cargo}</td>
  </tr>
);

export default TableRow;
