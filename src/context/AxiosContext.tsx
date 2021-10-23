import React from 'react'
import axios, { AxiosInstance } from 'axios'

export interface AxiosContext {
    authAxios: AxiosInstance;
}