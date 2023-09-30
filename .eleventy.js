const sitemap = require('@quasibit/eleventy-plugin-sitemap')
const webc = require('@11ty/eleventy-plugin-webc')

module.exports = function (eleventyConfig) {
  // eleventyConfig.addPassthroughCopy('assets')
  // eleventyConfig.addPassthroughCopy('**/*.css')
  // eleventyConfig.addPassthroughCopy('**/*.js')

  eleventyConfig.ignores.add('*.md')
  eleventyConfig.addPlugin(webc)

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: 'https://zachbalder.me',
    }
  })
}
