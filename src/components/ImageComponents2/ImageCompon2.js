import React, { useEffect, useState } from "react";
import hotel from "../../assets/hotel_img.jpeg";
import "./imageCompon2.css";
const ImageCompon2 = ({ questions, func }) => {
  const [options, setOptions] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });
  const new_options = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  };
  useEffect(() => {
    func(options);
  }, [options]);

  const handleChoose = (id, value) => {
    console.log(questions,'adfasfd')
    setOptions({ ...new_options, [id]: !value });
  };
  return (
    <div>
      {" "}
      <div style={{ position: "relative" }}>
        <img
          className="hotel"
          src={hotel}
          alt="run"
          style={{
            borderRadius: "10px",
            width: "29%",
            display: "block",

            margin: "5% auto auto",
          }}
        />
        <span style={{ position: "absolute" }} className="font_style up_text">
          {questions[0]}
        </span>
        <span
          style={{ position: "absolute", top: "50" }}
          className="font_style mid_text"
        >
          {questions[1]}
        </span>
        <span
          style={{ position: "absolute", top: "50" }}
          className="font_style down_text"
        >
          {questions[2]}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "40%",
          marginTop: "1%",
        }}
        className="feed_points"
      >
        <div style={{ fontWeight: "500", fontSize: "18px", marginLeft: "2%" }}>
          This ad is tailored to my situation
        </div>
        <div
          style={{ display: "flex", gap: "2%", marginTop: "2%" }}
          className="run_point"
        >
          {Object.entries(options).map((key) => (
            <div
              onClick={() => handleChoose(key[0], key[1])}
              style={{
                width: "1.6rem",
                height: "2.1rem",
                border: "1px solid black",
                textAlign: "center",
                verticalAlign: "center",
                borderRadius: "3px",
                cursor: "pointer",
              }}
              className={key[1] ? "feedback" : ""}
            >
              {key[0]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCompon2;