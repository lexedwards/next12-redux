import { BaseQueryFn } from '@reduxjs/toolkit/query'
import axios, { AxiosRequestConfig, AxiosError } from 'axios'

interface BaseQueryConfig {
  baseUrl: string
}

interface QueryOptions {
  data?: AxiosRequestConfig['data']
  method: AxiosRequestConfig['method']
  url: string
}

export const axiosBaseQuery =
  (
    { baseUrl }: BaseQueryConfig = { baseUrl: '' },
  ): BaseQueryFn<QueryOptions, unknown, unknown> =>
  async ({ data, method, url }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
      })
      return { data: result.data }
    } catch (error) {
      let err = error as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data,
        },
      }
    }
  }
