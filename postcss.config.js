
export default {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 2,
    },
  },
};
