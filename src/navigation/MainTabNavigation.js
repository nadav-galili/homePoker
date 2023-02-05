import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LeagueStats from "../screens/LeagueStats";
import LeaguesScreen from "../screens/LeaguesScreen";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="LeagueScreen">
            <Tab.Screen name="LeaguesScreen" component={LeaguesScreen} />
            <Tab.Screen name="LeagueStats" component={LeagueStats} />
        </Tab.Navigator>
    );
};

export default MainTabNavigator;
