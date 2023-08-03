import React from "react";
import { View } from "react-native";
import MyText from "./MyText";

function renderListItem(index, ordered, children, key) {
  if (!ordered) {
    return (
      <View className="flex flex-row items-start justify-start pl-4">
        <View className="bg-white w-2 h-2 mt-2 mr-1 rounded-full"></View>
        <MyText>{children}</MyText>
      </View>
    );
  } else {
    return (
      <View className="flex flex-row items-start justify-start pl-4">
        <MyText style="text-base font-bold mr-1">{index + 1}.</MyText>
        <MyText>{children}</MyText>
      </View>
    );
  }
}

export default renderListItem;
