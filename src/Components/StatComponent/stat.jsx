export const  StatComponent = ({ data }) => {
  console.log("🚀 ~ StatComponent ~ data:", data)
  return (
    <div className="stats shadow stats-vertical md:stats-horizontal lg:stats-horizontal">
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Total Likes</div>
        <div className="stat-value text-primary">999 Like</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Profiled Views</div>
        <div className="stat-value text-secondary">48K View</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          {/* ใช้ data.phone จำลองข้อมูล ว่าง หรือไม่ว่าง */}
          <div className={`avatar ${data?.phone?.[0] === "0" ? "offline" : "online"}`}>
            <div className="w-16 rounded-full">
              <img src={data?.picture?.large} />
            </div>
          </div>
        </div>
        <div className="stat-value">4.7K</div>
        <div className="stat-title">Tasks done</div>
        {/* <div className="stat-desc text-secondary">31 tasks remaining</div> */}
      </div>
    </div>
  );
};
