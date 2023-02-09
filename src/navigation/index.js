import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LeagueStats from "../screens/LeagueStatsScreen";
import LeaguesScreen from "../screens/LeaguesScreen";
import SelectPlayers from "../screens/SelectPlayersScreen";
import MainTabNavigator from "./MainTabNavigation";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator options={{ headerShown: false }}>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
                <Stack.Screen name="Home" component={MainTabNavigator} />
                <Stack.Screen name="LeaguesScreen" component={LeaguesScreen} />
                <Stack.Screen name="LeagueStats" component={LeagueStats} />
                <Stack.Screen name="SelectPlayers" component={SelectPlayers} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
