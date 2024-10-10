const { defaults: tsjPreset } = require("ts-jest/presets");

/** @type {import('jest').Config} */
module.exports = {
  verbose: true,
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  transformIgnorePatterns: [],
};
