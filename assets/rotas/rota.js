import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../paginas/home.js";
import { Descricao } from "../paginas/pokemon/descricao.js";

export default function Rotas() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Descrição" component={Descricao}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}