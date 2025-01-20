import { friendsAPI } from "../../Api/friends";
import { ItemCard } from "../ItemsCard/itemCard";
import { SkeletonItem } from "../SkeletonItem/skeletonItem";

export const MensComponent = ({ category }) => {
  let { friendsData, friendsDataLoading } = friendsAPI();

  if (category === "male") {
    friendsData = friendsData.filter((friend) => friend.gender === "male");
  }

  if (friendsDataLoading) return <SkeletonItem />;

  if (friendsData.length === 0)
    return (
      <div>
        <NotData page={category} />
      </div>
    );

  return (
    <div className="bg-white bg-opacity-30 backdrop-blur-md">
      <div className="grid gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {friendsData?.map((friend) => (
          <ItemCard data={friend} />
        ))}
      </div>
    </div>
  );
};
