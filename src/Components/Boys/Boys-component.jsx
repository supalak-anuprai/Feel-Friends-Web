import PropTypes from "prop-types";
import { useFriendsAPI } from "../../Api/friends";
import { ItemCard } from "../ItemsCard/itemCard";
import NotData from "../NodataComponent/no-data";
import { SkeletonItem } from "../SkeletonItem/skeletonItem";

export const BoysComponent = ({ category = "" }) => {
  let { friendsData, friendsDataLoading } = useFriendsAPI();

  if (category === "boys") {
    friendsData = friendsData?.filter((friend) => friend.dob.age <= 19);
  }

  if (friendsDataLoading) return <SkeletonItem />;

  if (friendsData?.length === 0)
    return (
      <div>
        <NotData page={category} />
      </div>
    );

  return (
    <div className="bg-white bg-opacity-30 backdrop-blur-md">
      <div className="grid gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {friendsData?.map((friend) => (
          <ItemCard data={friend} key={friend?.login?.username} />
        ))}
      </div>
    </div>
  );
};

BoysComponent.propTypes = {
  category: PropTypes.string,
};
