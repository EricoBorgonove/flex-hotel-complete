export function Info({ label, value }) {
  return (
    <div className="rounded-md bg-[#f3eee6] p-3">
      <p className="text-xs font-medium uppercase text-[#66746f]">{label}</p>
      <p className="mt-1 font-semibold">{value || "-"}</p>
    </div>
  );
}

