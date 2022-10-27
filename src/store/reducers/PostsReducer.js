import {
    CONFIRMED_CREATE_POST_ACTION,
    CONFIRMED_DELETE_POST_ACTION,
    CONFIRMED_EDIT_POST_ACTION,
    CONFIRMED_LOAD_NFTS,
    CREATE_POST_ACTION,
} from '../actions/PostTypes';

const initialState = {
    nfts: [],
};

export default function PostsReducer(state = initialState, actions) {
    if (actions.type === CREATE_POST_ACTION) {
        const post = {
            id: Math.random(),
            title: 'Post Title 2asdasd',
            description: 'Sample Description 2asdasdas',
        };

        const posts = [...state.posts];
        posts.push(post);
        return {
            ...state,
            posts,
        };
    }

    if (actions.type === CONFIRMED_DELETE_POST_ACTION) {
        const posts = [...state.posts];
        const postIndex = posts.findIndex(
            (post) => post.id === actions.payload,
        );

        posts.splice(postIndex, 1);

        return {
            ...state,
            posts,
        };
    }

    if (actions.type === CONFIRMED_EDIT_POST_ACTION) {
        const posts = [...state.posts];
        const postIndex = posts.findIndex(
            (post) => post.id === actions.payload.id,
        );

        posts[postIndex] = actions.payload;
        return {
            ...state,
            posts,
        };
    }

    if (actions.type === CONFIRMED_CREATE_POST_ACTION) {
        const posts = [...state.posts];
        posts.push(actions.payload);

        return {
            ...state,
            posts,
        };
    }

    if (actions.type === CONFIRMED_LOAD_NFTS) {
        return {
            ...state,
            nfts: actions.payload,
        };
    }
    return state;
}
