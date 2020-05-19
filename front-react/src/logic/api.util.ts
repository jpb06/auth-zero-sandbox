const setOptions = (accessToken: string | null) => ({
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export const apiGet = async (path: string, accessToken: string | null) =>
  await fetch(
    `${process.env.REACT_APP_API_URL}/${path}`,
    setOptions(accessToken)
  );
