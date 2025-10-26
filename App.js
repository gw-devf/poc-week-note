import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";

import Home from "./screens/Home";
import SelectWeek from "./screens/SelectWeek";
import RegisterProgramWeek from "./screens/RegisterProgramWeek";

import { DatabaseProvider } from "./context/Database";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screens: {
    Home: {
      screen: Home,
      options: {
        title: "Programação da semana",
        headerTitleAlign: "center",
      },
    },
    SelectWeek: {
      screen: SelectWeek,
      options: {
        title: "Cadastro da programação",
        headerTitleAlign: "center",
      },
    },
    RegisterProgramWeek: {
      screen: RegisterProgramWeek,
      options: {
        title: "Cadastro da programação",
        headerTitleAlign: "center",
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

function App() {
  return (
    <DatabaseProvider>
      <Navigation />
    </DatabaseProvider>
  );
}

export default App;
