import {gql} from '@apollo/client';

export const QUERY_TASKS = gql`
{
  tasks {
    _id
    title
    description
    deadline
    priority
    isComplete
    employee {
      _id
  }
}`

export const QUERY_EMPLOYEES = gql`
{
  employees {
    _id
    username
    firstName
    lastName
    email
    password
  }
}` 
