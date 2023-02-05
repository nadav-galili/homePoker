import { useEffect } from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// import bgsmoke from "../../assets/images/bgsmoke.webp";
import AppButton from "../components/common/AppButton";
import bgsmokelight from "../../assets/images/bgsmokelight.webp";
import colors from "../../assets/config/colors";
import LeagueImage from "../components/common/LeagueImage";
import league from "../../assets/data/league";
import PrimaryHeader from "../components/common/PrimaryHeader";
import MyLeaguesPlayerItem from "../components/MyLeaguesPlayerItem";
import players from "../../assets/data/players";

const LeagueStatsScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    // use the route to get the leagueId
    // useEffect(() => {
    //     navigation.setOptions({ title: route.params.leagueId });
    // }, []);
    // console.log("🚀 ~ file: LeagueStats.js:17 ~ LeagueStats ~ route", route);
    return (
        <ImageBackground source={bgsmokelight} style={styles.background}>
            <View style={styles.container}>
                <AppButton
                    title="Back"
                    // onPress={() => navigation.navigate("LeaguesScreen")}
                    buttonText="League Stats"
                    color="blue"
                    width={140}
                    height={40}
                />
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
export default LeagueStatsScreen;
