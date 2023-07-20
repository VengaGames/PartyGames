import { View, Text, Image } from "react-native";

function Game({ game }) {
  if (!game) return <Text>Game not found</Text>;
  return (
    <View>
      <View className="items-center my-8">
        <Image source={{ uri: game.image }} className="w-64 h-64" />
      </View>
      <View className="items-center">
        <Text className="text-2xl font-bold">{game.title}</Text>
      </View>

      <View className="p-4">
        <Text className="text-lg mt-4">{game.description}</Text>

        <View className="flex-row items-center mt-4">
          <Text className="font-bold">Nombre de joueurs:</Text>
          <Text className="ml-2">{game.playerNb === 999 ? "infini" : game.playerNb}</Text>
        </View>
      </View>
    </View>
  );
}

export default Game;
