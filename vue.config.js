// https://github.com/vuejs/vue-cli/issues/2132
module.exports = {
  chainWebpack: config => {
    const rule = config.module.rule('ts');

    rule.uses.delete('thread-loader');
    rule.use('ts-loader')
      .loader('ts-loader')
      .tap(options => {
        options.transpileOnly = false;
        options.happyPackMode = false;

        return options;
      });
  },
};
