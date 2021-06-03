module.exports = {
    future: {webpack5: true},
    reactStrictMode: true,
    experimental: {
      reactMode: 'concurrent'
    },

    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    
      //config.resolve.alias['mapbox-gl'] =  'maplibre-gl'

    config.module.rules.push({
          resolve:{
            alias: {
              ...config.resolve.alias,
              'mapbox-gl': 'maplibre-gl'
              //'mapbox-gl': require.resolve('maplibre-gl')
            }
          }
        })
      return config
    }
  } 
  