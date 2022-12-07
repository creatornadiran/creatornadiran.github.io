module.exports = {
  // The root directory that Jest should scan for tests and modules within
  rootDir: ".",

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  
  // A map from regular expressions to paths to transformers
   transform: {
      "^.+\\.js$": "babel-jest",
      "^.+\\.jsx$": "babel-jest"
	}
};
