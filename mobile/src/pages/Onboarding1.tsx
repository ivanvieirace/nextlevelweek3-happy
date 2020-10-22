import React from "react";
import { Feather } from "@expo/vector-icons";
import background1 from "../images/earthhappy.png";
import OrphanagesMap from "../pages/OrphanagesMap";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export default function Onboarding1() {
  const navigation = useNavigation();

  function handleNavigateToOrphanage() {
    return navigation.navigate("OrphanagesMap");
  }

  return (
    <View style={styles.imageContainer}>
      <Image source={background1} style={styles.imageConfig} />
      <Text style={styles.textTitle}>Leve felicidade para o Mundo</Text>
      <Text style={styles.textDescription}>
        Visite Orfanatos e mude o dia de muitas Crianças
      </Text>
      <RectButton
        style={styles.goOrphanagesMapButton}
        onPress={handleNavigateToOrphanage}
      >
        <Feather name="arrow-right" size={20} color="#fff" />
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: "#fff",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  imageConfig: {
    marginLeft: 100,
    marginTop: 30,
    height: 200,
    width: 200,
  },
  textTitle: {
    marginTop: 25,
    color: "#2473a8",
    fontSize: 55,
    fontFamily: "Nunito_700Bold",
    paddingLeft: 46,
    paddingRight: 120,
    lineHeight: 55,
  },
  textDescription: {
    marginTop: 20,
    color: "#2473a8",
    fontSize: 22,
    fontFamily: "Nunito_700Bold",
    paddingLeft: 46,
    paddingRight: 100,
    lineHeight: 30,
  },
  goOrphanagesMapButton: {
    width: 56,
    height: 56,
    backgroundColor: "#2473a8",
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 320,
  },
});
