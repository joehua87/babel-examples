import PostRepository from './post.repository';

export async function getPost() {
  // Create new instance of PostRepository here (guarantee it can use FakePostRepository when rewire)
  const postRepository = new PostRepository();
  return await postRepository.getPost();
}
