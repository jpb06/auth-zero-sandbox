const setOptions = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export const apiGet = async (path: string) =>
  await fetch(`${process.env.REACT_APP_API_URL}/${path}`, setOptions());
