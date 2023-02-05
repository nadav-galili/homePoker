import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppButton from "../components/common/AppButton";
import colors from "../../assets/config/colors";
import LeagueImage from "../components/common/LeagueImage";
import league from "../../assets/data/league";
import MyLeaguesPlayerItem from "../components/MyLeaguesPlayerItem";
import players from "../../assets/data/players";
import SecondaryHeader from "../components/common/SecondaryHeader";

const LeaguesScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <LeagueImage uri={league.url} width={80} height={80} />
            <SecondaryHeader text={league.name} color={colors.primaryTextColor} size={20} />
            <Text style={styles.text}>League Number:1234455</Text>
            <Text style={styles.text}>League Manager:Bibs</Text>
            <AppButton
                buttonText="League Stats"
                color="blue"
                width={140}
                height={40}
                onPress={() => navigation.navigate("LeagueStats", { leagueId: "1234" })}
            />
            <View style={styles.container}>
                {players.map((player) => (
                    <MyLeaguesPlayerItem player={player} key={player.id} />
                ))}
            </View>
            <AppButton buttonText="Start A New Game" color="lime" width={140} height={40} />
            <Text>Created At:02/02/2022</Text>
            <Text>Delete League</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        // flex: 1,
        flexWrap: "wrap",
    },
    text: {
        justifyContent: "center",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default LeaguesScreen;
