import { useRouter } from "next/router";
import toast from "react-hot-toast";
import JobToast from "../JobToast";

export default function ItemCard() {
  const router = useRouter();

  const goToSaved = () => {
    toast.dismiss();
    router.push("/saved");
  };

  const saveJobNotify = (e) => {
    e.stopPropagation();
    toast(<JobToast toastCallback={goToSaved} />);
  };

  return (
    <div
      onClick={() => router.push("/result")}
      className={`card md:card-side bg-base-100 hover:bg-base-200 rounded-none shadow-xl mb-4 cursor-pointer ${
        router.pathname !== "/saved" ? "indicator" : ""
      } w-full`}
    >
      {router.pathname !== "/saved" && (
        <span className="indicator-item -translate-y-0 -translate-x-0">
          <button
            onClick={saveJobNotify}
            className="rounded-none btn btn-accent btn-xs"
          >
            Save Job
          </button>
        </span>
      )}

      <figure>
        <img src="https://placeimg.com/200/200/arch" alt="Album" />
      </figure>

      <div className="card-body">
        <div className="text-xs">
          <p>
            Wellington, Wellington |{" "}
            <span className="text-green-500 font-semibold">Listed: Today</span>
          </p>
          <a className="text-green-500">Be an early applicant</a>
        </div>
        <h2 className="card-title">HammerHand</h2>
        <p>
          Hammerhand wanted for immediate start! Call Asher now on 048863871
        </p>
        <ul>
          <li>&middot; $27+ an hour (based on experience)</li>
          <li>&middot; Full time work 40+ hours a week</li>
          <li>&middot; Ongoing Work</li>
        </ul>
        <div className="card-actions justify-start md:justify-end">
          <button className="btn btn-sm btn-secondary rounded-none">
            Full-time Contract
          </button>
        </div>
      </div>
    </div>
  );
}
