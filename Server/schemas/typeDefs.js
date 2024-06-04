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
        employee: Employee
    }

    type Query {
        employees: [Employee]
        employee(username: String!): Employee
        tasks: [Task]
    }

    type Mutation {
        addEmployee(
            username: String!, 
            firstName: String!, 
            lastName: String!, 
            email: String!, 
            password: String!
        ): Employee
        login(
            username: String!, 
            password: String!
        ): Auth
        addTask(
            title: String!, 
            description: String!, 
            type: String!, 
            status: String!
        ): Task
        updateEmployee(
            _id: ID!, 
            username: String, 
            firstName: String, 
            lastName: String, 
            email: String, 
            password: String
        ): Employee
        updateTask(
            _id: ID!, 
            title: String, 
            description: String, 
            type: String, 
            status: String
        ): Task
        deleteEmployee(
            _id: ID!
        ): Employee
        deleteTask(
            _id: ID!
        ): Task
    }
`;

module.exports = typeDefs;
