import { useRouter } from "next/router";
import toast from "react-hot-toast";
import JobToast from "../JobToast";

export default function FeatureCard() {
  const router = useRouter();

  const goToSaved = () => {
    toast.dismiss();
    router.push("/saved");
  };

  const saveJobNotify = () => toast(<JobToast toastCallback={goToSaved} />);

  return (
    <div className="card w-64 bg-base-100 shadow-md indicator">
      <span className="indicator-item -translate-y-0 -translate-x-0">
        <button
          onClick={saveJobNotify}
          className="rounded-none btn btn-accent btn-xs"
        >
          Save Job
        </button>
      </span>

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
