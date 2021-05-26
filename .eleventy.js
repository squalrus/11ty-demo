module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget('./src/sass/');

    return {
        dir: {
            includes: '_includes',
            input: 'src',
            layouts: '_layouts',
            output: 'public',
        },
    };
};
