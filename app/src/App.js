import { useEffect, useState } from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import api from "./utils/api";
import Game from "./components/Game.js";

export default function App() {
  const [game, setGame] = useState();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getGame();
  }, []);

  const getGame = async () => {
    const res = await api.get("/game");
    if (!res.ok) return console.log(res);
    setGame(res.data);
    setTotal(res.total);
  };

  return (
    <View className="bg-orange-500 h-fit flex-col items-center">
      <ScrollView className="w-full">
        <Text className="mt-20">Nombre de Jeux : {total}</Text>
        <Game game={game} />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
