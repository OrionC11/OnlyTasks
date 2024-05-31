const { Employee, Task } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        employees: async () => {
            return await Employee.find();
        },
        employee: async (parent, { username }) => {
            return await Employee.findOne({ username });
        },
        tasks: async () => {
            return await Task.find();
        },
    },

    Mutation: {
        addEmployee: async (parent, args) => {
            return await Employee.create(args);
        },
        addTask: async (parent, args) => {
            return await Task.create(args);
        },
        login: async (parent, { username, password }) => {
            const employee = await Employee.findOne({ username });
            if (!employee) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await employee.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(employee);
            return { token, user: employee };
        },
        updateEmployee: async (parent, args, context) => {
            if (context.user) {
                return await Employee.findByIdAndUpdate(args._id, args, { new: true });
            }
        },

    }
}

module.exports = resolvers;