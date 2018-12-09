const Promise = require('bluebird');
const marked = require('marked');
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');

const convert = () => {
    const markdown = fs.readFileAsync(path.join(__dirname, 'README.md'), 'utf-8')
        .then((data) => {
            return marked(data);
        })
        .catch((err) => {
            console.log('Could not open README');
        })

    const fileLocation = path.join(__dirname, 'src', 'components', 'Markdown.js')
    fs.readFileAsync(fileLocation, 'utf-8')
        .then(async (data) => {
            //TODO: make some better regex to avoid having to paste the classname in
            data = data.replace(/<div className="pushed-down">(.|\n)*?<\/div>/g, `<div className="pushed-down">${await markdown}</div>`)
            fs.writeFileAsync(fileLocation, data)
                .then(() => {
                    console.log('Markdown conversion complete')
                });
        })
}

convert();