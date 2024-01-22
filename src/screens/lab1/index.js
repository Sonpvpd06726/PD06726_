import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const App = () => {
  const players = [
    { name: 'Messi', goals: 30 },
    undefined,
    { name: 'Ronaldo', goals: 28 },
    { name: 'Neymar', goals: 22 },
    { goals: 2 },
    { name: 'Mbappé', goals: 25 },
    { name: 'Pele', goals: null },
  ];
  const [maxGoalsPlayer, setMaxGoalsPlayer] = useState(null);
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    // Lọc và cập nhật
    const updatedPlayers = players.filter((player) => {
      if (!player || !player.name || player.goals === undefined || player.goals === null) {
        return false;
      }

      // Cầu thủ có số bàn thắng nhiều nhất
      if (!maxGoalsPlayer || player.goals > maxGoalsPlayer.goals) {
        setMaxGoalsPlayer(player);
      }

      return true;
    });

    // Danh sách cầu thủ đã được lọc
    setFilteredPlayers(updatedPlayers);
  }, [players, maxGoalsPlayer]);

  return (
    <View>
      <Text>Cầu thủ có số bàn thắng nhiều nhất:</Text>
      {maxGoalsPlayer && (
        <Text>{`${maxGoalsPlayer.name}: ${maxGoalsPlayer.goals} goals`}</Text>
      )}

      <Text>Danh sách cầu thủ đã được lọc:</Text>
      {filteredPlayers.map((player, index) => (
        <Text key={index}>{`${player.name}: ${player.goals} goals`}</Text>
      ))}
    </View>
  );
};

export default App;
