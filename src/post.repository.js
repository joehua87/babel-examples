export default class PostRepository {
  getPost() {
    return Promise.resolve({ title: `I'm real` });
  }
}
