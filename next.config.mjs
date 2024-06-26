/** @type {import('next').NextConfig} */
import styled from 'styled-components';
const nextConfig = {
    webpack: (config, { isServer }) =>{
        if(!isServer) {
            config.plugins.push(styled.default);
        }
        return config
    }
};

export default nextConfig;
