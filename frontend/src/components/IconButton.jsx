export function IconButton({ icon: Icon, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="grid size-9 place-items-center rounded-md border border-[#cfc7ba] bg-white text-[#46544f] hover:bg-[#f3eee6]"
    >
      <Icon size={16} />
    </button>
  );
}

