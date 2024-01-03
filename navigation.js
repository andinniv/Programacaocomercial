import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HamburgerDetail from './DetailView';

Stack = createStackNavigator();

function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Lista" component = {Cardapio}/>
                <Stack.Screen name = "Detalhes" component = {HamburgerDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;