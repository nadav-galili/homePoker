/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      isOpen
      gameNumber
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
      playerId
      cashing
      numOfCashing
      cashInHand
      profit
      gameRank
      cashInTime
      cashOutTime
      leagueID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      isOpen
      gameNumber
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
      playerId
      cashing
      numOfCashing
      cashInHand
      profit
      gameRank
      cashInTime
      cashOutTime
      leagueID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      isOpen
      gameNumber
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
      playerId
      cashing
      numOfCashing
      cashInHand
      profit
      gameRank
      cashInTime
      cashOutTime
      leagueID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createLeague = /* GraphQL */ `
  mutation CreateLeague(
    $input: CreateLeagueInput!
    $condition: ModelLeagueConditionInput
  ) {
    createLeague(input: $input, condition: $condition) {
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
          gameNumber
          playerId
          cashing
          numOfCashing
          cashInHand
          profit
          gameRank
          cashInTime
          cashOutTime
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateLeague = /* GraphQL */ `
  mutation UpdateLeague(
    $input: UpdateLeagueInput!
    $condition: ModelLeagueConditionInput
  ) {
    updateLeague(input: $input, condition: $condition) {
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
          gameNumber
          playerId
          cashing
          numOfCashing
          cashInHand
          profit
          gameRank
          cashInTime
          cashOutTime
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteLeague = /* GraphQL */ `
  mutation DeleteLeague(
    $input: DeleteLeagueInput!
    $condition: ModelLeagueConditionInput
  ) {
    deleteLeague(input: $input, condition: $condition) {
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
          gameNumber
          playerId
          cashing
          numOfCashing
          cashInHand
          profit
          gameRank
          cashInTime
          cashOutTime
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createGameUser = /* GraphQL */ `
  mutation CreateGameUser(
    $input: CreateGameUserInput!
    $condition: ModelGameUserConditionInput
  ) {
    createGameUser(input: $input, condition: $condition) {
      id
      gameId
      userId
      game {
        id
        isOpen
        gameNumber
        Users {
          nextToken
          startedAt
        }
        playerId
        cashing
        numOfCashing
        cashInHand
        profit
        gameRank
        cashInTime
        cashOutTime
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
export const updateGameUser = /* GraphQL */ `
  mutation UpdateGameUser(
    $input: UpdateGameUserInput!
    $condition: ModelGameUserConditionInput
  ) {
    updateGameUser(input: $input, condition: $condition) {
      id
      gameId
      userId
      game {
        id
        isOpen
        gameNumber
        Users {
          nextToken
          startedAt
        }
        playerId
        cashing
        numOfCashing
        cashInHand
        profit
        gameRank
        cashInTime
        cashOutTime
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
export const deleteGameUser = /* GraphQL */ `
  mutation DeleteGameUser(
    $input: DeleteGameUserInput!
    $condition: ModelGameUserConditionInput
  ) {
    deleteGameUser(input: $input, condition: $condition) {
      id
      gameId
      userId
      game {
        id
        isOpen
        gameNumber
        Users {
          nextToken
          startedAt
        }
        playerId
        cashing
        numOfCashing
        cashInHand
        profit
        gameRank
        cashInTime
        cashOutTime
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
export const createLeagueUser = /* GraphQL */ `
  mutation CreateLeagueUser(
    $input: CreateLeagueUserInput!
    $condition: ModelLeagueUserConditionInput
  ) {
    createLeagueUser(input: $input, condition: $condition) {
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
export const updateLeagueUser = /* GraphQL */ `
  mutation UpdateLeagueUser(
    $input: UpdateLeagueUserInput!
    $condition: ModelLeagueUserConditionInput
  ) {
    updateLeagueUser(input: $input, condition: $condition) {
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
export const deleteLeagueUser = /* GraphQL */ `
  mutation DeleteLeagueUser(
    $input: DeleteLeagueUserInput!
    $condition: ModelLeagueUserConditionInput
  ) {
    deleteLeagueUser(input: $input, condition: $condition) {
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
