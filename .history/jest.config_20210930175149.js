module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/**/stories.tsx",
    "!src/**/_app.tsx",
    "!src/**/_document.tsx",
    "!src/pages/index.tsx",
  ],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src/"],
};
