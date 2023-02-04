import { View, Image, StyleSheet } from "react-native";
import colors from "../../../assets/config/colors";

const LeagueImage = ({ uri, width, height }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri }} style={[styles.image, { width: width, height: height }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    image: {
        borderRadius: 10,
        borderColor: colors.primaryColor,
        borderWidth: 3,
    },
});
export default LeagueImage;
