module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/**/stories.tsx",
    "!src/**/_document.tsx",
    "!src/**/_app.tsx",
    "!src/pages/index.tsx",
    "!src/graphql/**",
    "!src/styles/*.ts",
    "!src/types/*.ts",
    "!src/utils/*.ts(x)",
  ],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src/", "<rootDir>/.jest"],
  globals: {
    "ts-jest": {
      // ...
      isolatedModules: true,
    },
  },
};
