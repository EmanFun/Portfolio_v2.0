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
   }
   
};

export default nextConfig;
