/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")([
  "@web3-nft-pd/lib",
  "@web3-nft-pd/smart-contracts"
])

const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
})

module.exports = nextConfig
