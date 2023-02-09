import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { API, graphqlOperation, Auth } from "aws-amplify";
// import { leagueUsersByUserId, getUser } from "../../src/graphql/queries";

import PrimaryHeader from "../components/common/PrimaryHeader";
import AppButton from "../components/common/AppButton";
import colors from "../../assets/config/colors";
import LeagueImage from "../components/common/LeagueImage";
import league from "../../assets/data/league";
import MyLeaguesPlayerItem from "../components/MyLeaguesPlayerItem";
import players from "../../assets/data/players";
import SecondaryHeader from "../components/common/SecondaryHeader";
import StartGame from "../components/StartGame";

const LeaguesScreen = () => {
    const [leagues, setLeagues] = useState([]);
    console.log("🚀 ~ file: LeaguesScreen.js:19 ~ LeaguesScreen ~ leagues", leagues);

    const [user, setUser] = useState([]);
    // console.log("🚀 ~ file: LeaguesScreen.js:18 ~ LeaguesScreen ~ users", users);

    // useEffect(() => {
    //     const getUsersLeagues = async () => {
    //         const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
    //         const userData = await API.graphql(graphqlOperation(getUser, { id: authUser.attributes.sub }));
    //         console.log("🚀 ~ file: LeaguesScreen.js:28 ~ getUsersLeagues ~ userData", typeof userData.data.getUser.id);
    //         // console.log("🚀 ~ file: LeaguesScreen.js:28 ~ getUsersLeagues ~ userData", userData.data.getUser.id);
    //         // setUser(userData.data.getUser);
    //         const query = `query MyQuery {
    //             leagueUsersByUserId(userId: "${userData.data.getUser.id}") {
    //               items {
    //                 league {
    //                   leagueName
    //                   leagueNumber
    //                   image
    //                   id
    //                   Users {
    //                     items {
    //                       user {
    //                         nickName
    //                         image
    //                         id
    //                       }
    //                     }
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //           `;
    //         const getLeaguesData = await API.graphql(graphqlOperation(query));

    //         setLeagues(getLeaguesData.data.leagueUsersByUserId.items);
    //         console.log("xxx", leagues[0].league.id);
    //     };
    //     getUsersLeagues();
    // }, []);
    const navigation = useNavigation();

    return (
        <View>
            <Text>Leagues Screen</Text>
            {/* <PrimaryHeader text="My Leagues" color={colors.primaryColor} size={30} />
            <View style={styles.buttonsContainer}>
                <AppButton buttonText="+Create a new League" color="blue" width={140} height={40} />
                <AppButton buttonText="Join friends league" color="purple" width={140} height={40} />
            </View>
            {leagues.length > 0 ? (
                leagues.map((league) => (
                    <View key={league.league.id}>
                        <LeagueImage uri={league.league.image} width={80} height={80} />
                        <SecondaryHeader text={league.league.leagueName} color={colors.primaryTextColor} size={20} />
                        <Text style={styles.text}>League Number:{league.league.leagueNumber}</Text>
                    </View>
                ))
            ) : (
                <Text>No leagues found</Text>
            )} */}

            {/* <LeagueImage uri={league.image} width={80} height={80} />
            <SecondaryHeader text={league.leagueName} color={colors.primaryTextColor} size={20} />
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
            <StartGame leagueId={league.id} />
            <Text>Created At:02/02/2022</Text>
            <Text>Delete League</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
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
