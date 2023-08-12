/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
            domains: [
                'res.cloudinary.com',
                'avatars.githubusercontent.com',
                'lh3.googleusercontent.com',
            ],
        },
    serverRuntimeConfig: {
        // Указать внешний IP-адрес вашего компьютера
        HOST: '192.168.1.3',
        PORT: process.env.PORT,
    },

}

module.exports = nextConfig
