import React, { useState } from "react";
import { SponsorData } from '../Data/SponsorData';

const SponsorButton = ({ sponsorType, display, setDisplay }) => (
  <button
    className={`button text-2xl px-4 font-bold border-b-4 ${
      display === sponsorType ? "border-green-500" : ""
    } transition duration-300`}
    onClick={() => setDisplay(sponsorType)}
  >
    {`${sponsorType}s`}
  </button>
);

const SponsorPage = () => {
  const [display, setDisplay] = useState("Main Sponsor");

  const filteredSponsors = SponsorData.filter(
    (sponsor) => sponsor.sponsor_type === display
  );

  return (
    <div className="py-10">
      <div className='text-gray-500 py-5 mx-auto text-center'>
        <div className="text-5xl font-bold text-gray-500 underline decoration-green-500">Sponsors</div>
      </div>

      <div className="flex justify-center items-center text-gray-500 py-10">
        <SponsorButton sponsorType="Main Sponsor" display={display} setDisplay={setDisplay} />
        <SponsorButton sponsorType="Elite Sponsor" display={display} setDisplay={setDisplay} />
        <SponsorButton sponsorType="Local Sponsor" display={display} setDisplay={setDisplay} />
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredSponsors.map((sponsor) => (
          <div key={sponsor.id} className="w-1/3 p-5 text-center">
            <img src={sponsor.sponsor_img} alt={sponsor.sponsor_name} className="mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorPage;
