/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    REACT_APP_ID: process.env.REACT_APP_ID,
    REACT_APP_PASS: process.env.REACT_APP_PASS,
  }
}

module.exports = nextConfig
