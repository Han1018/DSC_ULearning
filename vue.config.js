module.exports = {
  transpileDependencies: ["vuetify"],

  devServer: {
    proxy: {
      "/api": {
        target: "http://34.145.96.108",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "", //請求的時候使用這個api就可以
        },
      },
    },
    port: "3000",
  },

  publicPath: process.env.NODE_ENV === "production" ? "/DSC_ULearning/" : "/",
};
