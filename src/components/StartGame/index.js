import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppButton from "../common/AppButton";

const StartGame = ({ leagueId }) => {
    const navigation = useNavigation();
    // const StartGame = async () => {
    //     console.log("Start Game", leagueId);
    //     const newGame = await API.graphql(graphqlOperation(createGame, { input: {} }));
    //     console.log("🚀 ~ file: index.js:12 ~ StartGame ~ newGame", newGame);
    // };
    return (
        <View>
            <AppButton
                buttonText="Start A New Game"
                color="lime"
                width={140}
                height={40}
                onPress={() => navigation.navigate("SelectPlayers", { leagueId: leagueId })}
            />
        </View>
    );
};

export default StartGame;
