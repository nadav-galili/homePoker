// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Game, User, League, GameUser, LeagueUser } = initSchema(schema);

export {
  Game,
  User,
  League,
  GameUser,
  LeagueUser
};