const postData = async (url, data) => {
  let res = await fetch(url, {
    body: JSON.stringify(data),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;utf-8',
    },
  });
  if (!res.ok) throw new Error(`Произошла ошибка, код: ${res.status}`);

  return await res.json();
};

export { postData };
