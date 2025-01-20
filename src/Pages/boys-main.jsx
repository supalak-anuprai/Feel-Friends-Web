import { BoysComponent } from "../Components/Boys/Boys-component";

export default function BoysMain({ category }) {
  return (
    <div>
      <BoysComponent category={category} />
    </div>
  );
}
