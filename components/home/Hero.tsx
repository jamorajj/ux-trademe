import { useThemeStore } from "../../state/state";

export default function Hero({ showForm, setShowForm }) {
  const theme = useThemeStore((state) => state.theme);
  const uiType = useThemeStore((state) => state.uiType);
  return (
    <>
      <div
        className="hero object-fit"
        style={{
          backgroundImage: `url("https://www.trademe.co.nz/images/frend/jobs/home-page/landing-page-banner-large.png")`
        }}
      >
        {theme === "dark" && <div className="hero-overlay bg-opacity-60"></div>}
        <div className="hero-content text-left justify-self-start">
          <div className={theme === "dark" ? "text-white" : ""}>
            <h1 className="text-xl md:text-3xl font-bold">
              Find your next job in
            </h1>
            <h1 className="text-xl md:text-3xl font-bold">New Zealand</h1>
          </div>
        </div>
      </div>

      {uiType === "more" && (
        <ul className="grid grid-cols-2">
          <li>
            <button
              className={`rounded-none btn w-full flex flex-col md:flex-row ${
                showForm ? "btn-secondary" : "btn-ghost"
              }`}
              onClick={() => setShowForm(true)}
            >
              Search for Jobs
            </button>
          </li>
          <li>
            <button
              className={`rounded-none btn w-full  flex flex-col md:flex-row ${
                !showForm ? "btn-secondary" : "btn-ghost"
              }`}
              onClick={() => setShowForm(false)}
            >
              Job Categories
            </button>
          </li>
        </ul>
      )}
    </>
  );
}
