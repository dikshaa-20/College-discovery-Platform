import { colleges } from "@/data/colleges";

interface CollegePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CollegePage({
  params,
}: CollegePageProps) {
  const { id } = await params;

  const college = colleges.find(
    (college) => college.id === id
  );

  if (!college) {
    return (
      <main className="p-6">
        <h1>College Not Found</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-4xl font-bold">
        {college.name}
      </h1>

      <p className="mb-4 text-gray-600">
        {college.location}
      </p>

      <div className="mb-6 rounded-lg border p-4">
        <h2 className="mb-2 text-xl font-semibold">
          Overview
        </h2>

        <p>{college.overview}</p>
      </div>

      <div className="mb-6 rounded-lg border p-4">
        <h2 className="mb-2 text-xl font-semibold">
          Courses
        </h2>

        <ul className="list-disc pl-5">
          {college.courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6 rounded-lg border p-4">
        <h2 className="mb-2 text-xl font-semibold">
          Placements
        </h2>

        <p>{college.placements}% placement rate</p>
      </div>

      <div className="rounded-lg border p-4">
        <h2 className="mb-2 text-xl font-semibold">
          Rating
        </h2>

        <p>⭐ {college.rating}</p>
      </div>
    </main>
  );
}