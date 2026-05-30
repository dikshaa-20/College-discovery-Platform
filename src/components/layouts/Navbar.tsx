import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">
          College Discovery
        </h1>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/colleges"
            className="hover:text-blue-600"
          >
            Colleges
          </Link>

          <Link
            href="/compare"
            className="hover:text-blue-600"
          >
            Compare
          </Link>

          <Link
            href="/saved"
            className="hover:text-blue-600"
          >
            Saved
          </Link>
        </div>
      </div>
    </nav>
  );
}