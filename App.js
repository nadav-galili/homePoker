import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// import LeaguesScreen from "./src/screens/LeaguesScreen";
import LeagueStats from "./src/screens/LeagueStats";
import Navigator from "./src/navigation";
export default function App() {
    return (
        <View style={styles.container}>
            <Navigator />
            {/* <LeagueStats /> */}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
});
