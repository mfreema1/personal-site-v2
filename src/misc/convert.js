const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const marked = require('marked');
const renderer = new marked.Renderer();

const spaceSepString = (arr) => {
    return arr.join(" ");
}

/**
 * Generate an opening tag for an incoming html element -- attributes are attached on the fly
 * @param {*} tagName - the name of the tag such as "h1" or "p"
 * @param {*} attributes - the attributes to include such as {class: ["huge-text", "faded"]} or {href: ["mysite.com"]}
 */
const openingTag = (tagName, attributes = {}) => {
    let attrString = `<${tagName}`
    Object.keys(attributes).forEach((attr) => {
        attrString += ` ${attr}="${spaceSepString(attributes[attr])}"`
    });
    return attrString + '>';
}

const closingTag = (tagName) => {
    return `</${tagName}>`;
}

renderer.heading = (text, level) => {
    const tagName = `h${level}`
    const closeTag = closingTag(tagName);
    if(level === 1) {
        return `${openingTag(tagName, {class: ['huge-text']})}${text}${closeTag}<hr/>`;
    }
    if(level === 4) {
        return `${openingTag(tagName, {class: ['bolded', 'spaced-paragraph']})}${text}${closeTag}`;
    }
    else {
        return `${openingTag(tagName)}${text}${closeTag}`;
    }
}

renderer.paragraph = (text) => {
    const tagName = 'p';
    const closeTag = closingTag(tagName);
    return `${openingTag(tagName, {class: ['somewhat-big-text']})}${text}${closeTag}`;
}

const convert = async() => {
    const fileLocation = path.join(__dirname, '..', '..', 'README.md');
    try {
        const markdown = await fs.readFileAsync(fileLocation, 'utf-8');
        await fs.writeFileAsync(path.join(__dirname, 'README.js'), `module.exports = "${encodeURI(marked(markdown, { renderer }))}"`)
        console.log('Successfully wrote HTML to module')
    }
    catch(e) {
        console.log('Could not write HTML to module:\n' + e);
    }
}

convert();

// allowed renderer methods:
// ---
// code(string code, string language, boolean escaped)
// blockquote(string quote)
// html(string html)
// heading(string text, number level, string rawtext)
// hr()
// list(string body, boolean ordered, number start)
// listitem(string text)
// paragraph(string text)
// table(string header, string body)
// tablerow(string content)
// tablecell(string content, object flags)

// strong(string text)
// em(string text)
// codespan(string code)
// br()
// del(string text)
// link(string href, string title, string text)
// image(string href, string title, string text)
// text(string text)