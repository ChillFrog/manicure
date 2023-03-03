import React from "react";
import { useSelector } from "react-redux";

function Hand() {
  const palleteColor = useSelector((state) => state.app.palleteColor);
  const handImage = useSelector((state) => state.app.handImage);

  return (
    <div className="m-3 flex justify-center">
      <img
        src={handImage}
        width={1800}
        height={1800}
        alt="hand"
        className="max-w-md overflow-hidden md:max-w-xl"
        style={{
          backgroundColor: `${palleteColor}`,
        }}
      />
    </div>
  );
}

export default Hand;
