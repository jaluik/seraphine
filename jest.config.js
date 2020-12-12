const path = require('path');
module.exports = {
  rootDir: path.join(__dirname, 'src'),
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/components/$1',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest.setup.ts'],
};
