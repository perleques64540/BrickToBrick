import { Link } from 'react-router-dom';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import data from './data.json';
import Member from '../../../components/widget/team/Member';

const Team = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='Our Team' />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Team Section Start :::... */}
        <section id='team-section'>
          {/* Section Spacer */}
          <div className='pb-40 xl:pb-[220px]'>
            {/* Section Container */}
            <div className='global-container'>
              {/* Section Content Block */}
              <div className='jos mb-10 text-center lg:mb-16 xl:mb-20'>
                <div className='mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]'>
                  <h2>Our team consists of a group of talents</h2>
                </div>
              </div>
              {/* Section Content Block */}
              {/* Team Member List */}
              <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                {/* Team Member Item */}
                {data.map((member, index) => (
                  <Member key={index} {...member} />
                ))}
                {/* Team Member Item */}

                {/* Inviting */}
                
              </ul>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Team Section End :::... */}
      </main>
    </>
  );
};

export default Team;
