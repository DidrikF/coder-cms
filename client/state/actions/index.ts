// Action types
export const SET_PAGE_CONTENT = 'pages:setState';

// Action Creators

export function setPageState(id, content) {
    return {
        type: SET_PAGE_CONTENT,
        payload: {
            id,
            data: content
        }
    }
}
