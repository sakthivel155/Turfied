const forwardUrl = "http://localhost:8080/";

const PROXY_CONFIG = {
  "/api": {
    target: forwardUrl,
    changeOrigin: true,
    secure: false
  }
};

export default PROXY_CONFIG;
