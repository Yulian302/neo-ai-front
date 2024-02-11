import { Link } from "react-router-dom";

const ModelsTemplate = ({ models }: any) => {
  return (
    <div className="flex justify-start gap-5 m-5 [&>*]:no-underline">
      {models.length > 0 ? (
        <div>
          {models.map((model: any, i: number) => (
            <Link to={`${model.id}/`} className="no-underline" key={i}>
              <div className="flex flex-col items-start gap-2.5  hover:scale-105 ease-in-out duration-200">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-48 h-auto"
                />
                <div className="w-full flex justify-center">
                  <span className="text-gray-800 text-sm">
                    {model.desc_name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <span className="text-primary-text-color">No models found</span>
      )}
    </div>
  );
};
export default ModelsTemplate;
