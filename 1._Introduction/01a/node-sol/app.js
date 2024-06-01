import { parseTxt, parseJson, parseYaml, parseCsv, parseXml } from "./server.js"; 

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
    console.log(JSON.stringify(xmlContent));
});
