import fs from 'fs';
import yaml from 'yaml';
import { parse } from 'csv-parse';
import { parseString } from 'xml2js';

export function parseTxt(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
}

export function parseJson(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
}

export function parseYaml(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    return yaml.parse(content);
}

export function parseCsv(filePath, callback) {
    const content = fs.readFileSync(filePath, 'utf-8');
    parse(content, {columns: true}, (err, records) => {
        if (err) {
            console.error(err);
            return;
        }
        callback(records);
    });
}

export function parseXml(filePath, callback) {
    const content = fs.readFileSync(filePath, 'utf-8');
    parseString(content, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        callback(result);
    })
}

// module.exports = {
//     parseTxt,
//     parseJson,
//     parseYaml,
//     parseCsv,
//     parseXml
// };