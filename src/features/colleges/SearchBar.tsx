interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search colleges..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mb-6 w-full rounded-lg border p-3"
    />
  );
}