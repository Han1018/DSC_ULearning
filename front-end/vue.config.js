module.exports = {
  transpileDependencies: ["vuetify"],

  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },

  devServer: {
    proxy: {
      "/api": {
        target: "http://34.145.96.108:3000/api/v1",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api", //請求的時候使用這個api就可以
        },
      },
    },
    port: "8080",
  },

  publicPath: process.env.NODE_ENV === "production" ? "/DSC_ULearning/" : "/",
};
