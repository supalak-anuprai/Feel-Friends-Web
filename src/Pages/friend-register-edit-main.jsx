import { useParams } from "react-router-dom";
import FriendRegister from "../Components/FriendRegister/friend-register";
import { useEffect, useState } from "react";

export default function RegisterFriend() {
  const { userRegister } = useParams();

  const [userRegisCurrent, setUserRegisCurrent] = useState(null);

  useEffect(() => {
    if (userRegister) {
      const user = localStorage.getItem("formDataRegister", userRegister);
      const value = JSON.parse(user) || [];
      const valueObject = value?.find((user) => user.email === userRegister);
      setUserRegisCurrent(valueObject);
    } else {
      setUserRegisCurrent(null);
    }
  }, [userRegister]);

  return (
    <div>
      <FriendRegister userCurrent={userRegisCurrent} />
    </div>
  );
}
