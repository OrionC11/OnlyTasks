import { createContext, useContext, useReducer } from "react";
import { reducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [{tasks, employees}], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
   tasks: [],
   employees: [],
   currentTask: {
     _id: 0,
     title: "",
     description: "",
     deadline: "",
     priority: "",
     status: "",
     employee: {
       _id: "",
       username: "",
       firstName: "",
       lastName: "",
       email: "",
     },
   }
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
