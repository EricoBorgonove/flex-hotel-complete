import { EmptyState } from "./EmptyState.jsx";

export function DataTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto scrollbar-thin">
      <table className="w-full min-w-[760px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-[#d8d2c7] text-xs uppercase text-[#66746f]">
            {headers.map((header, index) => (
              <th key={`${header}-${index}`} className="px-3 py-3 font-semibold">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-[#eee8dd]">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-3 py-3 align-middle">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {!rows.length && <EmptyState text="Nenhum registro encontrado." />}
    </div>
  );
}

