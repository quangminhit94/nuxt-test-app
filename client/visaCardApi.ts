import { Card } from '~/models/card';
import { ListResponse } from '~/models/common';
import axiosClient from './axiosClient';

const resourceUrl = '/cards'

const cardApi = {
  getAll(): Promise<ListResponse<Card>> {
    return axiosClient.get(resourceUrl, {
      params: {
        _page: 1,
        _limit: 10,
      }
    })
  }
};

export default cardApi;