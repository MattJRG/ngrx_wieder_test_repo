module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  coveragePathIgnorePatterns: ["/jest-config/", "/node_modules/"],
  transform: {
    "^.+\\.(ts|js|html|mjs)$": "jest-preset-angular",
  },
  moduleFileExtensions: ["ts", "html", "js", "json", "mjs"],
  transformIgnorePatterns: ["node_modules/(?!.*\\.mjs$)"],
  modulePaths: ["<rootDir>/src", "<rootDir>/node_modules"],
};
