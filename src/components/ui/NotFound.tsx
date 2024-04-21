import React from "react";
import PageNotFound from "../../../public/images/404.svg";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-between gap-2.5">
        <img src={PageNotFound} alt="404 not found" width={400} height={400} />
        <p style={{ textAlign: "center" }}>
          <Link to="/" className="no-underline text-white">
            <button className="bg-[#0F172A] px-3 py-2 rounded-full">
              Go to Home
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
