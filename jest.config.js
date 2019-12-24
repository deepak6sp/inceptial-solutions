module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    "ts-jest": {
      "babelConfig": {
        "presets": ["@babel/env", "@babel/react"]
      }
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.(ts|tsx)",
    "!**/index.ts"
  ],
  coverageThreshold: {
    "global": {
      "branches": 95,
      "functions": 95,
      "lines": 95,
      "statements": 95
    },
  },
  setupFilesAfterEnv: ["./jest.setup.js"]
};