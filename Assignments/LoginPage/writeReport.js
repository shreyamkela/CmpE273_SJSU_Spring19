const fs = require('fs');

module.exports.writeReport = (newReport) => {
    fs.writeFileSync('./report.json', JSON.stringify(newReport, undefined, 2), (err) => { //  Overwrite report.json with the updated report
        if(err) {
            console.log('Unable to append to report.json');
        } else {
            console.log(name);
        }
    });
};