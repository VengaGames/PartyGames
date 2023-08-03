import { View, Image } from "react-native";
import MyText from "./MyText";
import Markdown from "react-native-easy-markdown";
import CustomListBullet from "./CustomListBullet.js";

function Game({ game }) {
  if (!game) return <MyText>Game not found</MyText>;
  return (
    <View className="p-4">
      <View className="items-center">
        <MyText style="text-3xl font-bold">{game.title}</MyText>
      </View>
      <View className="flex-row items-center mt-4">
        <MyText style="font-bold">Nombre de joueurs:</MyText>
        <MyText style="ml-2">{game.playerNb}</MyText>
      </View>
      <View className="items-center my-6">
        <Image source={{ uri: game.image }} className="w-64 h-64" />
      </View>

      <View>
        <Markdown
          renderListItem={CustomListBullet}
          markdownStyles={{
            text: {
              color: "white",
              fontSize: 16,
            },
          }}>
          {game.description}
        </Markdown>
      </View>
    </View>
  );
}

export default Game;
