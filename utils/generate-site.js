const fs = require('fs');
const { monitorEventLoopDelay } = require('perf_hooks');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject (err);
                //return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = () => {

    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Stylesheet created'
            });
        });
    });
}

module.exports = { writeFile, copyFile };
// We can also use the below code which is the same thing
/*module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
};
*/

// If we were to execute the WriteFile code above it would look like this as a demo
// demo HTML code
/*const sampleHtml = '<h1>This will be written to the file!</h1>';

writeFile(sampleHtml)
  .then(successfulResponse => {
    // this will run when we use `resolve()`
    console.log(successfulResponse);
  })
  .catch(errorResponse => {
    // this will run when we use `reject()`
    console.log(errorResponse);
  });
  */