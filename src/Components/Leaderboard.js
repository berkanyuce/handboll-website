import React, { useState } from "react";
function Leaderboard() {
  
  const teamsData = [
    { id: 1, teamLogo: 'https://picsum.photos/id/237/100', name: 'Team A', matchesPlayed: 5, goalsScored: 12, goalsConceded: 5, points: 15 },
    { id: 2, teamLogo: 'https://picsum.photos/id/237/100', name: 'Team B', matchesPlayed: 5, goalsScored: 10, goalsConceded: 8, points: 12 },
    { id: 3, teamLogo: 'https://picsum.photos/id/237/100', name: 'Team C', matchesPlayed: 5, goalsScored: 12, goalsConceded: 5, points: 15 },
    { id: 4, teamLogo: 'https://picsum.photos/id/237/100', name: 'Team D', matchesPlayed: 5, goalsScored: 10, goalsConceded: 8, points: 12 },
    { id: 5, teamLogo: 'https://picsum.photos/id/237/100', name: 'Team E', matchesPlayed: 5, goalsScored: 12, goalsConceded: 5, points: 15 },
    { id: 6, teamLogo: 'https://picsum.photos/id/237/100', name: 'Team F', matchesPlayed: 5, goalsScored: 11, goalsConceded: 8, points: 12 },
    { id: 7, teamLogo: 'https://picsum.photos/id/237/100', name: 'Team G', matchesPlayed: 5, goalsScored: 16, goalsConceded: 5, points: 15 },
    { id: 8, teamLogo: 'https://picsum.photos/id/237/100', name: 'Team H', matchesPlayed: 5, goalsScored: 15, goalsConceded: 8, points: 12 },
    { id: 9, teamLogo: 'https://picsum.photos/id/237/100', name: 'Team I', matchesPlayed: 5, goalsScored: 11, goalsConceded: 5, points: 15 },
    { id: 10, teamLogo: 'https://picsum.photos/id/237/100', name: 'Team J', matchesPlayed: 5, goalsScored: 10, goalsConceded: 8, points: 12 },
    { id: 11, teamLogo: 'https://picsum.photos/id/237/100', name: 'Team K', matchesPlayed: 5, goalsScored: 22, goalsConceded: 5, points: 15 },
    { id: 12, teamLogo: 'https://picsum.photos/id/237/100', name: 'Team L', matchesPlayed: 5, goalsScored: 10, goalsConceded: 8, points: 12 },
    // Diğer takımları buraya ekleyin
  ];

  const teams2Data = [
    { id: 1, teamLogo: 'https://picsum.photos/id/238/100', name: 'Team A', matchesPlayed: 5, goalsScored: 12, goalsConceded: 5, points: 15 },
    { id: 2, teamLogo: 'https://picsum.photos/id/238/100', name: 'Team B', matchesPlayed: 5, goalsScored: 10, goalsConceded: 8, points: 12 },
    { id: 3, teamLogo: 'https://picsum.photos/id/238/100', name: 'Team C', matchesPlayed: 5, goalsScored: 12, goalsConceded: 5, points: 15 },
    { id: 4, teamLogo: 'https://picsum.photos/id/238/100', name: 'Team D', matchesPlayed: 5, goalsScored: 10, goalsConceded: 8, points: 12 },
    { id: 5, teamLogo: 'https://picsum.photos/id/238/100', name: 'Team E', matchesPlayed: 5, goalsScored: 12, goalsConceded: 5, points: 15 },
    { id: 6, teamLogo: 'https://picsum.photos/id/238/100', name: 'Team F', matchesPlayed: 5, goalsScored: 11, goalsConceded: 8, points: 12 },
    { id: 7, teamLogo: 'https://picsum.photos/id/238/100', name: 'Team G', matchesPlayed: 5, goalsScored: 16, goalsConceded: 5, points: 15 },
    { id: 8, teamLogo: 'https://picsum.photos/id/238/100', name: 'Team H', matchesPlayed: 5, goalsScored: 15, goalsConceded: 8, points: 12 },
    { id: 9, teamLogo: 'https://picsum.photos/id/238/100', name: 'Team I', matchesPlayed: 5, goalsScored: 11, goalsConceded: 5, points: 15 },
    { id: 10, teamLogo: 'https://picsum.photos/id/238/100', name: 'Team J', matchesPlayed: 5, goalsScored: 10, goalsConceded: 8, points: 12 },
    { id: 11, teamLogo: 'https://picsum.photos/id/238/100', name: 'Team K', matchesPlayed: 5, goalsScored: 22, goalsConceded: 5, points: 15 },
    { id: 12, teamLogo: 'https://picsum.photos/id/238/100', name: 'Team L', matchesPlayed: 5, goalsScored: 10, goalsConceded: 8, points: 12 },
    // Diğer takımları buraya ekleyin
  ];

  const matchesData = [
    {
      id: 1,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/237/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/237/100',
      team2Name: 'Team B',
    },
    {
      id: 2,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/237/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/237/100',
      team2Name: 'Team B',
    },
    {
      id: 3,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/237/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/237/100',
      team2Name: 'Team B',
    },
    {
      id: 4,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/237/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/237/100',
      team2Name: 'Team B',
    },
    {
      id: 5,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/237/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/237/100',
      team2Name: 'Team B',
    },
    {
      id: 6,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/237/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/237/100',
      team2Name: 'Team B',
    },
    {
      id: 7,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/237/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/237/100',
      team2Name: 'Team B',
    },
    {
      id: 8,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/237/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/237/100',
      team2Name: 'Team B',
    },
    {
      id: 9,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/237/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/237/100',
      team2Name: 'Team B',
    },
    {
      id: 10,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/237/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/237/100',
      team2Name: 'Team B',
    },
    {
      id: 11,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/237/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/237/100',
      team2Name: 'Team B',
    },
    {
      id: 12,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/237/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/237/100',
      team2Name: 'Team B',
    },
  ];
  const matches2Data = [
    {
      id: 1,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/238/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/238/100',
      team2Name: 'Team B',
    },
    {
      id: 2,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/238/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/238/100',
      team2Name: 'Team B',
    },
    {
      id: 3,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/238/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/238/100',
      team2Name: 'Team B',
    },
    {
      id: 4,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/238/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/238/100',
      team2Name: 'Team B',
    },
    {
      id: 5,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/238/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/238/100',
      team2Name: 'Team B',
    },
    {
      id: 6,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/238/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/238/100',
      team2Name: 'Team B',
    },
    {
      id: 7,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/238/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/238/100',
      team2Name: 'Team B',
    },
    {
      id: 8,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/238/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/238/100',
      team2Name: 'Team B',
    },
    {
      id: 9,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/238/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/238/100',
      team2Name: 'Team B',
    },
    {
      id: 10,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/238/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/238/100',
      team2Name: 'Team B',
    },
    {
      id: 11,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/238/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/238/100',
      team2Name: 'Team B',
    },
    {
      id: 12,
      date: '2024-03-01',
      time: '15:30',
      team1Logo: 'https://picsum.photos/id/238/100',
      team1Name: 'Team A',
      team2Logo: 'https://picsum.photos/id/238/100',
      team2Name: 'Team B',
    },
  ];

  const [selectedLeague, setSelectedLeague] = useState('league1'); // Başlangıçta ilk lig gösterilsin

  const handleLeagueChange = (league) => {
    setSelectedLeague(league);
  };

  const getTeamsData = () => {
    return selectedLeague === 'league1' ? teamsData : teams2Data;
  };

  const getMatchesData = () => {
    return selectedLeague === 'league1' ? matchesData : matches2Data;
  };

  
  return (
    <>
    <div id='leaderboard' className="py-10 border-t-4">

    <div className="flex justify-between items-center py-5">
      <h1 className="text-5xl text-gray-500 font-semibold mb-4 underline decoration-green-500 ">Leaderboard ve Oynanacak Maçlar</h1>
      <div className="">
        <button
          onClick={() => handleLeagueChange('league1')}
          className={`py-4 px-4 text-3xl font-bold text-gray-500 ${selectedLeague === 'league1' ? 'bg-green-300' : 'bg-gray-300'} transition duration-300`}
        >
          League 1
        </button>
        <button
          onClick={() => handleLeagueChange('league2')}
          className={`py-4 px-4 text-3xl font-bold text-gray-500 ${selectedLeague === 'league2' ? 'bg-green-300' : 'bg-gray-300'} transition duration-300`}
        >
          League 2
        </button>
      </div>
      
    </div>
    
    <div className="flex mt-5">
      <div className="container mx-auto mt-8 w-5/12 h-80 overflow-auto">
        <div className="flex flex-col text-center">
          <div className="grid grid-cols-5 gap-4 bg-green-300 p-4 font-bold text-gray-500 sticky top-0">
            <span>Pos</span>
            <span>Team</span>
            <span>P</span>
            <span>A</span>
            <span>Pts</span>
          </div>
          {getTeamsData().map((team) => (
            <div key={team.id} className="grid grid-cols-5 gap-4 p-4 text-gray-500">
              <span>{team.id}</span>
              <span>{team.name}</span>
              <span>{team.matchesPlayed}</span>
              <span>{team.goalsScored} - {team.goalsConceded}</span>
              <span>{team.points}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-8 w-5/12 h-80 overflow-auto">
        <table className="min-w-full  ">
          <thead className="sticky top-0">
            <tr className="bg-green-300 text-gray-500">
              <th className="py-4">Tarih</th>
              <th className="py-2">Takım 1</th>
              <th className="py-2"></th>
              <th className="py-4">Takım 2</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            {getMatchesData().map((match) => (
              <tr key={match.id}>
                <td className="py-3 text-center ">
                  {new Date(match.date).toLocaleDateString('tr-TR', { month: 'long', day: 'numeric' })} - {match.time}
                </td>
                <td className="py-3 flex items-center text-center justify-center">
                  <img src={match.team1Logo} alt={`${match.team1Name} Logo`} className="w-8 h-8 mr-2 text-center" />
                  {match.team1Name}
                </td>
                <td className="py-3 text-center">vs</td>
                <td className="py-3 flex items-center text-center justify-center">
                  <img src={match.team2Logo} alt={`${match.team2Name} Logo`} className="w-8 h-8 mr-2 text-center" />
                  {match.team2Name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>

    </>
  );
}

export default Leaderboard;
