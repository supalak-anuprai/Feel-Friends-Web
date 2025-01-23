import { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export const ItemCard = ({ data }) => {
  const { scrollToTop } = useContext(ShopContext);

  const handleClick = useCallback(
    (dataFriend) => {
      localStorage.setItem(
        `${dataFriend?.login?.username}`,
        JSON.stringify(dataFriend)
      );
      scrollToTop();
    },
    [scrollToTop]
  );

  return (
    <div className="p-4">
      <div className="card glass max-w-xs mx-auto hover:shadow-2xl hover:scale-105 lg:w-64 md:w-52 sm:w-46">
        <figure>
          <img
            src={data?.picture?.medium}
            alt={data?.name?.large}
            className="w-full h-48 object-cover rounded-t-lg"
          />

          <span
            className={`absolute top-2 right-2 ${
              data?.phone?.[0] === "0" ? "bg-yellow-500" : "bg-green-500"
            } text-white text-xs font-bold py-1 px-2 rounded-full`}
          >
            {/* ใช้ data.phone จำลองข้อมูล ว่าง หรือไม่ว่าง */}
            {data?.phone?.[0] === "0" ? "เพื่อนไม่ว่าง" : "เพื่อนว่าง"}
          </span>
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-base font-bold truncate">
            {data?.name?.title} {data?.name?.first} {data?.name?.last}
          </h2>
          <p className="text-xs text-gray-700 break-words">{data?.email}</p>
          <p className="text-xs text-gray-700 break-words">
            {data?.name?.title} {data?.name?.first} {data?.name?.last}
          </p>
          <div className="card-actions justify-end mt-4">
            <Link to={`/FriendsDetaile/${data?.login?.username}`}>
              <button
                onClick={() => handleClick(data)}
                className="btn btn-sm bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md py-2 px-4"
              >
                ดูเพื่อนของคุณ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
