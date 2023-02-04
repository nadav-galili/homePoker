import { View, ImageBackground, StyleSheet, Text } from "react-native";

import bgsmoke from "../../assets/images/bgsmoke.webp";
import bgsmokelight from "../../assets/images/bgsmokelight.webp";
import colors from "../../assets/config/colors";
import LeagueImage from "../components/common/LeagueImage";
import league from "../../assets/data/league";
import PrimaryHeader from "../components/common/PrimaryHeader";
import MyLeaguesPlayerItem from "../components/MyLeaguesPlayerItem";
import players from "../../assets/data/players";
const LeagueStats = () => {
    return (
        <ImageBackground source={bgsmokelight} style={styles.background}>
            <View style={styles.container}>
                <PrimaryHeader text="League Stats" color={colors.primaryColor} size={30} />
                <LeagueImage uri={league.url} width={80} height={80} />
                <Text style={styles.text}>League Name</Text>
                <View style={styles.playerImages}>
                    {players.map((player) => (
                        <MyLeaguesPlayerItem player={player} key={player.id} />
                    ))}
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        marginTop: 50,
        // justifyContent: "center",
        alignItems: "center",
    },
    text: {
        justifyContent: "center",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
    playerImages: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
});
export default LeagueStats;
