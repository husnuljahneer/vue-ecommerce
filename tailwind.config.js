module.exports = {
    content: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        require('daisyui'),
        require('tailwind-scrollbar-hide')
    ],
    daisyui: {
        themes: [
            'light'
        ]
    },
}