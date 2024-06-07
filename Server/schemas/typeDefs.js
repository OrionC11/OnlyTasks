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
        deadline: String!
        priority: String!
        isComplete: Boolean!
        employee: ID!
    }

    type Auth {
        token: ID!
        employee: Employee
    }

    type Query {
        employees: [Employee]
        employee(username: String!): Employee
        tasks: [Task]
        employeeTasks(employee: ID!): [Task]
    }

    type Mutation {
        addEmployee(
            username: String!, 
            firstName: String!, 
            lastName: String!, 
            email: String!, 
            password: String!
        ): Auth
        login(
            email: String!, 
            password: String!
        ): Auth
        addTask(
            title: String!, 
            description: String!, 
            deadline: String!,
            priority: String!, 
            employee: ID!
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
            _id: ID!
            isComplete: Boolean
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
