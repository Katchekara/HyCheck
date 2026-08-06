export default function Header() {
  return (
    <header className="border-b border-line bg-white sticky top-0 z-10">
      <div className="max-w-md mx-auto flex items-center justify-between px-4 py-4">
        <span className="font-heading font-extrabold text-xl text-navy lowercase tracking-tight">
          hycheck
        </span>
        <span className="text-xs font-medium bg-teal-light text-teal px-3 py-1.5 rounded-full">
           Burkina Faso · BF
        </span>
      </div>
    </header>
  );
}