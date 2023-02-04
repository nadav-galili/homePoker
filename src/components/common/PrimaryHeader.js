import { View, Text, StyleSheet } from "react-native";

const PrimaryHeader = ({ text, color, size }) => {
    return (
        <View style={styles.container}>
            <Text style={{ color, fontSize: size, textDecorationLine: "underline" }}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
});
export default PrimaryHeader;
