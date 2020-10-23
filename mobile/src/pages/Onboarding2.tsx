import React from "react";
import { Feather } from "@expo/vector-icons";
import background1 from "../images/children.png";
import OrphanagesMap from "./OrphanagesMap";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export default function Onboarding1() {
  const navigation = useNavigation();

  function handleNavigateToOrphanage() {
    return navigation.navigate("OrphanagesMap");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={background1} style={styles.imageContent} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textContent}>
          Escolha um Orfanato no Mapa e faça uma visita.
        </Text>
      </View>

      <View style={styles.footerContainer}>
        <RectButton
          style={styles.nextButton}
          onPress={handleNavigateToOrphanage}
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
    height: "62%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContent: {
    height: "93%",
    width: "70%",
  },
  textContainer: {
    height: "22%",
  },
  textContent: {
    marginTop: 10,
    color: "#2473a8",
    fontSize: 30,
    fontFamily: "Nunito_700Bold",
    paddingLeft: "20%",
    paddingRight: "10%",
    lineHeight: 40,
    textAlign: "right",
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
