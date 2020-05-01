const dev = {
  API_URL: "http://api-dev.com",
};

const prod = {
  API_URL: "https://api.com",
};

const config = process.env.REACT_APP_ENV === "production" ? prod : dev;

export default {
  REQUEST_TIMEOUT: 3000,
  ...config,
};
