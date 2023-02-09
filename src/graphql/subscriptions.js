/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame($filter: ModelSubscriptionGameFilterInput) {
    onCreateGame(filter: $filter) {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame($filter: ModelSubscriptionGameFilterInput) {
    onUpdateGame(filter: $filter) {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame($filter: ModelSubscriptionGameFilterInput) {
    onDeleteGame(filter: $filter) {
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
export const onCreateLeague = /* GraphQL */ `
  subscription OnCreateLeague($filter: ModelSubscriptionLeagueFilterInput) {
    onCreateLeague(filter: $filter) {
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
export const onUpdateLeague = /* GraphQL */ `
  subscription OnUpdateLeague($filter: ModelSubscriptionLeagueFilterInput) {
    onUpdateLeague(filter: $filter) {
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
export const onDeleteLeague = /* GraphQL */ `
  subscription OnDeleteLeague($filter: ModelSubscriptionLeagueFilterInput) {
    onDeleteLeague(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateGameUser = /* GraphQL */ `
  subscription OnCreateGameUser($filter: ModelSubscriptionGameUserFilterInput) {
    onCreateGameUser(filter: $filter) {
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
export const onUpdateGameUser = /* GraphQL */ `
  subscription OnUpdateGameUser($filter: ModelSubscriptionGameUserFilterInput) {
    onUpdateGameUser(filter: $filter) {
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
export const onDeleteGameUser = /* GraphQL */ `
  subscription OnDeleteGameUser($filter: ModelSubscriptionGameUserFilterInput) {
    onDeleteGameUser(filter: $filter) {
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
export const onCreateLeagueUser = /* GraphQL */ `
  subscription OnCreateLeagueUser(
    $filter: ModelSubscriptionLeagueUserFilterInput
  ) {
    onCreateLeagueUser(filter: $filter) {
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
export const onUpdateLeagueUser = /* GraphQL */ `
  subscription OnUpdateLeagueUser(
    $filter: ModelSubscriptionLeagueUserFilterInput
  ) {
    onUpdateLeagueUser(filter: $filter) {
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
export const onDeleteLeagueUser = /* GraphQL */ `
  subscription OnDeleteLeagueUser(
    $filter: ModelSubscriptionLeagueUserFilterInput
  ) {
    onDeleteLeagueUser(filter: $filter) {
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
