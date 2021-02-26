import axios from 'axios';

const fetchArticles = ({ searchQuery = '', page = 1 }) => {
  return axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=20124121-6ece0bc9b039a6c992b9911c7&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

export default { fetchArticles };
