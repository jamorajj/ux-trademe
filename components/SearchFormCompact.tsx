import { jobCats, locationsCompact } from "../data";

export default function SearchFormCompact({ searchCallback = () => {} }) {
  return (
    <div className="m-0 md:m-4 max-h-96 md:max-h-screen overflow-y-scroll md:overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 items-end">
        <div className="mb-4 md:pr-2">
          <h3>Job Keywords</h3>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm md:input-md w-full focus:outline-none rounded-none"
          />
        </div>

        <div className="mb-4 md:pr-2">
          <h3>Category</h3>
          <select
            defaultValue={""}
            className="rounded-none select-bordered select w-full focus:outline-none"
          >
            <option disabled value="">
              All Categories
            </option>
            {jobCats.map((j) => (
              <option key={j}>{j}</option>
            ))}
          </select>
        </div>

        <div className="mb-4 md:pr-2">
          <h3>Area</h3>
          <input
            list="lcompact"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm md:input-md w-full focus:outline-none rounded-none"
          />
          <datalist id="lcompact">
            {locationsCompact.map((lc) => (
              <option key={lc} value={lc} />
            ))}
          </datalist>
        </div>

        <button
          className="mb-4 rounded-none btn btn-primary"
          onClick={searchCallback}
        >
          Search jobs
        </button>
      </div>
    </div>
  );
}
