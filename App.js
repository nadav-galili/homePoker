import awsconfig from "./src/aws-exports";
import { Amplify, Auth, API } from "aws-amplify";
import { AmplifyTheme } from "aws-amplify-react-native";
// import { getUser } from "./src/graphql/queries";
// import { createUser } from "./src/graphql/mutations";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { useEffect } from "react";
import Navigator from "./src/navigation";
import config from "./src/aws-exports";

// Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });
Amplify.configure(config);

const App = () => {
    // Auth.signOut();

    // useEffect(() => {
    //     const syncUser = async () => {
    //         const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
    //         // console.log("🚀 ~ file: App.js:17 ~ syncUser ~ authUser", authUser);
    //         const userData = await API.graphql(graphqlOperation(getUser, { id: authUser.attributes.sub }));
    //         // console.log("🚀 ~ file: App.js:20 ~ syncUser ~ userData", userData);
    //         if (userData.data.getUser) {
    //             console.log("User is already registered in database");
    //             return;
    //         }

    //         const newUser = {
    //             id: authUser.attributes.sub,
    //             nickName: authUser.attributes.email,
    //         };
    //         const newUserResponse = await API.graphql(graphqlOperation(createUser, { input: newUser }));
    //         console.log("🚀 ~ file: App.js:32 ~ syncUser ~ newUserResponse", newUserResponse);
    //     };
    //     syncUser();
    // }, []);

    return (
        // <View style={styles.container}>
        <SafeAreaView style={styles.root}>
            <Navigator />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "grey",
    },

    // container: {
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     flexDirection: "row",
    // },
});

const signUpConfig = {
    header: "My Customized Sign Up",
    hideAllDefaults: true,
    signUpFields: [
        {
            label: "Full name",
            key: "name",
            required: true,
            displayOrder: 1,
            type: "string",
        },
        {
            label: "Email",
            key: "email",
            required: true,
            displayOrder: 2,
            type: "string",
        },
        {
            label: "Username",
            key: "preferred_username",
            required: true,
            displayOrder: 3,
            type: "string",
        },
        {
            label: "Password",
            key: "password",
            required: true,
            displayOrder: 4,
            type: "password",
        },
    ],
};
const customTheme = {
    ...AmplifyTheme,
    button: {
        ...AmplifyTheme.button,
        backgroundColor: "blue",
    },
};
// export default withAuthenticator(App, { signUpConfig, theme: customTheme });
export default App;
