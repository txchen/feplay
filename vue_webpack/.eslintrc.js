module.exports = {
  root: true,
  extends: 'airbnb/base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  'rules': {
    'semi': [2, 'never'],
    "no-param-reassign": [2, { "props": false }],
  },
}
