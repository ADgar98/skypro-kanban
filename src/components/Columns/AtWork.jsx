import Research from "../Cards/Reserch";
import Copywriting from "../Cards/Copywriting";
import WebDesign from "../Cards/WebDesign";
const AtWork = () => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>В работе</p>
      </div>
      <div className="cards">
        <Research />

        <Copywriting />

        <WebDesign/>
      </div>
    </div>
  );
};
export default AtWork;
