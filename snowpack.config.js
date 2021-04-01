module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: '/'
  },
  devOptions: {
    port: 3000
  },
  plugins: ['@snowpack/plugin-sass', '@snowpack/plugin-postcss']
};
