import { getAxiosInstance, getConfigWithParams } from './BaseService';
import { TestQueryRequest, TestQueryResponse, TestResponse } from './models/TestModel.data';
import { Endpoints } from './Endpoint';

export async function getAllPosts() {
  const axios = getAxiosInstance();
  const res = await axios.get<TestResponse[]>(Endpoints.test_posts);
  return res.data;
}

export async function getIndividualPost(postId: string) {
  const axios = getAxiosInstance();
  const res = await axios.get<TestResponse>(`${Endpoints.test_posts}/${postId}`);
  return res.data;
}

export async function getCommentsOnPost(request: TestQueryRequest) {
  const axios = getAxiosInstance();
  const res = await axios.get<TestQueryResponse[]>(
    Endpoints.test_comments,
    getConfigWithParams(request, false)
  );
  return res.data;
}
