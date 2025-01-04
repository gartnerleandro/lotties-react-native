import LottieView from "lottie-react-native";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useRef, useState } from "react";
import { Link } from "expo-router";

import { IconSymbol } from "@/components/ui/IconSymbol";

import car from "@/assets/lotties/car.json";

export default function Index() {
  const [isSwapped, setIsSwapped] = useState(false);
  const carLottie = useRef<LottieView>(null);

  function stopCar() {
    carLottie.current?.pause();
  }

  function playCar() {
    if (isSwapped) {
      carLottie.current?.play(181, 0);
    } else {
      carLottie.current?.play();
    }
  }

  function swapCar() {
    if (isSwapped) {
      carLottie.current?.play();
    } else {
      carLottie.current?.play(181, 0);
    }

    setIsSwapped(!isSwapped);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <LottieView
        source={car}
        ref={carLottie}
        loop
        autoPlay
        style={styles.lottie}
      />
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity onPress={stopCar} style={styles.button}>
          <IconSymbol name="pause" color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={playCar} style={styles.button}>
          <IconSymbol name="play" color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={swapCar} style={styles.button}>
          <IconSymbol name="repeat" color="#000" />
        </TouchableOpacity>
      </View>
      <Link href="/home" style={styles.travelButton}>
        Preparar viaje
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  lottie: {
    width: '100%',
    height: 250
  },
  buttonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 10
  },
  button: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff'
  },
  travelButton: {
    backgroundColor: "#5c3f6b",
    color: "#FFF",
    fontWeight: "bold",
    padding: 10,
    borderRadius: 8,
    textAlign: "center",
    marginHorizontal: 10,
    marginTop: "auto",
    marginBottom: 10
  }
});