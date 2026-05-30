"use client";

import Link from "next/link";
import { College } from "@/types/college";
import { useCompareStore } from "@/store/compareStore";
import { useBookmarkStore } from "@/store/bookmarkStore";
interface CollegeCardProps {
  college: College;
}

export default function CollegeCard({
  college,
}: CollegeCardProps) {
  const { addCollege } = useCompareStore();
const { saveCollege } = useBookmarkStore();
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <h2 className="text-xl font-semibold">
        {college.name}
      </h2>

      <p>{college.location}</p>

      <p>Fees: ₹{college.fees.toLocaleString()}</p>

      <p>⭐ {college.rating}</p>

      <p>Placement: {college.placements}%</p>

      <div className="mt-4 flex gap-2">
        <Link
          href={`/colleges/${college.id}`}
          className="rounded bg-black px-4 py-2 text-white"
        >
          View Details
        </Link>

        <button
          onClick={() => addCollege(college.id)}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Compare
        </button>
        <button
  onClick={() => saveCollege(college.id)}
  className="rounded bg-green-600 px-4 py-2 text-white"
>
  Save
</button>
      </div>
    </div>
  );
}