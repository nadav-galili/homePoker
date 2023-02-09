import awsconfig from "./src/aws-exports";
import { Amplify, Auth, graphqlOperation, API } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import { getUser } from "./src/graphql/queries";
import { createUser } from "./src/graphql/mutations";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useEffect } from "react";
// import LeaguesScreen from "./src/screens/LeaguesScreen";
import LeagueStats from "./src/screens/LeagueStatsScreen";
import Navigator from "./src/navigation";

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {
    useEffect(() => {
        const syncUser = async () => {
            const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            // console.log("🚀 ~ file: App.js:17 ~ syncUser ~ authUser", authUser);
            const userData = await API.graphql(graphqlOperation(getUser, { id: authUser.attributes.sub }));
            // console.log("🚀 ~ file: App.js:20 ~ syncUser ~ userData", userData);
            if (userData.data.getUser) {
                console.log("User is already registered in database");
                return;
            }

            const newUser = {
                id: authUser.attributes.sub,
                nickName: authUser.attributes.email,
            };
            const newUserResponse = await API.graphql(graphqlOperation(createUser, { input: newUser }));
            console.log("🚀 ~ file: App.js:32 ~ syncUser ~ newUserResponse", newUserResponse);
        };
        syncUser();
    }, []);

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
