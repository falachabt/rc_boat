
import { StatusBar } from "expo-status-bar";
import {  StyleSheet, Text, View } from "react-native"
// import "react-native-gesture-handler";
import Command from "./Components/Command";
import { colors } from "./utils/colors";
import HeaderBar from "./Components/HeaderBar";


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
