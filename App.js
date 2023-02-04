import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import LeaguesScreen from "./src/screens/LeaguesScreen";
import LeagueStats from "./src/screens/LeagueStats";
export default function App() {
    return (
        <View style={styles.container}>
            <LeagueStats />
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
