
module.exports = (api) => {
  const env = api.env()
  api.cache(false)
  return {
    presets: [
      [
        '@babel/env',
        {
          'targets': {
            'esmodules': false
          },
          'modules': env === 'lib' ? 'cjs' : false
        },
      ],
      ['@babel/typescript']
    ]
  }
}
