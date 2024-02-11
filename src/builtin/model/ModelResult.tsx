import React, { useContext, useEffect } from "react";
import { Model } from "../../templates/models/types";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiBox3Line } from "react-icons/ri";
import DarkModeContext from "../../user/context/DarkModeContext";

const ModelResult = ({ image, result }: any) => {
  const [isDark] = useContext(DarkModeContext);
  return (
    <div
      className="w-full flex justify-center bg-background-color"
      data-theme={isDark ? "dark" : "light"}
    >
      <div className="w-[96%] mt-2 mr-2 mb-5 text-primary-text-color py-2 px-5">
        <h4 className="text-center">Result</h4>
        <div className="flex items-center justify-center gap-1">
          <div className="flex flex-col gap-2">
            <img src={image.url} alt="Input image" width={128} height={128} />
            <span className="text-center text-primary-text-color">
              Input image
            </span>
          </div>
          <FaArrowRightLong color="black" size={50} />
          <div className="flex flex-col gap-2">
            <RiBox3Line color="black" size={128} />
            <span className="text-center text-primary-text-color">Model</span>
          </div>
          <FaArrowRightLong color="black" size={50} />
          <div className="flex flex-col gap-2">
            <img
              src={result.img ? result.img.src : image.url}
              alt="Output image"
              width={128}
              height={128}
            />
            <span className="text-center text-primary-text-color">
              Output image {!result.img ? <span>(Same)</span> : <></>}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span>Tumor detected: {result.prediction_label !== "no tumors"}</span>
          {result !== "no tumors" ? (
            <div className="flex flex-col">
              <span>Tumor type: {result.prediction_label}</span>
              <span>
                Inference time:{" "}
                {String(result.inference_time).slice(0, 3) + "s"}
              </span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelResult;
