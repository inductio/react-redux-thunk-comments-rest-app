import jsonPlaceholder from '../apis/jsonPlaceholder';

//When it returns a plane object - it won't handle by redux-thunk
//When it returns a function - it will be called with dispatch by redux-thunk
export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({type: 'FETCH_POSTS', payload: response.data});
};

export const fetchUser = (id) => async dispatch => {
        const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({type: 'FETCH_USER', payload: response.data})
};
