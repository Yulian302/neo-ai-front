import React from "react";
import { Model } from "../../templates/models/types";

const ModelDetailsPanel = ({ model }: { model: Model }) => {
  return (
    <div className="w-[37.5%] flex justify-center">
      <div className="w-[90%] mt-5 flex flex-col items-center text-primary-text-color py-2 px-5 gap-2">
        <span>{model.desc_name}</span>
        <img src={model.image} alt={model.name} />
        <span>
          <h4>Description</h4>
        </span>
        <span className="indent-8 text-justify">{model.description}</span>
      </div>
    </div>
  );
};

export default ModelDetailsPanel;
