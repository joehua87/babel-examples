import { getPost, __Rewire__, __RewireAPI__ } from '../src/post.processor';
import { expect } from 'chai';

class FakePostRepository {
  getPost() {
    return Promise.resolve({ title: `I'm fake` });
  }
}

describe('Rewire Method in class', () => {
  it('Default case', async () => {
    const post = await getPost();
    expect(post).to.deep.equal({ title: `I'm real` });
  });

  it('After rewire', async () => {
    __Rewire__('PostRepository', FakePostRepository);
    const post = await getPost();
    expect(post).to.deep.equal({ title: `I'm fake` });
    __RewireAPI__.__ResetDependency__('PostRepository');
  });
});
