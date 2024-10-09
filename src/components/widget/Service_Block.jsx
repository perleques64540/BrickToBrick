import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Service_Block = ({ title, status, text, link }) => {
  // Define status-based color classes
  const statusColor =
    status === "Delivered"
      ? "text-green-500"
      : status === "In Progress"
      ? "text-yellow-500"
      : status === "Not Started"
      ? "text-orange-500"
      : "text-gray-500"; // default color if none of the conditions match

  return (
    <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
      <h2 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
        {link ? (
          <Link to={link} className="hover:text-colorOrangyRed">
            {title}
          </Link>
        ) : (
          <span className="hover:text-colorOrangyRed">{title}</span>
        )}
      </h2>
      {/* Apply the dynamic statusColor class based on status */}
      <h3
        className={`mb-4 block text-xl leading-tight -tracking-[0.5px] ${statusColor} group-hover:text-white xl:text-2xl xxl:text-[28px]`}
      >
        {status}
      </h3>
      <p className="mb-12 duration-300 group-hover:text-white">{text}</p>
      {link ? (
        <Link
          to={link}
          className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
        >
          View Report
        </Link>
      ) : (
        <></>
      )}
    </li>
  );
};

export default Service_Block;
