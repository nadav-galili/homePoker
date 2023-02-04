import { FlatList, StyleSheet, View } from "react-native";
import players from "../../assets/data/players";
import MyLeaguesPlayerItem from "../components/myLeaguesPlayerItem";
const MyLeaguesScreen = () => {
    return (
        <View style={styles.container}>
            {players.map((player) => (
                <MyLeaguesPlayerItem player={player} key={player.id} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        flexWrap: "wrap",
    },
});

export default MyLeaguesScreen;
