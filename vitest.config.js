// vitest.config.js
export default {
    resolve: {
        alias: {
            $lib: '/src/lib',
        }
    },
    test: {
        deps: {
            inline: [
                "date-fns"
            ]
        }
    }
}