import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ResultsPage() {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
      <Navbar />

      <main>
        <div className="hidden md:block text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/results">Jobs</Link>
            </li>
            <li>GIB Fixers/ Stoppers and Trainees</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <div className="col-auto md:col-span-3">
            <figure>
              <img src="https://placeimg.com/850/90/arch" alt="Album" />
            </figure>
            <h2 className="font-bold text-3xl">
              GIB Fixers/ Stoppers and Trainees
            </h2>
            <h4 className="text-xl font-semibold">JRV Plastering Ltd</h4>
            <p className="text-sm">
              Listed 7 days ago |{" "}
              <span className="text-green-500 font-semibold">
                Be an early applicant
              </span>
            </p>
            <button className="btn btn-sm btn-primary rounded-none my-4">
              Apply Now
            </button>
            <div className="mb-2">
              <div className="grid grid-cols-2">
                <h3 className="font-bold">Location</h3>
                <p>Auckland City, Auckland</p>
              </div>
              <div className="divider my-0"></div>

              <div className="grid grid-cols-2">
                <h3 className="font-bold">Job Type</h3>
                <p>Full Time</p>
              </div>
              <div className="divider my-0"></div>

              <div className="grid grid-cols-2">
                <h3 className="font-bold">Duration</h3>
                <p>Permanent</p>
              </div>
              <div className="divider my-0"></div>
            </div>
            {/* content */}
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p>JRV Plastering Ltd Jrvplastering.co.nz.</p>
            <p>
              Currently we are looking for 10+ experienced Gib Fixers / Stoppers
              and Trainees.
            </p>
            <p>
              We are a busy company mostly specializing in residential projects
              around the wide Auckland area.
            </p>
            <p>
              If you are Gib Fixer / Stopper or willing to learn Gib Fixing and
              work with our friendly team:
            </p>
            <p>You should have:</p>
            <p>&middot; Own transport.</p>
            <p>&middot; Be punctual.</p>
            <p>&middot; Responsible</p>
            <p>We can offer you:</p>
            <p>&middot; Immediate start</p>
            <p>&middot; Frequent work. 40Hrs +</p>
            <p>&middot; Weekly pay $26 - $45/Hour Based on your experience.</p>
            <p>&middot; All Tools provided.</p>

            <p>If you are interested in this position please contact us:</p>

            <div className="divider my-2"></div>
            <button className="btn btn-sm btn-primary rounded-none">
              Apply Now
            </button>
          </div>

          <div className="col-auto md:col-span-1 h-60 px-2 flex flex-col justify-center">
            <div className="text-center">
              <h4 className="text-xl font-semibold">JRV Plastering Ltd</h4>
              <a href="#" className="text-blue-500 text-sm">
                View Advertiser's other listings &gt;
              </a>
              <div className="divider my-2 mx-4"></div>
              <h2 className="text-xl font-semibold">Egor</h2>
              <h4>Contact Person</h4>
              <button
                onClick={() => setShowDetails(true)}
                className="btn btn-sm btn-primary btn-block rounded-none"
              >
                {!showDetails ? "Show Contact Details" : "(021) 837423"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
