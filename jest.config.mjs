import { defaults } from 'jest-config';

export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'ts', 'json', 'vue'],
};