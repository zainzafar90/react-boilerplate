const dev = {
  API_URL: "http://www.mocky.io/v2/",
};

const prod = {
  API_URL: "http://demo7226695.mockable.io/",
};

const config = process.env.REACT_APP_ENV === "production" ? prod : dev;

export default {
  REQUEST_TIMEOUT: 3000,
  ...config,
};
