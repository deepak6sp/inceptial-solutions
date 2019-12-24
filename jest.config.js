module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    "ts-jest": {
      "babelConfig": {
        "presets": ["@babel/env", "@babel/react"]
      }
    }
  },
  setupFilesAfterEnv: ["./jest.setup.js"]
};