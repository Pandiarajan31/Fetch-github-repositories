import gql from 'graphql-tag';

export const GET_REPOSITORY = gql`
  query GetRepository($login: String!, $name: String!) {
    repositoryOwner(login: $login) {
      repository(name: $name) {
        id
        name
        owner {
          login
        }
        description
        stargazers(first: 100) {
          totalCount
        }
        url
      }
    }
  }
`;

export const GET_REPOSITORIES = gql`
  query GetRepositories($login: String!) {
    repositoryOwner(login: $login) {
      repositories(first: 50) {
        totalCount
        nodes {
          id
          description
          name
          owner {
            login
          }
          url
          stargazers(first:10){
            totalCount
          }
          viewerHasStarred
        }
      }
    }   
  }
`;

export const STAR_REPOSITORY = gql`
  mutation StarRepository($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

export const UNSTAR_REPOSITORY = gql`
  mutation StarRepository($id: ID!) {
    removeStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

