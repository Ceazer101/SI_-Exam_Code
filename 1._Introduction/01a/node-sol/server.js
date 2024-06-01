import fs from 'fs';
import yaml from 'yaml';
import { parse } from 'csv-parse';
import { parseString } from 'xml2js';

function parseTxt(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
}

function parseJson(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
}

function parseYaml(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    return yaml.parse(content);
}

function parseCsv(filePath, callback) {
    const content = fs.readFileSync(filePath, 'utf-8');
    parse(content, {columns: true}, (err, records) => {
        if (err) {
            console.error(err);
            return;
        }
        callback(records);
    });
}

function parseXml(filePath, callback) {
    const content = fs.readFileSync(filePath, 'utf-8');
    parseString(content, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        callback(result);
    })
}

const txtFile = "../dataFiles/set1/users.txt";
const txtContent = parseTxt(txtFile);
console.log("From TXT file");
console.log(txtContent);

const jsonFile = "../dataFiles/set1/users.json";
const jsonContent = parseJson(jsonFile);
console.log("From JSON file");
console.log(jsonContent);

const yamlFile = "../dataFiles/set1/users.yaml";
const yamlContent = parseYaml(yamlFile);
console.log("From YAML file");
console.log(yamlContent);

const csvFile = "../dataFiles/set1/users.csv";
parseCsv(csvFile, (csvContent) => {
    console.log("From CSV file");
console.log(csvContent);
});

const xmlFile = "../dataFiles/set1/users.xml";
parseXml(xmlFile, (xmlContent) => {
    console.log("From XML file");
    console.log(JSON.stringify(xmlContent, null, 2));
});
