// I'm importing it directly in index 
export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'Create':
      return [...posts, action.payload];
    default:
      return posts;
  }
}