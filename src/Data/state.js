
let state = {
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
}
let rerenderTree = () => {
    console.log('Fake Function');
}

export let subscribe = (observer) => {
    rerenderTree = observer
}

export let addPost = (text) => {
    let newPost = {
        message: text, 
        id: state.profilePage.postMsgs.length+1,
        like: 2,
    }
    state.profilePage.postMsgs.unshift(newPost)
    state.profilePage.newPost = ''
    rerenderTree(state)
}

export let addMessage = (text) => {
    let newMessage = {
        message: text,
        id: state.dialoguePage.dialogueMsgs.length+1,
    }
    state.dialoguePage.dialogueMsgs.unshift(newMessage)
    rerenderTree(state)
}

export let onPostChange = (text) => {
    state.profilePage.newPostText = text
    rerenderTree(state)
}

export let onMessageChange = (text) => {
    state.dialoguePage.newMessageText = text
    rerenderTree(state)
}

window.state = state
export default state