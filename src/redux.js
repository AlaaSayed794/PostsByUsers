export const createStore = (reducer, initialState = undefined) => {
    let state = reducer(initialState, { type: "" });
    let listeners = [];

    return {
        getState: () => state,
        subscribe: (listener) => {
            listeners.push(listener);
            const unsubscribe = () => {
                listeners = listeners.filter((l) => l !== listener);
            };
            return unsubscribe;
        },
        dispatch: (action) => {
            state = reducer(state, action);
            listeners.forEach((listener) => listener());
        },
    };
};

export const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce((totalState, key) => {
            totalState[key] = reducers[key](state[key], action);
            return totalState;
        }, {});
    };
};