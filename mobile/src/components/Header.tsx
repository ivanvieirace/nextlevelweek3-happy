import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
  showGoBack?: boolean;
  showCancel?: boolean;
}

export default function Header({
  title,
  showGoBack = true,
  showCancel = true,
}: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBackToAppHome() {
    navigation.navigate("OrphanagesMap");
  }

  return (
    <View style={styles.container}>
      {showGoBack ? (
        <BorderlessButton onPress={navigation.goBack}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </BorderlessButton>
      ) : (
        <View />
      )}

      <Text style={styles.title}>{title}</Text>

      {showCancel ? (
        <BorderlessButton onPress={handleGoBackToAppHome}>
          <Feather name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#2993d1",
    borderBottomWidth: 1,
    borderColor: "#dde3f0",
    paddingTop: 20,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "Nunito_600SemiBold",
    color: "#fff",
    fontSize: 17,
  },
});
