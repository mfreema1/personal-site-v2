const Promise = require('bluebird');
// const marked = require('marked');
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');

const getHTML = () => {
    return fs.readFileAsync(path.join(__dirname, 'README.md'), 'utf-8');
}

const writeHTML = async () => {
    const fileLocation = path.join(__dirname, 'src', 'pages', 'otherHTMLModule.js');
    try {
        await fs.writeFileAsync(fileLocation, `module.exports = "${encodeURI(await getHTML())}"`); //escape the string for storage
        console.log('HTML successfully written to module');
    }
    catch(e) {
        console.log('Could not write HTML to module');
    }
}

// const renderer = new marked.Renderer();
// renderer.heading = (text, level) => {
//     const classes = (level == 1) ? '"special-font big-text"' : '"special-font"'
//     let out = `<h${level} class=${classes}>${text}</h${level}>`
//     if(level == 1) out += '<hr />'
//     return out
// }

// const convert = () => {
//     const markdown = fs.readFileAsync(path.join(__dirname, 'README.md'), 'utf-8')
//         .then((data) => {
//             return marked(data, { renderer });
//         })
//         .catch((err) => {
//             console.log('Could not open README');
//         })

//     const fileLocation = path.join(__dirname, 'src', 'components', 'Markdown.js')
//     fs.readFileAsync(fileLocation, 'utf-8')
//         .then(async (data) => {
//             //TODO: make some better regex to avoid having to paste the classname in
//             data = data.replace(/<div(.|\s)+<\/div>/g, `<div className="pushed-down">${await markdown}</div>`)
//             fs.writeFileAsync(fileLocation, data)
//                 .then(() => {
//                     console.log('Markdown conversion complete')
//                 });
//         })
// }

writeHTML();