import {
    FETCH_LISTINGS_START,
    FETCH_LISTINGS_SUCCESS,
    FETCH_LISTINGS_ERROR
} from '../actions/fetchListings'

import {
    POST_LISTING_START,
    POST_LISTING_SUCCESS,
    POST_LISTING_ERROR
} from '../actions/postListing'

import {
    PUT_LISTING_START,
    PUT_LISTING_SUCCESS,
    PUT_LISTING_ERROR
} from '../actions/putListing'

import {
    DELETE_LISTING_START,
    DELETE_LISTING_SUCCESS,
    DELETE_LISTING_ERROR
} from '../actions/deleteListing';

const initialState = {
    data: [],
    isFetching: false,
    error: '',
    postData: [],
    isPosting: false,
    postError: '',
    deleteData: [],
    isDeleting: '',
    deleteError: '',
}
export function reducer (state = initialState, action){
    switch(action.type){
        case FETCH_LISTINGS_START:
            return {
                ...state,
                data: [],
                isFetching: true,
                error: ''
            }
        case FETCH_LISTINGS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_LISTINGS_ERROR:
            return {
                ...state,
                data: [],
                isFetching: false,
                error: action.payload
            }
        case POST_LISTING_START:
            return {
                ...state,
                postData: [],
                isPosting: true,
                postRrror: ''
            }
        case POST_LISTING_SUCCESS:
            return {
                ...state,
                postData: action.payload,
                isPosting: false,
                postError: ''
            }
        case POST_LISTING_ERROR:
            return {
                ...state,
                postData: [],
                isPosting: false,
                postError: action.payload
            }
        case PUT_LISTING_START:
            return {
                ...state,
                putData: [],
                isPuting: true,
                putError: ''
            }
        case PUT_LISTING_SUCCESS:
            return {
                ...state,
                putData: action.payload,
                isPuting: false,
                putError: ''
            }
        case DELETE_LISTING_ERROR:
            return {
                ...state,
                deleteData: [],
                isDeleting: false,
                deleteError: action.payload
            }
            case DELETE_LISTING_START:
                return {
                    ...state,
                    deleteData: [],
                    isDeleting: true,
                    deleteError: ''
                }
            case DELETE_LISTING_SUCCESS:
                return {
                    ...state,
                    deleteData: action.payload,
                    isDeleting: false,
                    deleteError: ''
                }
            case PUT_LISTING_ERROR:
                return {
                    ...state,
                    putData: [],
                    isPuting: false,
                    putError: action.payload
                }
        default:
            return state;
    }
}