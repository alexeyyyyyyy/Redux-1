class Store {
    constructor(initialState, reducer) {
        this._state = initialState;
        this._reducer = reducer;
        this._subscribers = [];
    }


    getState() {
        return this._state;
    }

    dispatch(action) {
        this._state = this._reducer(this._state, action);
        console.log(this.getState());
        this._subscribers.forEach(callback => callback());
    }
    subscribe(callback) {
        this._subscribers.push(callback);
        return () => this._subscribers = this._subscribers.filter(f=> f !==callback);
    }
}

export default Store;