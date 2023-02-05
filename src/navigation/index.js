import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LeagueStats from "../screens/LeagueStats";
import LeaguesScreen from "../screens/LeaguesScreen";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LeaguesScreen" component={LeaguesScreen} />
                <Stack.Screen name="LeagueStats" component={LeagueStats} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;