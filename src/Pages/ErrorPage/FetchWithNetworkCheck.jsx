
export const FetchWithNetworkCheck = async (url, options = {}) => {
  if (!navigator.onLine) {
    throw new Error("No internet connection. Please check your network.");
  }

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json();
};
