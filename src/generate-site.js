const fs = require('fs');

// Write page-template data to html file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
<<<<<<< HEAD
        fs.writeFile('./dist/team-profile.html', fileContent, err => {
=======
        fs.writeFile('./dist/Team-Profile.html', fileContent, err => {
>>>>>>> develop
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// Copy stylesheet to match generated html page in dist folder
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('/src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                console.log(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            })
            console.log('Style sheet copied successfully!');
        });
    });
};

module.exports = { writeFile, copyFile };