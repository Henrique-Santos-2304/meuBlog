module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/**/stories.tsx",
    "!src/**/_document.tsx",
    "!src/**/_app.tsx",
    "!src/pages/index.tsx",
    "!src/components/**/style.ts",
    "!src/styles/*.ts",
    "!src/types/*.ts",
    "!src/utils/**",
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
