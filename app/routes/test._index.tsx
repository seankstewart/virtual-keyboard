import { Link } from "@remix-run/react";

export default function Test() {
  return (
    <>
      <header>
      <ul>
        <li>
          <Link
            to="/"
            className="text-xl text-blue-600 underline"
          >
            Go back to index
          </Link>
        </li>
      </ul>
      </header>
      <main>
        <h1>Test Route</h1>
      </main>
    </>
  );
}