import { types } from "mobx-state-tree";
import { Action, createStore } from "redux";

export const initState = {
    foo: 'foo',
    bar: 'bar'
};

// Mobx State Tree
export const Store = types.model('Store', {
    foo: types.string,
    bar: types.string
}).actions(self => ({
    updateFoo() {
        self.foo = 'new foo'
    },
    updateBar() {
        self.bar = 'new bar'
    }
}));

export const storeMST = Store.create(initState);

// Redux

export const updateFooAction = () => {
    return {
        type: 'UPDATE_FOO',
    }
}

export const updateBarAction = () => {
    return {
        type: 'UPDATE_BAR',
    }
}

export const rootReducer = (state = initState, action: Action) => {
    switch (action.type) {
        case 'UPDATE_FOO':
            return { ...state, foo: 'new foo' };
        case 'UPDATE_BAR':
            return { ...state, bar: 'new bar' }
        default:
            return state;

    }
};

export const storeRedux = createStore(rootReducer)