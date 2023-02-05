import { View, Button, StyleSheet } from "react-native";
import { Auth } from "aws-amplify";

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Button title="Sign Out" onPress={() => Auth.signOut()}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
export default SettingsScreen;
