import { useEffect, useState } from "react";
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
import { Auth, Hub } from "aws-amplify";
import { ActivityIndicator, View } from "react-native";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    const [user, setUser] = useState(undefined);
    const checkUser = async () => {
        try {
            const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            setUser(authUser);
        } catch (error) {
            setUser(null);
        }
    };
    useEffect(() => {
        checkUser();
    }, []);

    useEffect(() => {
        const listener = (data) => {
            if (data.payload.event === "signIn" || data.payload.event === "signOut") {
                checkUser();
            }
        };
        Hub.listen("auth", listener);
        return () => Hub.listen("auth", listener);
    }, []);

    if (user === undefined) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator options={{ headerShown: false }}>
                {user ? (
                    <>
                        <Stack.Screen name="Home" component={MainTabNavigator} />
                        <Stack.Screen name="LeaguesScreen" component={LeaguesScreen} />
                        <Stack.Screen name="LeagueStats" component={LeagueStats} />
                        <Stack.Screen name="SelectPlayers" component={SelectPlayers} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="SignIn" component={SignInScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
