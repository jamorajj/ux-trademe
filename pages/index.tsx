import { useThemeStore } from "../state/state";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import SearchForm from "../components/SearchForm";
import SearchFormCompact from "../components/SearchFormCompact";
import JobCategories from "../components/home/JobCategories";
import FeaturedList from "../components/home/FeaturedList";
import { useState } from "react";
import { useRouter } from "next/router";

export default function IndexPage() {
  const [showForm, setShowForm] = useState(true);
  const uiType = useThemeStore((state) => state.uiType);
  const router = useRouter();

  const handleSearch = () => {
    router.push("/results");
  };

  const form =
    uiType === "more" ? (
      <SearchForm searchCallback={handleSearch} />
    ) : (
      <SearchFormCompact searchCallback={handleSearch} />
    );

  return (
    <div>
      <main>
        <Navbar />
        <Hero setShowForm={setShowForm} showForm={showForm} />
        {showForm ? form : <JobCategories />}
        <FeaturedList />
      </main>
    </div>
  );
}
