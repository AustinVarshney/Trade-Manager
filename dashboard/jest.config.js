module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
    "^.+\\.css$": "jest-transform-stub"
  },
  // transformIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // "\\.(css|less)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/components/$1",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/menuMock.js",
  },
};
