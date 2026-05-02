import { Sparkles } from "lucide-react";

export function Panel({ title, children }) {
  return (
    <section className="rounded-md border border-[#d8d2c7] bg-[#fbfaf7] p-4 shadow-sm">
      <h2 className="mb-4 flex items-center gap-2 text-base font-semibold">
        <Sparkles size={17} className="text-[#b7791f]" />
        {title}
      </h2>
      {children}
    </section>
  );
}

