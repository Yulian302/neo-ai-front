const ModelsTemplate = ({ models }: any) => {
  return (
    <div className="flex justify-start gap-5 m-5 [&>*]:no-underline">
      {models.length > 0 ? (
        <div>
          {models.map((model: any) => (
            <a href="#">
              <div className="flex flex-col items-start gap-2.5">
                <img src="#" alt="{{ model.name }}" className="w-48 h-auto" />
                <div className="w-full flex justify-center">
                  <span className="text-gray-800 text-sm">
                    {model.desc_name}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <span>No models found</span>
      )}
    </div>
  );
};
export default ModelsTemplate;
