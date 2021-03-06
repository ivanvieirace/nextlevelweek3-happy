import React from "react";
import { Feather } from "@expo/vector-icons";
import background1 from "../images/earthhappy.png";
import OrphanagesMap from "../pages/OrphanagesMap";
import Onboarding2 from "./Onboarding2";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export default function Onboarding1() {
  const navigation = useNavigation();

  function handleNavigateToOnboarding2() {
    return navigation.navigate("Onboarding2");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={background1} style={styles.imageContent} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textContent}>Leve felicidade para o Mundo</Text>
        <Text style={styles.textSubContent}>
          Visite Orfanatos e mude o dia de muitas Crianças
        </Text>
      </View>

      <View style={styles.footerContainer}>
        <RectButton
          style={styles.nextButton}
          onPress={handleNavigateToOnboarding2}
        >
          <Feather name="arrow-right" size={20} color="#fff" />
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  topContainer: {
    height: "32%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContent: {
    marginTop: -10,
    height: 182,
    width: 168,
    padding: 20,
  },
  textContainer: {
    height: "52%",
  },
  textContent: {
    marginTop: "2%",
    color: "#2473a8",
    fontSize: 45,
    fontFamily: "Nunito_700Bold",
    paddingLeft: "10%",
    paddingRight: "30%",
    lineHeight: 55,
  },
  textSubContent: {
    marginTop: 20,
    color: "#2473a8",
    fontSize: 22,
    fontFamily: "Nunito_700Bold",
    paddingLeft: "11%",
    paddingRight: "15%",
    lineHeight: 32,
  },
  footerContainer: {
    height: "16%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  nextButton: {
    width: 56,
    height: 56,
    backgroundColor: "#2473a8",
    borderRadius: 20,

    marginRight: 30,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
