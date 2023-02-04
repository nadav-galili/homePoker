import { Text, View, Image, StyleSheet } from "react-native";
import colors from "../../../assets/config/colors";

const MyLeaguesPlayerItem = ({ player }) => {
    return (
        <View>
            <Image source={{ uri: player.image }} style={styles.image} />
            <Text style={styles.name}>{player.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        borderRadius: 30,
        borderColor: colors.primaryColor,
        borderWidth: 2,
        height: 35,
        margin: 10,
        width: 35,
    },
    name: {
        fontWeight: "bold",
        fontSize: 10,
        textAlign: "center",
        color: colors.primaryTextColor,
    },
});
export default MyLeaguesPlayerItem;
