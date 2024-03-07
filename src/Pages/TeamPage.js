import React, { useState } from "react";
import { playerData } from "../Data/PlayerData";

const TeamPage = () => {
  const [display, setDisplay] = useState("Senior");

  const filteredPlayers = playerData.filter((player) => player.team_type === display);

  const teamTypes = ["Senior", "U19", "Backteam"];
  const positions = ["Goalkeeper", "Field", "Shooter", "Wing", "Backteam"];


  const renderPlayerCards = (position) => {
    const teamTypePlayers = filteredPlayers.filter((player) => player.position === position);
    return (
      <div className="flex flex-wrap p-5 border-4 border-green-500 w-full justify-center">
        {teamTypePlayers.map((player) => (
          <div key={player.id} className="flex-shrink-0 w-1/3 p-4">
            <div className="bg-white border border-gray-200 shadow h-full flex flex-col">
              <img className="w-full h-auto rounded-t-lg" src={player.player_img} alt={player.name} />
              <div className="flex-grow p-4 flex flex-col items-center">
                <h5 className="mb-1 text-xl font-medium text-gray-900">
                  {player.name + ' ' + player.surname}
                </h5>
                {player.sponsor !== '' && (
                  <>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Player Sponsor
                    </span>
                    <div className="flex items-center justify-center">
                      <img src={player.sponsor} className="w-1/2" alt="Sponsor" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-between items-center text-gray-500 py-5">
      <div className="text-5xl font-bold underline decoration-green-500 py-10">
        Handbool Team SC
      </div>
      <div className="py-5">
        {teamTypes.map((team_type) => (
          <button
            key={team_type}
            className={`button text-2xl px-4 font-bold border-b-4 ${
              display === team_type ? "border-green-500" : ""
            } transition duration-300`}
            onClick={() => setDisplay(team_type)}
          >
            {team_type}
          </button>
        ))}
      </div>
        
      {display === "Backteam" ? (
        <div className="w-full">
            <div className={`text-5xl font-bold underline decoration-green-500 py-5`}>
            Backteam
            </div>
            {renderPlayerCards("Backteam")}
        </div>
        ) : (
        positions
            .filter(
            (position) =>
                !(["Senior", "U19"].includes(display) && position === "Backteam")
            )
            .map((position) => (
            <div key={position} className="w-full">
                <div className={`text-5xl font-bold underline decoration-green-500 py-5`}>
                {position}
                </div>
                {renderPlayerCards(position)}
            </div>
            ))
        )}




    </div>
  );
};

export default TeamPage;
