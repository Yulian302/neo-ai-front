import { Link } from "react-router-dom";

const MobileNavButton = ({ href, name }: any) => {
  return (
    <Link
      to={href}
      className={`text-[#D1D5DB] hover:text-[#ffffff] block rounded-md px-3 py-2 text-base font-medium ${
        location.pathname.includes(href.split("/").slice(-1))
          ? "tab-active"
          : "hover:bg-hover-nav-bg"
      }`}
    >
      {name}
    </Link>
  );
};
export default MobileNavButton;
