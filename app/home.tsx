import { useState } from "react";
import LottieView from "lottie-react-native";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from "react-native";

import travel from "@/assets/lotties/travel.json";
import astronaut from "@/assets/lotties/astronaut.json";

export default function Home() {
  const [isTraveling, setIsTraveling] = useState(false);

  function startTravel() {
    setIsTraveling(true);
  }

  return (
    <SafeAreaView>
      <LottieView
        source={isTraveling ? astronaut : travel}
        style={[styles.lottie, { height: isTraveling ? "100%": "80%" }]}
        autoPlay
        loop={isTraveling}
      />
      {!isTraveling && (
        <TouchableOpacity
          onPress={startTravel}
          style={styles.travelButton}
        >
          <Text>
            Empezar Viaje
          </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  lottie: {
    width: "100%"
  },
  travelButton: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    alignItems: "center"
  }
});