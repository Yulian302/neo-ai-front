import React from "react";
import ImageDropZone from "../ui/ImageDropZone";
import useModel from "../api/useModel";
import { AxiosResponse } from "axios";
import { ModelResultType } from "../types";

const ModelUsagePanel = ({
  image,
  setImage,
  resultInfo,
  setResultInfo,
  modelId,
}: any) => {
  const handleApplyModel = async () => {
    const response: AxiosResponse<ModelResultType> = await useModel(
      modelId,
      image
    );
    setResultInfo({
      ...resultInfo,
      prediction_label: response.data.prediction_label,
      inference_time: response.data.inference_time,
    });
  };
  return (
    <div className="w-[62.5%] max-[640px]:w-full flex justify-center bg-background-color">
      {/*panel*/}
      <div className="mt-5 w-[90%]">
        <ImageDropZone image={image} setImage={setImage} />
        <div className="text-center alert">
          <span className="text-[#ff0f0f]">
            All images will be cropped to dimension [512x512]. Try to use
            adequate image size
          </span>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="btn btn-success mb-4"
            onClick={handleApplyModel}
            disabled={!image.url}
          >
            Apply model
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelUsagePanel;
