import axios from 'axios';

const KEY = 'AIzaSyBpDx_7Osss2ujepeJOtRAQVpIUbDk3Wsk' ;

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params :{
        part: 'snippet',
        maxResults : 5,
        key : KEY
    }
})