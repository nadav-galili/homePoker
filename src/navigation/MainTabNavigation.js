import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import LeagueStatsScreen from "../screens/LeagueStatsScreen";
import LeaguesScreen from "../screens/LeaguesScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="LeagueScreen"
            // screenOptions={{
            //     tabBarStyle: { backgroundColor: "blue" },
            //     headerStyle: { backgroundColor: "blue" },
            // }}
        >
            <Tab.Screen
                name="Leagues"
                component={LeaguesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="logo-whatsapp" size={size} color={color} />,
                }}
            />
            <Tab.Screen name="LeagueStats" component={LeagueStatsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
};

export default MainTabNavigator;
