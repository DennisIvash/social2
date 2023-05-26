import profileReducer from "./profileReducer"
import dialogueReducer from "./dialogueReducer";

let store = {
    _state: {
        profilePage: {
            postMsgs: [
                { message: 'Hi!', id: 1, like: 2 },
                { message: 'I am Elon Mask', id: 2, like: 4 },
            ],
            newPostText: ''
        },
        dialoguePage: {
            dialogueMsgs: [
                { message: 'Im Ivan Ivanov', id: 1 },
                { message: 'Im Peter Ivanov', id: 2 },
                { message: 'Im Fedar Ivanov', id: 3 },
            ],
            dialogueNames: [
                { name: 'Ivan Ivanov', id: 1 },
                { name: 'Peter Ivanov', id: 2 },
                { name: 'Fedar Ivanov', id: 3 },
            ],
            newMessageText: ''
        }
    },
    rerenderTree() {
        console.log('Fake Function');
    },
    subscribe(observer) {
        this.rerenderTree = observer
    },

    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(action, this._state.profilePage) 
        this._state.dialoguePage = dialogueReducer(action, this._state.dialoguePage) 
        this.rerenderTree(this._state)
    },
}

export default store;
