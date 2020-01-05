module.exports = api => {
  api.cache(true);
  return {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/react',
      '@babel/typescript',
    ],
    plugins: ['@babel/plugin-proposal-optional-chaining'],
  };
};
