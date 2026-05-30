interface FilterBarProps {
  location: string;
  setLocation: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
}

export default function FilterBar({
  location,
  setLocation,
  sortBy,
  setSortBy,
}: FilterBarProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row">
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="rounded-lg border p-3"
      >
        <option value="">All Locations</option>
        <option value="Delhi">Delhi</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="rounded-lg border p-3"
      >
        <option value="">Sort By</option>
        <option value="rating">Highest Rating</option>
        <option value="fees">Lowest Fees</option>
      </select>
    </div>
  );
}