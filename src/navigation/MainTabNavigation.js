import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import LeagueStats from "../screens/LeagueStats";
import LeaguesScreen from "../screens/LeaguesScreen";

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
                name="LeaguesScreen"
                component={LeaguesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="logo-whatsapp" size={size} color={color} />,
                }}
            />
            <Tab.Screen name="LeagueStats" component={LeagueStats} />
        </Tab.Navigator>
    );
};

export default MainTabNavigator;
