import fs from 'fs';
import path from 'path';

export const getBase64 = (filePath) => {
    return new Promise((resolve, reject) => {
        const fs = require('fs');
        const contents = fs.readFileSync('/path/to/file.jpg', {encoding: 'base64'});
    })
}