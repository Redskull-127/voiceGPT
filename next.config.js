/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_ID: process.env.REACT_APP_ID,
    REACT_APP_PASS: process.env.REACT_APP_PASS,
  }
}

module.exports = nextConfig
