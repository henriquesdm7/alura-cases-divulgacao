module.exports = {
    trailingSlash: true,
    async redirects() {
        return [
            {
                source: '/perguntas', // FROM
                destination: '/faq', // TO
                permanent: true,
            },
        ]
    },
}