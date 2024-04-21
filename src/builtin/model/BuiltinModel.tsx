import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Model } from "../../templates/models/types";
import { useParams } from "react-router";
import getModelDetails from "../api/getModelDetails";
import { AxiosResponse } from "axios";
import { Layout } from "../../components/ui/Header";
import ModelDetailsPanel from "./ModelDetailsPanel";
import ModelUsagePanel from "./ModelUsagePanel";
import DarkModeContext from "../../user/context/DarkModeContext";
import ModelResult from "./ModelResult";
import { useNavigate } from "react-router-dom";

const BuiltinModel = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [model, setModel]: [Model, Dispatch<SetStateAction<Model>>] = useState(
    {} as Model
  );
  const [isDark] = useContext(DarkModeContext);
  const [modelResultInfo, setModelResultInfo] = useState({
    prediction_label: "",
    inference_time: "",
    image: {
      src: "",
    },
  });
  useEffect(() => {
    const fetchModel = async () => {
      const response: AxiosResponse<Model> = await getModelDetails(Number(id));
      setModel(response.data);
      return response.data;
    };
    fetchModel().then((r) => {
      if (!r.id) {
        navigate("/not-found");
      }
    });
  }, []);
  const [image, setImage] = useState({
    name: "",
    url: "",
    format: "",
    size: "",
    dimension: "",
    base64: "",
  });
  return (
    <div
      className="w-full h-[80vh] bg-background-color"
      data-theme={isDark ? "dark" : "light"}
    >
      <Layout>
        <div className="flex flex-col">
          <div className="flex max-[640px]:flex-col [&>*>*]:border-[1px] [&>*>*]:border-[#e7eaf3] [&>*>*]:border-solid [&>*>*]:shadow-[0rem_0.375rem_1.5rem_0rem_rgba(140,152,164,0.125)]">
            <ModelDetailsPanel model={model} />
            <ModelUsagePanel
              image={image}
              setImage={setImage}
              resultInfo={modelResultInfo}
              setResultInfo={setModelResultInfo}
              modelId={id}
            />
          </div>
          {modelResultInfo.prediction_label ? (
            <div className="[&>*>*]:border-[1px] [&>*>*]:border-[#e7eaf3] [&>*>*]:border-solid [&>*>*]:shadow-[0rem_0.375rem_1.5rem_0rem_rgba(140,152,164,0.125)]">
              <ModelResult image={image} result={modelResultInfo} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default BuiltinModel;
