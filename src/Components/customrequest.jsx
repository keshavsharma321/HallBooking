const customRequest = axios.create({
    baseURL: "http://10.21.80.69:8000",
    headers: { "Request-Origin": "website" },
  });

export default customRequest;  