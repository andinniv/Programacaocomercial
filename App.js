import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cardapio from "./Menu";
import HamburguerList from "./HamburguerLista";
import HamburguerDetail from "./HamburguerDetalhes";
import BebidasList from "./BebidasLista";
import BebidaDetail from "./BebidasDetalhes";
import SobremesasDetail from "./SobremesasDetalhes";
import SobremesasList from "./SobremesasLista";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Cardapio} />
        <Stack.Screen name="HamburguerLista" component={HamburguerList} />
        <Stack.Screen name="HamburguerDetalhes" component={HamburguerDetail} />
        <Stack.Screen name="BebidasLista" component={BebidasList} />
        <Stack.Screen name="BebidasDetalhes" component={BebidaDetail} />
        <Stack.Screen name="SobremesasLista" component={SobremesasList} />
        <Stack.Screen name="SobremesasDetalhes" component={SobremesasDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
