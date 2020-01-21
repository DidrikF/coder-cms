import { combineReducers, bindActionCreators } from '@reduxjs/toolkit'

import { SET_PAGE_CONTENT } from '../actions';

import { AppState } from '../../../types';


function pageReducer(state: AppState, action) {

    switch(action.type) {
        case 'ADD':
        
        default:
            return state;
    }
}

function cssReducer(state: AppState, action) {

    switch(action.type) {
        case 'ADD':
        
        default:
            return state;
    }
}

function fileUploadReducer(state: AppState, action) {

    switch(action.type) {
        case 'ADD':
        
        default:
            return state;
    }
}

function imageUploadReducer(state: AppState, action) {

    switch(action.type) {
        case 'ADD':
        
        default:
            return state;
    }
}


/*
The only use case for bindActionCreators is when you want to pass some action 
creators down to a component that isn't aware of Redux, and you don't want to 
pass dispatch or the Redux store to it.
*/



const defaultState = {
    pages: {
        'initialStateId': {
            id: 'initialStateId',
            content: 'initial content'
        }
    }
}

function pagesReducer(state = defaultState, { type, payload }) {
    switch(type) {
        case SET_PAGE_CONTENT:
            state.pages[payload.pageId] = {
                ...state.pages[payload.pageId],
                content: payload.data
            }
            return state;
        default: 
            return state;
    }
}

export const rootReducer = combineReducers({
    pages: pagesReducer,
    // cssReducer: cssReducer,
    // fileUploadReducer: fileUploadReducer,
    // imageUploadReducer: imageUploadReducer,
});

