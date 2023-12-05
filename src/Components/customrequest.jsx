import axios from "axios";

const customRequest = axios.create({
  baseURL: "http://10.21.85.94:8000",
});

customRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access")
    const auth = token ? `Bearer ${token}` : '';
    config.headers['Authorization'] = auth;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customRequest.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response, config } = error;
    if (response && response.status === 401) {
      const refreshToken = localStorage.getItem("Refresh Token");
      if (refreshToken) {
        try {
          const refreshResponse = await customRequest.post("http://10.21.85.94:8000/account/api/token/refresh/", {
            refresh: refreshToken,
          });
          const newAccessToken = refreshResponse.data.access;
          const newRefreshToken = refreshResponse.data.refresh;
          localStorage.setItem("Access Token", newAccessToken);
          localStorage.setItem("Refresh Token", newRefreshToken);
          const auth = token ? `Bearer ${token}` : '';
          config.headers['Authorization'] = auth;
          return customRequest(config);
        } catch (refreshError) {
          console.log(refreshError);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default customRequest;
