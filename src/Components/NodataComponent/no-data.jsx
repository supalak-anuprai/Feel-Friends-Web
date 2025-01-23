import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";

export default function NotData({ page }) {
  const { scrollToTop } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-300">
      <div className="text-center p-12 bg-white rounded-3xl shadow-2xl max-w-xl mx-auto transform transition-all hover:scale-105">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 text-gray-400 mx-auto mb-6 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 9l3 3m0 0l3-3m-3 3V5m7 14H5a2 2 0 00-2 2v1a2 2 0 002 2h14a2 2 0 002-2v-1a2 2 0 00-2-2z"
          />
        </svg>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          ไม่พบข้อมูล {page}
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          ไม่พบข้อมูลที่จะแสดงในขณะนี้ กรุณาลองอีกครั้งในภายหลัง!
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/friends" onClick={scrollToTop}>
            <button className="btn btn-success text-white px-10 py-4 rounded-full shadow-xl hover:bg-green-700 focus:outline-none transition duration-300 transform hover:scale-105">
              ไปหน้าเพื่อนทั้งหมด
            </button>
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-primary text-white px-10 py-4 rounded-full shadow-xl hover:bg-indigo-700 focus:outline-none transition duration-300 transform hover:scale-105"
          >
            รีเฟรช
          </button>
        </div>
      </div>
    </div>
  );
}
