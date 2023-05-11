let state = {
    profilePage: {
        postMsgs: [
            { message: 'Hi!', id: 1, like: 2 },
            { message: 'I am Elon Mask', id: 1, like: 4 },
        ],
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
    }
}

export let addPost = (text) => {
    let newPost = {
        message: text,
        id: 3,
        like: 2,
    }
    state.profilePage.postMsgs.push(newPost)
}

export default state