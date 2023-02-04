import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyLeaguesScreen from "./src/screens/MyLeaguesScreen";

export default function App() {
    return (
        <View style={styles.container}>
            <MyLeaguesScreen />
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
