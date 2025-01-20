import { WomentsCoponent } from "../Components/Womens/women-Coponent";

export const WomensMain = ({ category }) => {
  return (
    <div>
      <WomentsCoponent category={category} />
    </div>
  );
};
