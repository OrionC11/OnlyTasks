import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_EMPLOYEE = gql`
  mutation addEmployee(
    $username: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addEmployee(
      username: $username
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      employee {
        _id
      }
    }
  }
`;

export const ADD_TASK = gql`
  mutation addTask(
    $title: String!
    $description: String!
    $deadline: String!
    $priority: String!
    $employee: ID!
  ) {
    addTask(
      title: $title
      description: $description
      deadline: $deadline
      priority: $priority
      employee: $employee
    ) {
      _id
      title
      description
      deadline
      priority
      employee
    }
  }
`;
