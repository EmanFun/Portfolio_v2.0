import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default withNextIntl(nextConfig);
