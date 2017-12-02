var rd = require('rd');
var path = require('path');


export =new class Scanner {
    /**
     * get AllFiles from relative or absolute filepath
     */
    getAllFile(dirPath) {

        return new Promise(resolve => {
            rd.read(path.resolve(__dirname, dirPath), (err, files) => {
                if (err) throw err;

                resolve(err ? err : files)
            });

        })
    }

}





