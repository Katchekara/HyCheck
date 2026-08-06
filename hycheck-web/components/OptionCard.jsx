import Icon from "./Icon";

export default function OptionCard({ option, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex flex-col items-center justify-center gap-2 py-5 rounded-xl border text-sm font-medium transition ${
        selected
          ? "border-teal bg-teal-light text-navy"
          : "border-line text-muted hover:border-navy/30"
      }`}
    >
      <Icon name={option.icon} className="w-6 h-6" />
      {option.label}
    </button>
  );
}