export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "/.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$/": "jest-transform-stub"
  },
  moduleNameMapper: {
    "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  setupFiles: ['./jest.setup.js']
}