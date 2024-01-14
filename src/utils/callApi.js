const BASE_URL = import.meta.env.VITE_API_URL_BASE;

export const fetchData = (endpoint, options = {}) => {
  const url = `${BASE_URL}/${endpoint}`;

  const defaultOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const requestOptions = {
    ...defaultOptions,
    ...options,
  };

  return fetch(url, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error de red - ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud:", error);
      throw error;
    });
};
