export default function JobToast({ toastCallback = () => {} }) {
  return (
    <div className="text-center">
      <h3 className="font-semibold">Job Saved</h3>
      <a className="cursor-pointer underline" onClick={toastCallback}>
        View Saved Jobs
      </a>
    </div>
  );
}
