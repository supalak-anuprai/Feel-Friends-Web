import { MensComponent } from "../Components/Mens/mensComponent";

export const MensMain = ({ category }) => {
  return (
    <div>
      <MensComponent category={category} />
    </div>
  );
};
