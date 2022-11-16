import Navbar from "../components/Navbar";
import Link from "next/link";
import SearchForm from "../components/SearchForm";
import SearchFormCompact from "../components/SearchFormCompact";
import ItemCard from "../components/result/ItemCard";
import { useState } from "react";
import { useRouter } from "next/router";
import { useThemeStore } from "../state/state";

export default function ResultsPage() {
  const [collapseShow, setCollapseShow] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedSort, setSelectedSort] = useState(1);
  const uiType = useThemeStore((state) => state.uiType);

  const router = useRouter();

  const refreshPage = () => {
    setShowOverlay(true);
    setShowMenu(false);
    setTimeout(() => {
      setShowOverlay(false);
      router.push("/results");
    }, 1000);
  };

  const toggleCollapse = () => {
    setShowMenu(false);
    setCollapseShow(!collapseShow);
  };

  const toggleMenu = () => {
    setCollapseShow(false);
    setShowMenu(!showMenu);
  };

  const toggleCollapseWithRefresh = () => {
    setCollapseShow(!collapseShow);
    setShowOverlay(true);
    refreshPage();
  };

  const selectSort = (catNumber: number) => {
    setSelectedSort(catNumber);
    refreshPage();
  };

  return (
    <div>
      <Navbar />

      <div
        className={`${
          !showOverlay ? "hidden" : "block"
        } fixed w-screen h-screen bg-black bg-opacity-50 left-0 top-0 z-30 grid place-items-center`}
      >
        <svg
          className="animate-spin -ml-1 mr-3 h-12 w-12 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth={4}
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>

      <main>
        {/* start bread crumbs */}
        <div className="hidden md:block text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Jobs</li>
          </ul>
        </div>
        {/* end bread crumbs */}

        <div className="flex flex-col md:flex-row sticky top-2 z-10">
          <div
            className={`flex-grow collapse ${
              collapseShow ? "collapse-open" : "collapse-close"
            } collapse-arrow border border-base-300 bg-base-100 rounded-none mb-0 mr-0 md:mr-4 md:mb-4`}
          >
            <input
              onChange={toggleCollapse}
              type="checkbox"
              className="cursor-pointer"
            />
            <div className="collapse-title text-md md:text-xl font-medium">
              544 results. Search again?
            </div>
            <div className="collapse-content">
              {uiType === "more" ? (
                <SearchForm searchCallback={toggleCollapseWithRefresh} />
              ) : (
                <SearchFormCompact searchCallback={toggleCollapseWithRefresh} />
              )}
            </div>
          </div>
          <div
            className="mt-2 dropdown dropdown-end dropdown-open"
            onClick={toggleMenu}
          >
            <label
              tabIndex={0}
              className="btn btn-block btn-primary mb-4 md:mb-0 rounded-none"
            >
              Sort
            </label>
            <ul
              tabIndex={0}
              className={`dropdown-content menu p-2 shadow bg-base-100 rounded-none w-full md:w-52 ${
                showMenu ? "visible" : "hidden"
              }`}
            >
              <li>
                <a onClick={() => selectSort(1)}>
                  {selectedSort === 1 && "· "}Featured Jobs
                </a>
              </li>
              <li>
                <a onClick={() => selectSort(2)}>
                  {selectedSort === 2 && "· "}Latest Jobs
                </a>
              </li>
              <li>
                <a onClick={() => selectSort(3)}>
                  {selectedSort === 3 && "· "}Highest Salary
                </a>
              </li>
              <li>
                <a onClick={() => selectSort(4)}>
                  {selectedSort === 4 && "· "}Lowest Salary
                </a>
              </li>
            </ul>
          </div>
        </div>

        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </main>
    </div>
  );
}
