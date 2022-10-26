import {
    createPost,
    formatPosts,
    getPosts,
    deletePost,
    updatePost,
} from '../../services/PostsService';
import {
    CONFIRMED_CREATE_POST_ACTION,
    CONFIRMED_DELETE_POST_ACTION,
    CONFIRMED_EDIT_POST_ACTION,
    CONFIRMED_LOAD_NFTS,
} from './PostTypes';
import { toastAction } from './ToastActions';

export function deletePostAction(url, postId, history) {
    return (dispatch, getState) => {
        deletePost(url, postId).then((response) => {
            dispatch(confirmedDeletePostAction(postId));
            history.push('/postpage');
        });
    };
}

export function confirmedDeletePostAction(postId) {
    return {
        type: CONFIRMED_DELETE_POST_ACTION,
        payload: postId,
    };
}

export function createPostAction(url, postData) {
   
	return (dispatch, getState) => {
        createPost(url, postData).then((response) => {
			//console.log(response);
            const singlePost = {
                ...postData,
                id: response.data.name,
            };
            console.log(singlePost)
        });
    };
}

export function updatePostAction(url, postData, navigation, router) {
   
	return (dispatch, getState) => {
        updatePost(url, postData).then((response) => {
            if(response.data.status) {
                dispatch(toastAction("success", response.data.data))
                if(navigation) {
                    navigation(router)
                }
            }
            
        });
    };
}

export function loadNFTsAction(url) {
    return (dispatch, getState) => {
        getPosts(url).then((res) => {
            dispatch(confirmedLoadNFTsAction(res.data.data));
        });
    };
}

export function confirmedCreatePostAction(singlePost) {
	
    return {
        type: CONFIRMED_CREATE_POST_ACTION,
        payload: singlePost,
    };
}

export function confirmedLoadNFTsAction(nfts) {
    return {
        type: CONFIRMED_LOAD_NFTS,
        payload: nfts,
    };
}

export function confirmedUpdatePostAction(post) {

    return {
        type: CONFIRMED_EDIT_POST_ACTION,
        payload: post,
    };
}


