import Navbar from "../components/Navbar";
import Link from "next/link";
import ItemCard from "../components/result/ItemCard";
import { useRouter } from "next/router";

export default function SavedPage() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <main>
        {/* start bread crumbs */}
        <div className="hidden md:block text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Saved Jobs</li>
          </ul>
        </div>
        {/* end bread crumbs */}

        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </main>
    </div>
  );
}
