import { useReducer, useState } from 'react'
import data from '../data/data'

const TYPES = {
    ADDED: Symbol('Add a comment'),
    EDITED: Symbol('Edit a comment'),
    DELETED: Symbol('Delete a comment'),
}

function commentsReducer(comments, action) {
    switch (action.type) {
        case TYPES.ADDED: {
            const newComments = [...comments, action.newComment]

            return newComments
        }

        case TYPES.EDITED: {
            const editedComment = action.comment

            const editedComments = comments.map((comment) => {
                if (comment.id === editedComment.id) {
                    return editedComment
                }

                return comment
            })

            return editedComments
        }

        case TYPES.DELETED: {
            const updatedComments = comments.filter(
                (comment) => comment.id !== action.comment.id
            )

            return updatedComments
        }
    }
}

const useInitialState = () => {
    const [open, setOpen] = useState({ value: false })
    const [comments, dispatch] = useReducer(commentsReducer, data.comments)

    const addComment = (newComment) =>
        dispatch({ type: TYPES.ADDED, newComment })

    const addReply = (comment) => dispatch({ type: TYPES.EDITED, comment })

    const editComment = (comment) => dispatch({ type: TYPES.EDITED, comment })

    const deleteComment = () => {
        open.reply
            ? dispatch({ type: TYPES.EDITED, comment: open.comment })
            : dispatch({ type: TYPES.DELETED, comment: open.comment })

        closeDialog()
    }

    const openDialog = (comment) =>
        setOpen({ value: true, comment, reply: false })
    const openDialogFromReply = (comment) =>
        setOpen({ value: true, comment, reply: true })

    const closeDialog = () => setOpen({ value: false })

    return {
        open,
        openDialog,
        openDialogFromReply,
        closeDialog,
        currentUser: data.currentUser,
        comments,
        addComment,
        addReply,
        editComment,
        deleteComment,
    }
}

export default useInitialState
