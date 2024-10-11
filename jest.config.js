const { createJsWithBabelPreset } = require('ts-jest')

const tsJestPreset = createJsWithBabelPreset({
  babelConfig: true,
  isolatedModules: true,
  tsconfig: 'tsconfig.spec.json',
})

/** @type {import('jest').Config} */
module.exports = {
  verbose: true,
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: tsJestPreset.transform,
  transformIgnorePatterns: [],
};
