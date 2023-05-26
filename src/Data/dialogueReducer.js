const ADD_MESSAGE = 'ADD-MESSAGE'
const MESSAGE_CHANGE = 'MESSAGE-CHANGE'

let dialogueReducer = (action, state) => {
    if (action.type == ADD_MESSAGE) {
        let newMessage = {
            message: state.newMessageText,
            id: state.dialogueMsgs.length + 1,
        }
        state.dialogueMsgs.unshift(newMessage)
        state.newMessageText = ''
    } else if (action.type == MESSAGE_CHANGE) {
        state.newMessageText = action.text
    }

    return state
}

export default dialogueReducer

export let onMessageChangeAC = (text) => {
    return {
        type: MESSAGE_CHANGE,
        text: text
    }
}

export let addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    }
}