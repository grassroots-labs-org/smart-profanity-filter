export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
    "^eld/small$": "<rootDir>/node_modules/eld/src/entries/static.small.js",
  },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
        isolatedModules: true,
        tsconfig: {
          module: "ESNext",
          moduleResolution: "node",
          esModuleInterop: true,
        },
      },
    ],
    ".+/node_modules/eld/.+\\.js$": [
      "ts-jest",
      {
        useESM: true,
        isolatedModules: true,
        tsconfig: {
          module: "ESNext",
          moduleResolution: "node",
          esModuleInterop: true,
          allowJs: true,
        },
      },
    ],
  },
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.ts", "!src/**/*.d.ts"],
  transformIgnorePatterns: ["/node_modules/(?!(.pnpm/eld@|eld/))"],
};
