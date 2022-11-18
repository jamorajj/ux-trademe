import { useRouter } from "next/router";

export default function FeatureCard() {
  const router = useRouter();

  return (
    <div className="card w-68 bg-base-100 shadow-md">
      <div className="card-body">
        <figure>
          <img src="https://placeimg.com/82/82/arch" alt="Album" />
        </figure>
        <h2 className="card-title">Mechanical / Marine Fitter</h2>
        <p>
          Auckland |{" "}
          <span className="text-green-500 font-semibold">Listed: Today</span>
        </p>
        <div className="card-actions">
          <button
            onClick={() => router.push("/result")}
            className="rounded-none btn btn-primary btn-sm"
          >
            Be an early applicant
          </button>
        </div>
      </div>
    </div>
  );
}
