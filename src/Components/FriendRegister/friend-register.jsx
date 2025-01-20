import { useEffect, useState } from "react";

export default function FriendRegister({ userCurrent }) {
  const defultValues = {
    fullName: "",
    email: "",
    password: "",
    gender: "",
    agree: false,
  };

  const [formData, setFormData] = useState(defultValues);

  useEffect(() => {
    if (userCurrent) {
      setFormData({
        fullName: userCurrent.fullName,
        email: userCurrent.email,
        password: userCurrent.password,
        gender: userCurrent.gender,
        agree: userCurrent.agree,
      });
    } else {
      setFormData(defultValues);
    }
  }, [userCurrent]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.gender ||
      !formData.agree
    ) {
      return alert("กรุณากรอกข้อมูลให้ครบ!");
    }

    const value = localStorage.getItem("formDataRegister");
    let userAll = JSON.parse(value) || [];

    if (userCurrent) {
      userAll = userAll.filter((user) => user.email !== userCurrent.email);
    }

    if (userAll.some((user) => user.email === formData.email) && !userCurrent) {
      return alert("อีเมล์นี้ถูกใช้งานแล้ว กรุณาเปลี่ยน Email!");
    }

    userAll.push(formData);
    localStorage.setItem("formDataRegister", JSON.stringify(userAll));

    alert(userCurrent ? "แก้ไขสำเร็จ!" : "ลงทะเบียนสำเร็จ!");
    window.location.href = "/friends";
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-full max-w-lg shadow-xl bg-base-100 p-6">
        <h2 className="text-center text-2xl font-bold mb-4">
          {userCurrent ? "Edit Form" : "Registration Form"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your name"
              className="input input-bordered"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <select
              name="gender"
              className="select select-bordered"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-control">
            <label className="cursor-pointer flex items-center">
              <input
                type="checkbox"
                name="agree"
                className="checkbox checkbox-primary"
                checked={formData.agree}
                onChange={handleChange}
              />
              <span className="label-text ml-2">
                ฉันยอมรับข้อกำหนดและเงื่อนไข
              </span>
            </label>
          </div>

          <div className="form-control mt-4">
            <button className="btn btn-primary w-full" type="submit">
              {userCurrent ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
