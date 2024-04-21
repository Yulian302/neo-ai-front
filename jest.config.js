/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^axios$': require.resolve('axios'),
  },
  setupFilesAfterEnv: ['mock-local-storage'],
  // globals: {
  //   window: {
  //     location: {}
  //   }
  // }
}

module.exports = config
