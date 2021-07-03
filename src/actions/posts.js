import * as api from '../api/index.js';

//Now to create action creators, payload may take time so I need async logic
//to make the actions async I need to use redux-thunk and add
//async (dispatch) => in a really odd way, also instead of return
// do dispatch(action), very complicated stuff gonna tak another look later

export const getPosts = () => async (dispatch) => {
  try {
    //data is always returned api calls, fetchin logic is handled in api/index.js
    const { data } = await api.fetchPosts();

    //now dispatch the action instead of returning it
    dispatch({ type: 'FETCH_ALL', payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
