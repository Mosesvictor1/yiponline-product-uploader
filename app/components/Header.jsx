import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");

const Header = ({ title, showBack = false }) => {
  const navigation = useNavigation();

  return (
    <View
      className="bg-white px-4 py-3 flex-row items-center border-b border-gray-200"
      style={{ width: width > 600 ? 600 : width, alignSelf: "center" }}
    >
      {showBack && (
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-3">
          <Text className="text-blue-500 text-lg">←</Text>
        </TouchableOpacity>
      )}
      <Text className="text-xl font-bold flex-1" numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
