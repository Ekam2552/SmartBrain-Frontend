import "./Logo.css";
import brain from "./brain.png";
import { Tilt } from "react-tilt";

const Logo = () => {
  const defaultOptions = {
    max: 55, // max tilt rotation (degrees)// Easing on enter/exit.
  };
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={defaultOptions}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: "5px" }} src={brain} alt="Brain Logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
