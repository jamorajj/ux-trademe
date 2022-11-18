import { useRouter } from "next/router";

export default function ItemCard() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/result")}
      className={`card md:card-side bg-base-100 hover:bg-base-200 rounded-none shadow-xl mb-4 cursor-pointer w-full`}
    >
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
