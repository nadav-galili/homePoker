import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LeagueStats from "../screens/LeagueStatsScreen";
import LeaguesScreen from "../screens/LeaguesScreen";
import SelectPlayers from "../screens/SelectPlayersScreen";
import MainTabNavigator from "./MainTabNavigation";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={MainTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="LeaguesScreen" component={LeaguesScreen} />
                <Stack.Screen name="LeagueStats" component={LeagueStats} />
                <Stack.Screen name="SelectPlayers" component={SelectPlayers} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
