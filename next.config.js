/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI:
      "mongodb+srv://admin:Dikush@cluster0.nnh08zd.mongodb.net/?retryWrites=true&w=majority",
    GOOGLE_CLIENT_ID:
      "946184018087-rdqopt950buiuh45q2f5vppno07std2m.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    NEXTAUTH_URL: "http://localhost:3000",

    JWT_SECRET: "2fc799143bbfce66fba9e20fe33dd47e",
  },
};

module.exports = nextConfig;
