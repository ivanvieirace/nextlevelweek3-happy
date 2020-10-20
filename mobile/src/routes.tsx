import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OrphanagesMap from "./pages/OrphanagesMap";
import OrphanageDetails from "./pages/OrphanageDetails";
import SelectMapPosition from "./pages/CreateOrphanage/SelectMapPosition";
import OrphanageData from "./pages/CreateOrphanage/OrphanageData";
import Header from "./components/Header";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="default" backgroundColor="#2993d1" />
      <Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: { backgroundColor: "#f2f3f5" },
          title: "happy",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#2993d1",
          },
          headerTitleStyle: {
            fontFamily: "Nunito_700Bold",
            fontSize: 20,
          },
          headerTitleAlign: "center",
        }}
      >
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen
          name="OrphanageDetails"
          component={OrphanageDetails}
          options={{
            headerShown: true,
            header: () => (
              <Header showCancel={false} title="Sobre o Orfanato" />
            ),
          }}
        />
        <Screen
          name="SelectMapPosition"
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title="Defina uma Posição no Mapa" />,
          }}
        />
        <Screen
          name="OrphanageData"
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Informe os Dados da Instituição" />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
