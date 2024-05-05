
import { StatusBar } from "expo-status-bar";
import {  StyleSheet, Text, View } from "react-native"
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import "react-native-gesture-handler";
import Auto from "./Components/Auto";
import Command from "./Components/Command";
import Setting from "./Components/Setting";
import { colors } from "./utils/colors";
import HeaderBar from "./Components/HeaderBar";

import { useEffect } from "react";
import { GameProvider } from "./contexts/GameContext";



export default function App() {
  
  return (
    <View style={styles.container}>
      <GameProvider>
        <HeaderBar />
       <Command/> 

        <StatusBar style="dark" backgroundColor="white" hidden={true} />
      </GameProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    color: colors.text,
  },
});
