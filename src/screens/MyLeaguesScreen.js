import { StyleSheet, View } from "react-native";

import LeagueImage from "../components/common/LeagueImage";
import MyLeaguesPlayerItem from "../components/MyLeaguesPlayerItem";
import players from "../../assets/data/players";
import league from "../../assets/data/league";
const MyLeaguesScreen = () => {
    return (
        <View style={{ marginTop: 40 }}>
            <LeagueImage uri={league.url} width={80} height={80} />
            <View style={styles.container}>
                {players.map((player) => (
                    <MyLeaguesPlayerItem player={player} key={player.id} />
                ))}
            </View>
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
