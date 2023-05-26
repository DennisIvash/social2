const ADD_POST = 'ADD-POST'
const POST_CHANGE = 'POST-CHANGE'

let profileReducer = (action, state) => {

    if (action.type == ADD_POST) {
        let newPost = {
            message: state.newPostText,
            id: state.postMsgs.length + 1,
            like: 2,
        }
        state.postMsgs.unshift(newPost)
        state.newPostText = ''
    } else if (action.type == POST_CHANGE) {
        state.newPostText = action.text
    }

    return state
}

export default profileReducer

export let addPostAC = () => {
    return {
        type: ADD_POST
    }
}

export let onPostChangeAC = (text) => {
    return {
        type: POST_CHANGE,
        text: text
    }
}
