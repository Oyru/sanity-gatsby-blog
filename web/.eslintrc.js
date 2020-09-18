module.exports = {
  extends: ['standard', 'standard-react'],
  rules: {
    'react/prop-types': 0,
    'space-before-function-paren': ['error', 'never']
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4'
    }
  }
}
