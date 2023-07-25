import { useReducer } from 'react'
import data from '../data/data'

const TYPES = {
    ADDED: Symbol('Add a comment'),
    EDITED: Symbol('Edit a comment'),
    DELETED: Symbol('Delete a shopping list item'),
}

function commentsReducer(comments, action) {
    switch (action.type) {
        case TYPES.ADDED: {
            const newComments = [...comments, action.newComment]

            return newComments
        }

        case TYPES.EDITED: {
            const editedComment = action.comment

            const editedList = comments.map((comment) => {
                if (comment.id === editedComment.id) {
                    return editedComment
                }

                return comment
            })

            return editedList
        }
    }
}

const useInitialState = () => {
    const [comments, dispatch] = useReducer(commentsReducer, data.comments)

    const addComment = (newComment) =>
        dispatch({ type: TYPES.ADDED, newComment })

    const addReply = (comment) => dispatch({ type: TYPES.EDITED, comment })

    const editComment = (comment) => dispatch({ type: TYPES.EDITED, comment })

    return {
        currentUser: data.currentUser,
        comments,
        addComment,
        addReply,
        editComment,
    }
}

export default useInitialState
