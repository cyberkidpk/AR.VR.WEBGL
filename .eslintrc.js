module.exports = {
    extends: ['airbnb'],
    rules: {
      'one-var': 'off',
      'no-var': 'off',
      'no-param-reassign': 'off',
      'react/prop-types' : 'off',
      'padded-blocks': 'off',
      'react/jsx-one-expression-per-line': 'warn',
      'prefer-destructuring' : 'warn',
      'react/jsx-closing-bracket-location':'off',
      'jsx-a11y/media-has-caption':'off',
      'react/jsx-filename-extension': 'off',
        'linebreak-style': 0,
        'react/function-component-definition': [
          2,
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],
    },
    
  };