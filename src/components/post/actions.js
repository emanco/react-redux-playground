import axios from 'axios';

const getPosts = (subreddit = 'all') => {
    return {
        type: 'FETCH_POSTS',
        payload: axios.get('https://www.reddit.com/r/' + subreddit + '.json')
    };
};

const getSinglePost = (postPermalink) => {
    return {
        type: 'FETCH_SINGLE_POST',
        payload: axios.get('https://www.reddit.com' + postPermalink + '.json')
    };
};

export default getPosts;
export { getSinglePost };