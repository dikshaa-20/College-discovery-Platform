"use client";

import { colleges } from "@/data/colleges";
import { useCompareStore } from "@/store/compareStore";

export default function ComparePage() {
  const { selectedIds, removeCollege } =
    useCompareStore();

  const selectedColleges = colleges.filter(
    (college) =>
      selectedIds.includes(college.id)
  );

  return (
    <main className="p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Compare Colleges
      </h1>

      {selectedColleges.length === 0 ? (
        <p>
          Select colleges from the listing page.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr>
                <th className="border p-3">
                  Property
                </th>

                {selectedColleges.map(
                  (college) => (
                    <th
                      key={college.id}
                      className="border p-3"
                    >
                      {college.name}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">
                  Location
                </td>

                {selectedColleges.map(
                  (college) => (
                    <td
                      key={college.id}
                      className="border p-3"
                    >
                      {college.location}
                    </td>
                  )
                )}
              </tr>

              <tr>
                <td className="border p-3">
                  Fees
                </td>

                {selectedColleges.map(
                  (college) => (
                    <td
                      key={college.id}
                      className="border p-3"
                    >
                      ₹{college.fees}
                    </td>
                  )
                )}
              </tr>

              <tr>
                <td className="border p-3">
                  Rating
                </td>

                {selectedColleges.map(
                  (college) => (
                    <td
                      key={college.id}
                      className="border p-3"
                    >
                      ⭐ {college.rating}
                    </td>
                  )
                )}
              </tr>

              <tr>
                <td className="border p-3">
                  Placements
                </td>

                {selectedColleges.map(
                  (college) => (
                    <td
                      key={college.id}
                      className="border p-3"
                    >
                      {college.placements}%
                    </td>
                  )
                )}
              </tr>

              <tr>
                <td className="border p-3">
                  Remove
                </td>

                {selectedColleges.map(
                  (college) => (
                    <td
                      key={college.id}
                      className="border p-3"
                    >
                      <button
                        onClick={() =>
                          removeCollege(
                            college.id
                          )
                        }
                      >
                        Remove
                      </button>
                    </td>
                  )
                )}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}