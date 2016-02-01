function api() {
  // Some async API call
  return Promise.resolve('API Response');
}

export async function asyncApi() {
  return await api();
}

export default async function asyncApiDefault() {
  return await asyncApi();
}
