/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */

import { API_URL } from '../config';

class API {
  get<T>(path: string): Promise<T> {
    return fetch(`${API_URL}${path}`, {
      mode: 'cors',
      credentials: 'include',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res: Response) => res.json())
      .then((res: T) => res);
  }

  put<T>(path: string, body: any): Promise<T> {
    return fetch(`${API_URL}${path}`, {
      mode: 'cors',
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: typeof body === 'string' ? body : JSON.stringify(body),
    })
      .then((res: Response) => res.json())
      .then((res: Response) => res as T);
  }

  post<T>(path: string, body: any): Promise<T> {
    return fetch(`${API_URL}${path}`, {
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: typeof body === 'string' ? body : JSON.stringify(body),
    })
      .then((res: Response) => res.json())
      .then((res: Response) => res as T);
  }

  delete<T>(path: string): Promise<T> {
    return fetch(`${API_URL}${path}`, {
      mode: 'cors',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
      .then((res: Response) => res.json())
      .then((res: Response) => res as T);
  }
}

const api: API = new API();

export default api;
