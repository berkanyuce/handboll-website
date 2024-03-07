import React from "react";
import { useNavigate } from 'react-router-dom';
import { SponsorData } from '../Data/SponsorData';

function Sponsor() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/sponsor');
  };

  const filteredSponsors = SponsorData.filter(
    (sponsor) => sponsor.sponsor_type === 'Main Sponsor'
  );
  return (
    <>
    <div id="sponsors" className="py-10 border-t-4">
      <div className='flex justify-between items-center text-gray-500 py-5'>
        <div className=" text-5xl font-bold text-gray-500 underline decoration-green-500 ">Main Sponsors</div>
        <button onClick={handleButtonClick} className="button text-3xl p-4 relative inline-flex items-center justify-start overflow-hidden transition-all bg-white hover:bg-white group">
            <span className="w-0 h-full bg-green-300 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-gray-500 transition-colors duration-300 ease-in-out group-hover:text-gray-500 z-10 font-bold">
                All Sponsors
            </span>
           </button>
        </div>
        <div className="flex flex-wrap justify-center">
        {filteredSponsors.map((sponsor) => (
          <div key={sponsor.id} className="w-1/4 p-5 text-center">
            <img src={sponsor.sponsor_img} alt={sponsor.sponsor_name} className="mx-auto" />
          </div>
        ))}
      </div>
    </div>
    
    

    </>
  );
}

export default Sponsor;
