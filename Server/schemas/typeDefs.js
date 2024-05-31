const typeDefs = `
    type Employee {
        _id: ID!
        username: String!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }

    type Task {
        _id: ID!
        title: String!
        description: String!
        type: String!
        status: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        employees: [Employee]
        employee(username: String!): Employee
        tasks: [Task]
    }
`;

module.exports = typeDefs;