import DropDrownSort from "../Components/DropDown/drop-down";
import { Friends } from "../Components/Friends/friends";
import SearchComponent from "../Components/InputSearch/search-component";

export const FriendsMain = ({ category }) => {
  return (
    <div>
      <Friends category={category} />
    </div>
  );
};
