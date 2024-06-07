import { gql } from "@apollo/client";

export const QUERY_TASKS = gql`
  query Tasks {
    tasks {
      _id
      isComplete
      title
      description
      deadline
      priority
      employee
    }
  }
`;

export const QUERY_EMPLOYEES = gql`
  query Employees {
    employees {
      _id
      email
      firstName
      lastName
      username
    }
  }
`;

export const QUERY_EMPLOYEETASKS = gql`
  query EmployeeTasks($employee: ID!) {
    employeeTasks(employee: $employee) {
      _id
      title
      description
      deadline
      priority
      isComplete
      employee
    }
  }
`;

