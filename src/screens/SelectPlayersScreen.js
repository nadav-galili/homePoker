import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Auth, graphqlOperation, API } from "aws-amplify";
import { getUser, getLeagueUser } from "../graphql/queries";
import { createGame, createGameUser } from "../graphql/mutations";
import { useEffect } from "react";

const SelectPlayersScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    // use the route to get the leagueId
    useEffect(() => {
        const syncUser = async () => {
            const leagueId = route.params.leagueId;
            console.log("🚀 ~ file: SelectPlayersScreen.js:15 ~ syncUser ~ leagueId", leagueId);
            const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            const userData = await API.graphql(graphqlOperation(getUser, { id: authUser.attributes.sub }));
            const userId = userData.data.getUser.id;

            // const leagueUserData = await API.graphql(graphqlOperation(getLeagueUser, { leagueId: leagueId }));
            // console.log("🚀 ~ file: SelectPlayersScreen.js:21 ~ syncUser ~ leagueUserData", leagueUserData);
            // const newGameData = await API.graphql(
            //     graphqlOperation(createGame, { input: { leagueID: leagueId, isOpen: true } })
            // );
            // console.log("🚀 ~ file: SelectPlayersScreen.js:19 ~ syncUser ~ newGameData", newGameData);
            // await API.graphql(
            //     graphqlOperation(createGameUser, { input: { gameId: newGameData.data.createGame.id, userId: userId } })
            // );
        };
        syncUser();
    }, []);

    return (
        <View>
            <Text>SelectPlayersScreen</Text>
        </View>
    );
};

export default SelectPlayersScreen;
