import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4444',
});

// axios.get('http://localhost:4444/posts');

export default instance;
