export function Field({ label, value, onChange, type = "text", required = true }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium">{label}</span>
      <input
        className="h-11 w-full rounded-md border border-[#cfc7ba] bg-white px-3 outline-none focus:border-[#031a33]"
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
      />
    </label>
  );
}

