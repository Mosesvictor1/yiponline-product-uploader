import { Stack } from "expo-router";
import "@/global.css";
import { StatusBar } from "react-native";
export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <StatusBar backgroundColor="#000" />
    </>
  );
}
