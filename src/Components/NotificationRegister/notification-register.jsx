import { useContext, useEffect, useState } from "react";
import DialogConfirm from "../DialogConfirm/dialog-confirm";
import { Link, redirect } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export default function NotificationRegisterFriend() {
  const { getTotalUserRegister } = useContext(ShopContext);
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [dataDelete, setDataDelete] = useState(null);

  useEffect(() => {
    const storedUsers = localStorage.getItem("formDataRegister");
    setUsers(JSON.parse(storedUsers) || []);
  }, [setUsers]);

  const handleDelete = () => {
    getTotalUserRegister();
    let updatedUsers = users?.filter((user) => user.email !== dataDelete.email);

    alert(`ลบ ${dataDelete.fullName} สําเร็จ!`);
    setUsers(updatedUsers);
    localStorage.setItem("formDataRegister", JSON.stringify(updatedUsers));
    window.location.reload();
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        บัญชีที่ลงทะเบียน
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full rounded-lg shadow-lg bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-4 text-left">Full Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Gender</th>
              <th className="p-4 text-center">Actions</th>{" "}
            </tr>
          </thead>
          <tbody>
            {users?.length > 0 ? (
              users?.map((user, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-all duration-300 ease-in-out"
                >
                  <td className="p-4">{user?.fullName}</td>
                  <td className="p-4">{user?.email}</td>
                  <td className="p-4">{user?.gender}</td>
                  <td className="p-4 text-center">
                    {" "}
                    <div className="flex justify-center gap-3">
                      {/* ปุ่ม Edit */}
                      <Link to={`/register-friends/edit/${user?.email}`}>
                        <button className="btn btn-sm btn-warning hover:bg-yellow-600 transition-all duration-300 ease-in-out rounded-lg flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 3.38a2.25 2.25 0 112.828 2.828L9.39 14.347a6 6 0 01-2.157 1.09l-3.227.807a1.125 1.125 0 00-1.315 1.315l.808-3.227a6 6 0 011.09-2.157L16.86 3.38z"
                            />
                          </svg>
                          Edit
                        </button>
                      </Link>
                      {/* ปุ่ม Delete */}
                      <button
                        onClick={() => {
                          setIsOpen(true);
                          setDataDelete(user);
                        }}
                        className="btn btn-sm btn-error hover:bg-red-700 transition-all duration-300 ease-in-out rounded-lg flex items-center gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-2 14H7L5 7M4 7h16M10 3V4a2 2 0 002 0V3h4v1a2 2 0 002 0V3h-6a2 2 0 00-2 0z"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="p-20 text-center text-gray-500 bg-gray-200 border border-dashed border-gray-400 rounded-lg"
                >
                  <p className="text-xl font-semibold">ไม่มีข้อมูล</p>
                  <p className="text-sm mt-2">
                    กรุณาตรวจสอบอีกครั้งในภายหลังหรือเพิ่มข้อมูลบางอย่าง
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <DialogConfirm
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title={"คุณแน่ใจแล้วใช่ไหม ?"}
        content={"ลบแล้วไม่สามารถกู้คืนได้ !"}
        confirmFunc={handleDelete}
      />
    </div>
  );
}
