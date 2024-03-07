import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { playerData } from "../Data/PlayerData";
import { useNavigate } from 'react-router-dom';


function Players() {
  const [display, setDisplay] = useState("Senior");
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/team');
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const filteredPlayers = playerData.filter(
    (player) => player.team_type === display
  );

 
  return (
    <>
      <div id="players" className="py-10 ">
        <div className="my-5 flex justify-between items-center text-gray-500 py-10">
          <div className="text-5xl font-bold underline decoration-green-500 ">Team</div>
          <div>
            <button
              className={`button text-2xl px-4 font-bold border-b-4 ${
                display === "Senior" ? "border-green-500" : ""
              } transition duration-300`}
              onClick={() => setDisplay("Senior")}
            >
              Senior
            </button>
            <button
              className={`button text-2xl px-4 font-bold border-b-4 ${
                display === "U19" ? "border-green-500" : ""
              } transition duration-300`}
              onClick={() => setDisplay("U19")}
            >
              U19
            </button>
          </div>
        

          <button onClick={handleButtonClick} className="button text-3xl p-4 relative inline-flex items-center justify-start overflow-hidden transition-all bg-white hover:bg-white group">
            <span className="w-0 h-full bg-green-300 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-gray-500 transition-colors duration-300 ease-in-out group-hover:text-gray-500 z-10 font-bold">
                All Team
            </span>
           </button>


        </div>

        <div className="slider-container mb-5">
          <Slider {...settings}>
          {filteredPlayers.map((player) => (
            <div className="card" key={player.id}>
              <div className="card-top relative">
                <img src={player.player_img} alt={player.name} className="" />
                <h2 className="absolute text-3xl font-bold text-gray-500 top-5 left-5">{player.name}</h2>
                <h2 className="absolute text-3xl font-bold text-gray-500 top-12 left-5">{player.surname}</h2>
                <h2 className="absolute text-2xl text-gray-500 top-20 left-5">{player.position}</h2>
              </div>
              <div className="card-bottom flex items-center justify-center">
                {player.sponsor ? (
                  <>
                  <div className="flex flex-col align-center">
                  <p>Player's Sponsor</p>
                  <img src={player.sponsor} className="w-1/2 p-4" alt="Sponsor" />
                  </div>
                  </>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          ))}

          </Slider>
        </div>
      </div>
    </>
  );
}

export default Players;
