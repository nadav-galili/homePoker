/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      isOpen
      Users {
        items {
          id
          gameId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      leagueID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        isOpen
        Users {
          nextToken
          startedAt
        }
        leagueID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGames = /* GraphQL */ `
  query SyncGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGames(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        isOpen
        Users {
          nextToken
          startedAt
        }
        leagueID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const gamesByLeagueID = /* GraphQL */ `
  query GamesByLeagueID(
    $leagueID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gamesByLeagueID(
      leagueID: $leagueID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        isOpen
        Users {
          nextToken
          startedAt
        }
        leagueID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLeague = /* GraphQL */ `
  query GetLeague($id: ID!) {
    getLeague(id: $id) {
      id
      Users {
        items {
          id
          leagueId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      image
      leagueNumber
      Games {
        items {
          id
          isOpen
          leagueID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      leagueName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listLeagues = /* GraphQL */ `
  query ListLeagues(
    $filter: ModelLeagueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeagues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Users {
          nextToken
          startedAt
        }
        image
        leagueNumber
        Games {
          nextToken
          startedAt
        }
        leagueName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLeagues = /* GraphQL */ `
  query SyncLeagues(
    $filter: ModelLeagueFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLeagues(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Users {
          nextToken
          startedAt
        }
        image
        leagueNumber
        Games {
          nextToken
          startedAt
        }
        leagueName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      image
      nickName
      leagues {
        items {
          id
          leagueId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      games {
        items {
          id
          gameId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        nickName
        leagues {
          nextToken
          startedAt
        }
        games {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        image
        nickName
        leagues {
          nextToken
          startedAt
        }
        games {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getGameUser = /* GraphQL */ `
  query GetGameUser($id: ID!) {
    getGameUser(id: $id) {
      id
      gameId
      userId
      game {
        id
        isOpen
        Users {
          nextToken
          startedAt
        }
        leagueID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        image
        nickName
        leagues {
          nextToken
          startedAt
        }
        games {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listGameUsers = /* GraphQL */ `
  query ListGameUsers(
    $filter: ModelGameUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGameUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gameId
        userId
        game {
          id
          isOpen
          leagueID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        user {
          id
          image
          nickName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGameUsers = /* GraphQL */ `
  query SyncGameUsers(
    $filter: ModelGameUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGameUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        gameId
        userId
        game {
          id
          isOpen
          leagueID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        user {
          id
          image
          nickName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const gameUsersByGameId = /* GraphQL */ `
  query GameUsersByGameId(
    $gameId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGameUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gameUsersByGameId(
      gameId: $gameId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        gameId
        userId
        game {
          id
          isOpen
          leagueID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        user {
          id
          image
          nickName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const gameUsersByUserId = /* GraphQL */ `
  query GameUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGameUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gameUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        gameId
        userId
        game {
          id
          isOpen
          leagueID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        user {
          id
          image
          nickName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLeagueUser = /* GraphQL */ `
  query GetLeagueUser($id: ID!) {
    getLeagueUser(id: $id) {
      id
      leagueId
      userId
      league {
        id
        Users {
          nextToken
          startedAt
        }
        image
        leagueNumber
        Games {
          nextToken
          startedAt
        }
        leagueName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        image
        nickName
        leagues {
          nextToken
          startedAt
        }
        games {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listLeagueUsers = /* GraphQL */ `
  query ListLeagueUsers(
    $filter: ModelLeagueUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeagueUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        leagueId
        userId
        league {
          id
          image
          leagueNumber
          leagueName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        user {
          id
          image
          nickName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLeagueUsers = /* GraphQL */ `
  query SyncLeagueUsers(
    $filter: ModelLeagueUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLeagueUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        leagueId
        userId
        league {
          id
          image
          leagueNumber
          leagueName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        user {
          id
          image
          nickName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const leagueUsersByLeagueId = /* GraphQL */ `
  query LeagueUsersByLeagueId(
    $leagueId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLeagueUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    leagueUsersByLeagueId(
      leagueId: $leagueId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        leagueId
        userId
        league {
          id
          image
          leagueNumber
          leagueName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        user {
          id
          image
          nickName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const leagueUsersByUserId = /* GraphQL */ `
  query LeagueUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLeagueUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    leagueUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        leagueId
        userId
        league {
          id
          image
          leagueNumber
          leagueName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        user {
          id
          image
          nickName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
