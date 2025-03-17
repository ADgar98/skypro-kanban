import Research from "../Cards/Reserch";
import Copywriting from "../Cards/Copywriting";
import WebDesign from "../Cards/WebDesign";

const WithoutAStatus = () => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>Без статуса</p>
      </div>
      <div className="cards">
        <WebDesign />

        <Research />

        <WebDesign />

        <Copywriting />

        <WebDesign />
      </div>
    </div>
  );
};
export default WithoutAStatus;
