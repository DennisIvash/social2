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
        if (action.type == 'ADD-POST') {
            let newPost = {
                message: this._state.profilePage.newPostText,
                id: this._state.profilePage.postMsgs.length + 1,
                like: 2,
            }
            this._state.profilePage.postMsgs.unshift(newPost)
            this._state.profilePage.newPost = ''
            this.rerenderTree(this._state)
        } else if (action.type == 'POST-CHANGE') {
            this._state.profilePage.newPostText = action.text
            this.rerenderTree(this._state)
        } else if (action.type == 'ADD-MESSAGE') {
            let newMessage = {
                message: this._state.dialoguePage.newMessageText,
                id: this._state.dialoguePage.dialogueMsgs.length + 1,
            }
            this._state.dialoguePage.dialogueMsgs.unshift(newMessage)
            this.rerenderTree(this._state)
        } else if (action.type == 'MESSAGE-CHANGE') {
            this._state.dialoguePage.newMessageText = action.text
            this.rerenderTree(this._state)
        }
    },
}

export default store;