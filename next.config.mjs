/** @type {import('next').NextConfig} */
/* import styled, { isStyledComponent } from 'styled-components'; */
const nextConfig = {
    /* webpack: (config, { isServer }) =>{
        if(!isServer) {
            config.plugins.push(styled.default);
        }
        return config
    } */
   compiler: {
    styledComponents: true,
   },
   reactStrictMode: true,
   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (dev && isServer) {
      config.watchOptions = {
        poll: 1000, 
        aggregateTimeout: 300, 
      };
    }
    return config;
  },
  
};

export default nextConfig;
