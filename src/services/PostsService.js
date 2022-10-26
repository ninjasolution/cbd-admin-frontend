import axiosInstance from '../services/AxiosInstance';

export function getPosts(url) {
    return axiosInstance.get(url);
}

export function createPost(url, postData) {
    return axiosInstance.post(url, postData);
}

export function updatePost(url, post) {
    return axiosInstance.put(url, post);
}

export function deletePost(url, postId) {
    return axiosInstance.delete(url);
}

export function formatPosts(postsData) {
    let posts = [];
    for (let key in postsData) {
        posts.push({ ...postsData[key], id: key });
    }

    return posts;
}
