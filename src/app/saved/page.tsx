"use client";

import CollegeCard from "@/components/cards/CollegeCard";
import { colleges } from "@/data/colleges";
import { useBookmarkStore } from "@/store/bookmarkStore";

export default function SavedPage() {
  const { savedIds } = useBookmarkStore();

  const savedColleges = colleges.filter(
    (college) => savedIds.includes(college.id)
  );

  return (
    <main className="mx-auto max-w-7xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Saved Colleges
      </h1>

      {savedColleges.length === 0 ? (
        <p>No saved colleges yet.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {savedColleges.map((college) => (
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