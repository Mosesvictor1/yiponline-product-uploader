import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";

const ProfileScreen = () => {
  return (
    <View className="flex-1 bg-gray-100">
      <Header title="Profile" />
      <View className="p-4">
        <View className="bg-white p-4 rounded-lg shadow-sm">
          <Text className="text-xl font-bold mb-4">User Information</Text>
          <View className="space-y-2">
            <Text className="text-gray-600">Name: Victor Moses</Text>
            <Text className="text-gray-600">Email: victormoses2b@gmail.com</Text>
            <Text className="text-gray-600">Member since: June 2025</Text>
          </View>
        </View>

        <TouchableOpacity className="bg-red-500 p-3 rounded-lg mt-4">
          <Text className="text-white text-center font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
