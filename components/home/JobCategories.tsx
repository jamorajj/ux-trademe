import Link from "next/link";
import { jobCats } from "../../data";

export default function JobCategories() {
  return (
    <div className="h-auto md:max-h-80 my-2">
      <ul className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {jobCats.map((j) => (
          <li key={j} className="self-center">
            <Link className="cursor-pointer hover:underline" href="/results">
              {j}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
