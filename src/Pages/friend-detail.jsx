import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StatComponent } from "../Components/StatComponent/stat";
import { Breadcrumbs } from "../Components/Breadcrumbs/breadcrumb";
import { CountDownComponent } from "../Components/CountDown/countDownComponent";
import FriendProfiled from "../Components/CardFriendProfiled/FriendProfiled";

export const FriendDetailes = () => {
  const { userName } = useParams();

  const [friendsData, setFriendsData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem(`${userName}`);

    const user = JSON.parse(data);

    setFriendsData(user);
  }, [userName]);

  return (
    <div className="p-4 flex flex-col gap-5">
      <div className="w-full flex gap-5 flex-col mb-10 sm:items-center md:items-center lg:flex-row lg:justify-between">
        <div>
          <StatComponent data={friendsData} />
        </div>
        <div>
          <CountDownComponent data={friendsData} />
        </div>
      </div>

      <div>
        <FriendProfiled data={friendsData} />
      </div>
    </div>
  );
};
