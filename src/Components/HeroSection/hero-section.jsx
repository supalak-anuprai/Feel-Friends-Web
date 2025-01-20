import { Link } from "react-router-dom";
import friend_hero from "../Assets/friends-hero-bg.jpg";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";

export const HeroSection = () => {
  const { scrollToTop } = useContext(ShopContext);

  return (
    <div
      // className="hero bg-base-200 min-h-screen"
      // style={{ backgroundImage: "url(/friends-hero-bg.jpg)" }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* <img src={friend_hero} className="max-w-sm rounded-lg shadow-2xl" /> */}
        <div>
          <h1 className="text-5xl text-neutral-100 font-bold">
            จะดีแค่ไหนถ้ามีเพื่อนอยู่ทุกที่
          </h1>
          <p className="py-6 text-neutral-100">
            คุณอยู่ที่ไหน อยากเที่ยวแต่ไม่มีเพื่อน
            ไม่ใช่คนพื้นที่ไม่รู้จักเส้นทาง ตามหาเพื่อนของคุณ พวกเขาช่วยคุณได้สิ
            สะดวก รวดเร็ว ปลอดภัย เพราะ Feel Friends
          </p>
          <div className="flex gap-5">
            <Link to="/friends" onClick={() => scrollToTop()}>
              <button className="btn btn-info bg-opacity-80">ตามหาเพื่อนของคุณ</button>
            </Link>
            <Link to="/register-friends">
              <button className="btn btn-warning bg-opacity-80">ลงทะเบียน</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
