import { statusLabels } from "../lib/constants.js";

export function Badge({ value }) {
  const tone = {
    available: "bg-[#dff3ea] text-[#116149]",
    occupied: "bg-[#e9ddff] text-[#5b3594]",
    cleaning: "bg-[#dcecff] text-[#215985]",
    maintenance: "bg-[#fff1c2] text-[#795817]",
    blocked: "bg-[#ead7d7] text-[#813232]",
    confirmed: "bg-[#dff3ea] text-[#116149]",
    checked_in: "bg-[#e9ddff] text-[#5b3594]",
    checked_out: "bg-[#e5e1d8] text-[#554f45]",
    cancelled: "bg-[#ead7d7] text-[#813232]",
  }[value] || "bg-[#eee8dd] text-[#46544f]";

  return <span className={`mt-2 inline-flex rounded-md px-2 py-1 text-xs font-semibold ${tone}`}>{statusLabels[value] || value}</span>;
}

