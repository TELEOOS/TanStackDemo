module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@components': './src/features/products/components',
          '@Productcomponents': './src/features/products/components',
          '@api': './src/shared/api/*',
          '@features': './src/features',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@products': './src/features/products',
          '@productScreens': './src/features/products/screens',
          '@Productstypes': './src/features/products/types',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
      },
    ],
  ],
};
