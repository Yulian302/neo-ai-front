import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineDownload } from "react-icons/ai";
import formatBytes from "./utils/utils";
const ImageDropZone = ({ image, setImage }: any) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      setImage({
        ...image,
        name: file.name.split(".").slice(0, -1)[0],
        url: img.src,
        size: formatBytes(file.size),
        format: file.type.split("/")[1],
        dimension: `${img.width}x${img.height}`,
      });
    };
  }, []);
  useEffect(() => {}, [image]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });
  return (
    <div className="my-4 flex flex-col items-center">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div
          className={`border-[2px] border-background-color border-dashed border-black w-fit [&>*]:text-primary-text-color flex flex-col justify-center items-center ${
            image ? "p-0" : "p-5"
          }`}
        >
          {image.url ? (
            <img src={image.url} alt="Input image" width={256} height={256} />
          ) : (
            <>
              <AiOutlineDownload color="black" size={50} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drop your image here, or click to select a file</p>
              )}
            </>
          )}
        </div>
      </div>

      <div role="image details" className="flow-root mt-4">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle px-6 text-center">
            <h4 className="text-primary-text-color">Image details:</h4>
            {image.url ? (
              <div className="overflow-x-auto">
                <table className="min-w-full border border-collapse border-background-color max-[727px]:hidden">
                  <thead>
                    <tr className="[&>*]:px-5 [&>*]:py-3 [&>*]:text-center [&>*]:text-primary-text-color">
                      <th scope="col">Name</th>
                      <th scope="col">Format</th>
                      <th scope="col">Size</th>
                      <th scope="col">Dimension</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="[&>*]:px-5 [&>*]:py-3 [&>*]:text-center [&>*]:border-t-[1px] [&>*]:text-primary-text-color">
                      <td>{image.name}</td>
                      <td>{image.format}</td>
                      <td>{image.size}</td>
                      <td>{image.dimension}</td>
                    </tr>
                  </tbody>
                </table>
                <table className="min-w-full border border-collapse border-background-color min-[727px]:hidden">
                  <tbody>
                    <tr className="[&>*]:px-5 [&>*]:py-3 [&>*]:text-left [&>*]:border-t-[1px] [&>*]:text-primary-text-color">
                      <th scope="row">Name</th>
                      <td>{image.name}</td>
                    </tr>
                    <tr className="[&>*]:px-5 [&>*]:py-3 [&>*]:text-left [&>*]:border-t-[1px] [&>*]:text-primary-text-color">
                      <th scope="row">Format</th>
                      <td>{image.format}</td>
                    </tr>
                    <tr className="[&>*]:px-5 [&>*]:py-3 [&>*]:text-left [&>*]:border-t-[1px] [&>*]:text-primary-text-color">
                      <th scope="row">Size</th>
                      <td>{image.size}</td>
                    </tr>
                    <tr className="[&>*]:px-5 [&>*]:py-3 [&>*]:text-left [&>*]:border-t-[1px] [&>*]:text-primary-text-color">
                      <th scope="row">Dimension</th>
                      <td>{image.dimension}</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            ) : (
              <span className="text-[#d1d5db]">
                Add image to see it's details
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDropZone;
