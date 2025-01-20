import { useEffect, useState } from "react";

export const CountDownComponent = ({ data }) => {
  // ตั้งเวลานับถอยหลัง (หน่วยเป็นวินาที)
  const [timeLeft, setTimeLeft] = useState(
    1 * 24 * 60 * 60 + 10 * 60 * 60 + 24 * 60 + 50
  ); // 15 วัน, 10 ชั่วโมง, 24 นาที, 50 วินาที

  // ใช้ useEffect เพื่ออัปเดตเวลาในทุกๆ 1 วินาที
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // เคลียร์ timer เมื่อ component ถูก unmount
  }, []);

  // แปลงเวลาเป็นวัน ชั่วโมง นาที วินาที
  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = Math.floor(timeLeft % 60);

  return (
    <>
      {/* ใช้ data.phone จำลองข้อมูล ว่าง หรือไม่ว่าง */}
      {data?.phone?.[0] === "0" ? (
        <div className="flex flex-col gap-5">

          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": days }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": hours }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": minutes }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": seconds }}></span>
              </span>
              sec
            </div>
          </div>

          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">State: offline</div>
              <div className="stat-value text-gray-600">เพื่อนไม่ว่าง</div>
              <div className="stat-desc">บัญชีนี้อยู่กับเรามา 2 ปี 7 เดือน</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">State: online</div>
            <div className="stat-value text-lime-600">เพื่อนว่าง</div>
            <div className="stat-desc">บัญชีนี้อยู่กับเรามา 2 ปี 7 เดือน</div>
          </div>
        </div>
      )}
    </>
  );
};
