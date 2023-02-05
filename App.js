import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import config from "./src/aws-exports";
// import LeaguesScreen from "./src/screens/LeaguesScreen";
import LeagueStats from "./src/screens/LeagueStats";
import Navigator from "./src/navigation";

Amplify.configure(config);

function App() {
    return (
        <View style={styles.container}>
            <Navigator />
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

export default withAuthenticator(App);
