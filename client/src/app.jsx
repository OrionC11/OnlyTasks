import "./app.css";
import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Layout from "./components/layout";
import Home from'./pages/home';
import Calender from'./pages/calender';
import Signup from './pages/signup';
import Login from './pages/login';
import NotFound from './pages/NotFound';
import TaskCreator from './pages/taskCreator';
import CompletedTasks from "./pages/completedTasks";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/completeTask" element={<CompletedTasks />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/taskCreator" element={<TaskCreator />} />
          <Route path="/completed" element={<CompletedTasks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ApolloProvider>
  );
}

export default App;