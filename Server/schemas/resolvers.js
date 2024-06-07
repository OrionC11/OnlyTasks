const { Employee, Task } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

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
    employeeTasks: async (parent, { id }) => {
      return await Task.find({ employee: id});
    },
  },

  Mutation: {
    addEmployee: async (
      parent,
      { username, firstName, lastName, email, password }
    ) => {
      const employee = await Employee.create({
        username,
        firstName,
        lastName,
        email,
        password,
      });
      const token = signToken(employee);
      return { token, employee };
    },
    updateEmployee: async (parent, args, context) => {
      if (context.employee) {
        return await Employee.findByIdAndUpdate(context.employee.id, args, {
          new: true,
        });
      }
      throw AuthenticationError;
    },
    deleteEmployee: async (parent, args, context) => {
      if (context.employee) {
        return await Employee.findByIdAndDelete(context.employee.id);
      }
    },
    addTask: async (parent, args) => {
      console.log(args);
      return await Task.create(args);
    },
    updateTask: async (parent, args, context) => {
      if (context.task) {
        return await Task.findByIdAndUpdate(context.task.id, args, {
          new: true,
        });
      }
      throw AuthenticationError;
    },
    deleteTask: async (parent, args, context) => {
      if (context.task) {
        return await Task.findByIdAndDelete(context.task.id);
      }
      throw AuthenticationError;
    },

    login: async (parent, { username, password }) => {
      console.log(username)
      const employee = await Employee.findOne({ username });
      if (!employee) {
        throw new AuthenticationError("Incorrect credentials");
      }
      console.log(employee)
      const correctPw = await employee.isCorrectPassword(password);
      console.log(correctPw)
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(employee);
      return { token, user: employee };
    },
  },
};

module.exports = resolvers;
