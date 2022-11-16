import { useState } from "react";
import { jobCats, locations, districts } from "../data";

export default function HomeForm({ searchCallback = () => {} }) {
  const [showOptions, setShowOptions] = useState(false);
  const [isAnnualType, setIsAnnualType] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState("");

  const selectedDistrict = districts.find((d) => d.name === selectedLocation);

  return (
    <div className="m-0 md:m-4 max-h-96 md:max-h-screen overflow-y-scroll md:overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mb-4 md:pr-2">
          <h3>Keywords</h3>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm md:input-md w-full focus:outline-none rounded-none"
          />
        </div>

        <div className="mb-4 md:pl-2">
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

        <div className="mb-4">
          <h3>Location</h3>
          <select
            onChange={(e) => setSelectedLocation(e.target.value.toLowerCase())}
            className="rounded-none select-bordered select w-full focus:outline-none"
            defaultValue={""}
          >
            <option value="">All New Zealand</option>
            {locations.map((j) => (
              <option key={j}>{j}</option>
            ))}
          </select>
        </div>

        <select
          className="mb-4 md:mt-6 rounded-none select-bordered select focus:outline-none"
          disabled={selectedLocation === ""}
          defaultValue={""}
        >
          <option value="">All District</option>
          {selectedLocation !== "" &&
            selectedDistrict.places.map((p) => <option key={p}>{p}</option>)}
        </select>
      </div>

      {showOptions && (
        <div>
          <div className="mb-4">
            <h3>Job Type</h3>
            <select
              defaultValue={""}
              className="rounded-none select-bordered select w-full focus:outline-none"
            >
              <option value="">All Job Type</option>
              <option>Full time</option>
              <option>Part time</option>
              <option>Contract</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div>
              <h3>Pay Type</h3>
              <div className="btn-group w-full md:w-auto">
                <button
                  className={`btn ${
                    isAnnualType ? "btn-active" : ""
                  } rounded-none w-1/2 md:w-auto`}
                  onClick={() => setIsAnnualType(true)}
                >
                  Annual
                </button>
                <button
                  className={`btn ${
                    !isAnnualType ? "btn-active" : ""
                  } w-1/2 rounded-none md:w-auto`}
                  onClick={() => setIsAnnualType(false)}
                >
                  Hourly
                </button>
              </div>
            </div>

            <div className="mb-4">
              <h3>From</h3>
              <select
                defaultValue={""}
                className="rounded-none select-bordered select w-full focus:outline-none"
              >
                <option value="">Any</option>
                <option>Voluntary</option>
                <option>$20k</option>
                <option>$30k</option>
                <option>$40k</option>
                <option>$50k</option>
                <option>$60k</option>
              </select>
            </div>

            <div className="mb-4">
              <h3>To</h3>
              <select
                defaultValue={""}
                className="rounded-none select-bordered select w-full focus:outline-none"
              >
                <option value="">Any</option>
                <option>Voluntary</option>
                <option>$20k</option>
                <option>$30k</option>
                <option>$40k</option>
                <option>$50k</option>
                <option>$60k</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <button
        className="btn btn-ghost rounded-none w-full md:w-auto mb-2 md:mb-0"
        onClick={searchCallback}
      >
        Browse work from home jobs
      </button>

      <div className="flex justify-between flex-col md:flex-row">
        <button
          className="rounded-none btn btn-ghost mb-2 md:mb-0"
          onClick={() => setShowOptions(!showOptions)}
        >
          {showOptions ? "Hide options" : "More options"}
        </button>
        <button
          className="rounded-none btn btn-primary"
          onClick={searchCallback}
        >
          Search jobs
        </button>
      </div>
    </div>
  );
}
