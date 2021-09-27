const defaultHeaders = {
  'X-API-KEY': process.env.NEXT_PUBLIC_API_API_KEY,
};

export const get = (url, body, method) =>
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
    headers: { ...defaultHeaders },
  }).then((res) => res.json());

export const patch = (url, body) =>
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
    headers: { ...defaultHeaders, 'Content-Type': 'application/json' },
    body,
    method: 'PATCH',
  }).then((res) => res.json());

export const post = (url, body) =>
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
    headers: { ...defaultHeaders, 'Content-Type': 'application/json' },
    body,
    method: 'POST',
  }).then((res) => res.json());

export const deleter = (url) =>
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
    headers: { ...defaultHeaders },
    method: 'DELETE',
  }).then((res) => res.json());
