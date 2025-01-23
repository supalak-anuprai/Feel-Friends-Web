import PropTypes from "prop-types";

export default function FriendProfiled({ data }) {
  console.log("🚀 ~ FriendProfiled ~ data:", data);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={data?.picture?.medium}
          alt={data?.name?.first}
          className="w-96 h-96"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {data?.name?.title} {data?.name?.first} {data?.name?.last}
        </h2>
        <div>
          <p>
            <span className="font-bold">Email:</span> {data?.email}
          </p>
          <p>
            <span className="font-bold">Location:</span> {data?.location?.city},{" "}
            {data?.location?.state} {data?.location?.country} {}{" "}
          </p>
          <p>
            <span className="font-bold">Street:</span>{" "}
            {data?.location?.street?.name} ({data?.location?.street?.number})
          </p>
        </div>
        <p>
          เฮ้! 👋 พร้อมที่จะเริ่มต้นอะไรใหม่ๆ กันหรือยัง? ชีวิตคือการเดินทาง
          และทุกการเดินทางจะสนุกขึ้นเมื่อเรามีเพื่อนที่พร้อมจะแชร์ทุกโมเมนต์ไปด้วยกัน!
          อย่ารอช้า มาค้นพบความสุขและความสนุกในแบบของคุณกับพวกเราได้เลย ✨
        </p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div> */}
      </div>
    </div>
  );
}

FriendProfiled.propTypes = {
  data: PropTypes.object,
};
