const emojiReadTime = require("@11tyrocks/eleventy-plugin-emoji-readtime");


module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(emojiReadTime, {
        emoji: "📕",
        label: "mins",
        wpm: 1,
        bucketSize: 3,
    });
};
