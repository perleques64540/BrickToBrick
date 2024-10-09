import { Link } from 'react-router-dom';
import person from '../../../assets/img/person-4.png'

// eslint-disable-next-line react/prop-types
const Member = ({
  img,
  name,
  info
}) => {
  return (
    <li
      className='jos rounded-[20px] bg-colorLinenRuffle p-[20px]'
      data-jos_animation='flip'
      data-jos_delay='0.1'
    >
      <div className='xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[250px]'>
        <img
          src={person}
          alt='team-member-img-1'
          width={376}
          height={400}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='mt-5'>
        <Link
          to='/team-details'
          className='font-dmSans text-[26px] leading-[1.33] hover:text-colorOrangyRed xxl:text-[30px]'
        >
          {name}
        </Link>
        <div className='mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center'>
          <span className='text-[21px]'>Student Number: {info}</span>
        </div>
      </div>
    </li>
  );
};

export default Member;
