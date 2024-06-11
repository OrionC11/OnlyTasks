import {
    UPDATE_EMPLOYEE,
    UPDATE_TASK,
    DELETE_TASK,
    CREATE_EMPLOYEE,
    DELETE_EMPLOYEE,
    CREATE_TASK,
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        // Returns a copy of state with an update products array. We use the action.products property and spread it's contents into the new array.
        case UPDATE_EMPLOYEE:
            return {
                ...state,
                employees: [...action.employees],
            };

        case CREATE_TASK:
            return {
                ...state,
                tasks: [...state, ...action.tasks],
            };
        case CREATE_EMPLOYEE:
            return {
                ...state,
                employees: [...state, ...action.employees],
            };
        // Returns a copy of state, sets the cartOpen to true and maps through the items in the cart.
        // If the item's `id` matches the `id` that was provided in the action.payload, we update the purchase quantity.
       case UPDATE_TASK:
        return {
            ...state,
            isComplete: false,
            taskMap: state.tasks.map((isComplete) => {
                if (tasks.isComplete !== action.tasks.isComplete) {
                    return !isComplete;
                }
                return taskMap;
            }),
        }

        // First we iterate through each item in the cart and check to see if the `product._id` matches the `action._id`
        // If so, we remove it from our cart and set the updated state to a variable called `newState`
        case DELETE_TASK:
            let newState = state.tasks.filter((tasks) => {
                return tasks._id !== action._id;
            });

            // Then we return a copy of state and check to see if the cart is empty.
            // If not, we set the cartOpen status to  `true`. Then we return an updated cart array set to the value of `newState`.
            return {
                ...state,
                tasks: newState,
            };

        case DELETE_EMPLOYEE:
            let tempState = state.employees.filter((employees) => {
                return employees._id!== action._id;
            });
            return {
                ...state,
                employees: tempState,
            };

        // Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
        // This saves us from a crash.
        default:
            return state;
    }
};
