import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import ProductProvider from "./context/ProductContext";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { StatusBar } from "react-native";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#3b82f6",
        tabBarInactiveTintColor: "#6b7280",
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: "#e5e7eb",
          paddingBottom: insets.bottom,
          paddingTop: 5,
          height: 65,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: "white",
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductProvider>
         <StatusBar backgroundColor="#000" />
        <Navigation />
      </ProductProvider>
    </SafeAreaView>
  );
}
