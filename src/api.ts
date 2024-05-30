export async function request(path: string) {
  return await fetch(
    `${import.meta.env.VITE_BASE_URL}/${path}api_key=${
      import.meta.env.VITE_API_KEY
    }`
  ).then((res) => res);
}

export async function newsRequest(path: string) {
  return await fetch(
    `${import.meta.env.VITE_NEWS_BASE_URL}/${path}apiKey=${
      import.meta.env.VITE_NEWS_API_KEY
    }`
  ).then((res) => res);
}
