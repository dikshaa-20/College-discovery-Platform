"use client";

import { useState } from "react";

import CollegeCard from "@/components/cards/CollegeCard";
import SearchBar from "@/features/colleges/SearchBar";
import FilterBar from "@/features/colleges/FilterBar";
import { colleges } from "@/data/colleges";

export default function CollegesPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("");

  let filteredColleges = colleges.filter((college) => {
    const matchesSearch =
      college.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      college.location
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesLocation =
      !location || college.location === location;

    return matchesSearch && matchesLocation;
  });

  if (sortBy === "rating") {
    filteredColleges = [...filteredColleges].sort(
      (a, b) => b.rating - a.rating
    );
  }

  if (sortBy === "fees") {
    filteredColleges = [...filteredColleges].sort(
      (a, b) => a.fees - b.fees
    );
  }

  return (
    <main className="mx-auto max-w-7xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Colleges
      </h1>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <FilterBar
        location={location}
        setLocation={setLocation}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {filteredColleges.length === 0 ? (
        <p>No colleges found.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredColleges.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
            />
          ))}
        </div>
      )}
    </main>
  );
}