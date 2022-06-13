import Draggable from "react-draggable";
import { useState } from "react";
import Header from "./header";
import Footer from "./footer";

const MainComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [click, setClick] = useState(false);
  const [target, setTarget] = useState("fixed");
  const aligner = () => {
    setClick(true);
    console.log(click);
  };

  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };
  return (
    <div className="main-component">
      <Header
        click={click}
        setClick={setClick}
        aligner={aligner}
        target={target}
        setTarget={setTarget}
      />
      <div
        className="mid-portion"
        style={{
          position: `${click ? " " : "relative"}`
        }}
      >
        <Draggable bounds="parent" onDrag={(e, data) => trackPos(data)}>
          <div
            className={`box  ${`${click ? "bottom-right" : ""}`}`}
            style={{
              position: `${target === "fixed" ? "absolute " : ""}`
            }}
          >
            Hey Box here x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
          </div>
        </Draggable>
      </div>
      <Footer />
    </div>
  );
};
export default MainComponent;
