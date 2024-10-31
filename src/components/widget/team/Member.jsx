import { Link } from "react-router-dom";
import person from "../../../assets/img/person-4.png";

// eslint-disable-next-line react/prop-types
const Member = ({ name, info, assignment }) => {
  return (
    <li
      className="jos rounded-[20px] bg-colorLinenRuffle p-[20px]"
      data-jos_animation="flip"
      data-jos_delay="0.1"
    >
      <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[250px]">
        <img
          src={person}
          alt="team-member-img-1"
          width={376}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-5 text-center">
        <Link
          to="/team-details"
          className="font-dmSans text-[26px] leading-[1.33] hover:text-colorOrangyRed xxl:text-[30px]"
        >
          {name}
        </Link>
        <div className="m-3 text-center">
          <span className="text-[21px]">Student Number: {info}</span>
        </div>
        <div className="p-4">
          <Link to={assignment} className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white">
            Individual Assignment
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Member;
