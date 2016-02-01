import { default as asyncApiDefault, asyncApi, __RewireAPI__ as AsyncApiRewireAPI } from '../src/async-api';
import { expect } from 'chai';

describe('async function export test', () => {
  it('should be able to rewire default async function', async () => {
    let response = await asyncApiDefault();
    expect(response).to.equal('API Response');

    AsyncApiRewireAPI.__set__('asyncApi', () => Promise.resolve('Mock API Response'));

    response = await asyncApiDefault();
    expect(response).to.equal('Mock API Response');
    AsyncApiRewireAPI.__ResetDependency__('asyncApi');
  });

  it('should be able to rewire non default async function', async () => {
    let response = await asyncApi();
    expect(response).to.equal('API Response');

    AsyncApiRewireAPI.__set__('api', () => Promise.resolve('Mock API Response'));

    response = await asyncApi();
    expect(response).to.equal('Mock API Response');
    AsyncApiRewireAPI.__ResetDependency__('api');
  });
});
