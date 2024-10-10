const { defaults: tsjPreset } = require("ts-jest/presets");

/** @type {import('jest').Config} */
module.exports = {
  ...tsjPreset,
  verbose: true,
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  transform: {
    "^.+\\.(js|jsx|mjs)$": "babel-jest",
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        isolatedModules: true,
        /**
         * Extend `tsconfig.json` to use `react` jsx instead of `react-native` jsx for ts-jest
         * See ts-jest setup for react-native: https://kulshekhar.github.io/ts-jest/docs/guides/react-native#typescript-configuration
         */
        tsconfig: "tsconfig.spec.json",
      },
    ],
  },
  transformIgnorePatterns: [],
};
