import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerGame = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Game, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly isOpen: boolean;
  readonly Users?: (GameUser | null)[] | null;
  readonly leagueID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGame = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Game, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly isOpen: boolean;
  readonly Users: AsyncCollection<GameUser>;
  readonly leagueID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Game = LazyLoading extends LazyLoadingDisabled ? EagerGame : LazyGame

export declare const Game: (new (init: ModelInit<Game>) => Game) & {
  copyOf(source: Game, mutator: (draft: MutableModel<Game>) => MutableModel<Game> | void): Game;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly nickName: string;
  readonly leagues?: (LeagueUser | null)[] | null;
  readonly games?: (GameUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly nickName: string;
  readonly leagues: AsyncCollection<LeagueUser>;
  readonly games: AsyncCollection<GameUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerLeague = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<League, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Users?: (LeagueUser | null)[] | null;
  readonly image?: string | null;
  readonly leagueNumber: string;
  readonly Games?: (Game | null)[] | null;
  readonly leagueName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLeague = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<League, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Users: AsyncCollection<LeagueUser>;
  readonly image?: string | null;
  readonly leagueNumber: string;
  readonly Games: AsyncCollection<Game>;
  readonly leagueName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type League = LazyLoading extends LazyLoadingDisabled ? EagerLeague : LazyLeague

export declare const League: (new (init: ModelInit<League>) => League) & {
  copyOf(source: League, mutator: (draft: MutableModel<League>) => MutableModel<League> | void): League;
}

type EagerGameUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GameUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gameId?: string | null;
  readonly userId?: string | null;
  readonly game: Game;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGameUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GameUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gameId?: string | null;
  readonly userId?: string | null;
  readonly game: AsyncItem<Game>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GameUser = LazyLoading extends LazyLoadingDisabled ? EagerGameUser : LazyGameUser

export declare const GameUser: (new (init: ModelInit<GameUser>) => GameUser) & {
  copyOf(source: GameUser, mutator: (draft: MutableModel<GameUser>) => MutableModel<GameUser> | void): GameUser;
}

type EagerLeagueUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LeagueUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly leagueId?: string | null;
  readonly user: User;
  readonly league: League;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLeagueUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LeagueUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly leagueId?: string | null;
  readonly user: AsyncItem<User>;
  readonly league: AsyncItem<League>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LeagueUser = LazyLoading extends LazyLoadingDisabled ? EagerLeagueUser : LazyLeagueUser

export declare const LeagueUser: (new (init: ModelInit<LeagueUser>) => LeagueUser) & {
  copyOf(source: LeagueUser, mutator: (draft: MutableModel<LeagueUser>) => MutableModel<LeagueUser> | void): LeagueUser;
}