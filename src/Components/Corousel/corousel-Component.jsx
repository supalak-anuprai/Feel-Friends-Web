import { useRef, useEffect, useState } from "react";
import { useSprings, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import clamp from "lodash.clamp";

export const Carousel = () => {
  const pages = [
    "https://cdn.pixabay.com/photo/2019/06/05/18/05/landscape-4254269_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/06/14/15/34/friendship-4273865_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/02/26/20/19/sisters-6053044_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/03/27/15/04/women-3266211_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/09/10/11/19/camping-6612823_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/02/04/10/42/people-4817872_1280.jpg",
  ];

  const index = useRef(0);
  const [isDragging, setIsDragging] = useState(false); // สถานะการลาก
  const width = window.innerWidth;

  // ใช้ useSprings เพื่อทำให้การแอนิเมชันตำแหน่ง x ถูกปรับตาม index.current
  const [props, api] = useSprings(pages.length, (i) => ({
    x: (i - index.current) * width, // คำนวณตำแหน่ง x ใหม่ตาม index
    scale: 1,
    display: "block",
  }));

  // ฟังก์ชันการเลื่อนอัตโนมัติทุกๆ 2 วินาที
  useEffect(() => {
    if (isDragging) return; // ถ้ามีการลากอยู่จะไม่ให้เลื่อนอัตโนมัติ

    const interval = setInterval(() => {
      index.current = (index.current + 1) % pages.length; // เลื่อนไปข้างหน้าและวนรอบ
      api.start((i) => {
        // คำนวณตำแหน่ง x ใหม่สำหรับภาพที่ถูกต้อง
        const x = (i - index.current) * width;
        const scale = 1 - Math.abs(x) / width / 2; // ขนาดของภาพ
        return {
          x,
          scale,
          display: "block",
          immediate: false, // เรียกให้การแอนิเมชั่นทำงานอย่างราบรื่น
        };
      });
    }, 5000); // ทุก 5 วินาที

    return () => clearInterval(interval); // ทำลายการตั้งเวลาเมื่อคอมโพเนนต์ถูกยกเลิก
  }, [isDragging, api, width]);

  // ฟังก์ชันการลาก
  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], cancel }) => {
      if (!isDragging) setIsDragging(true); // ถ้าเริ่มลากให้ตั้งค่า isDragging เป็น true

      if (active && Math.abs(mx) > width / 2) {
        index.current = clamp(
          index.current + (xDir > 0 ? -1 : 1),
          0,
          pages.length - 1
        );
        cancel(); // ยกเลิกการลากหากเลื่อนครบครึ่งหนึ่ง
      }

      api.start((i) => {
        // ซ่อนรูปภาพที่ไม่เกี่ยวข้อง
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };

        const x = (i - index.current) * width + (active ? mx : 0); // คำนวณตำแหน่งของแต่ละรูปภาพ
        const scale = active ? 1 - Math.abs(mx) / width / 2 : 1; // ขนาดของภาพที่เปลี่ยนแปลงระหว่างการลาก
        return { x, scale, display: "block" };
      });
    },
    { filterTaps: true } // ป้องกันไม่ให้การแตะทำงาน
  );

  // ฟังก์ชันเมื่อการลากสิ้นสุด
  const handleDragEnd = () => {
    setIsDragging(false); // ตั้งค่า isDragging เป็น false เมื่อลากสิ้นสุด
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="relative w-full h-full overflow-hidden">
        {props.map(({ x, display, scale }, i) => (
          <animated.div
            className="absolute w-full h-full touch-none"
            {...bind()}
            key={i}
            onMouseUp={handleDragEnd} // ตรวจจับเมื่อการลากสิ้นสุด
            onTouchEnd={handleDragEnd} // ตรวจจับเมื่อการลากสิ้นสุด
            style={{ display, x }}
          >
            <animated.div
              className="w-full h-full bg-cover bg-center"
              style={{
                scale,
                backgroundImage: `url(${pages[i]})`,
                transition: "transform 0.5s ease-out", // เพิ่มการเปลี่ยนแปลง transform อย่างราบรื่น
              }}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
};
