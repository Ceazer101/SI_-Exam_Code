import express from 'express'
import { parseTxt, parseJson, parseYaml, parseCsv, parseXml } from '../../../1._Introduction/01a/node-sol/server.js';

const app = express();

app.get("/", (req, res) => {
    res.send({message: "Parser API"})
});

app.get("/txt", (req, res) => {
    const txtContent = parseTxt('../../../1._Introduction/01a/dataFiles/set1/users.txt');
    res.send(txtContent);
});

app.get("/json", (req, res) => {
    const jsonContent = parseJson('../../../1._Introduction/01a/dataFiles/set1/users.json');
    res.send(jsonContent);
});

app.get("/yaml", (req, res) => {
    const yamlContent = parseYaml('../../../1._Introduction/01a/dataFiles/set1/users.yaml');
    res.send(yamlContent);
});

app.get("/csv", (req, res) => {
    try {
        parseCsv('../../../1._Introduction/01a/dataFiles/set1/users.csv', (csvContent) => {
            res.send(csvContent);
        });
    } catch (error){
        res.status(500).send(error.message);
    }
});

app.get("/xml", (req, res) => {
    try {
        parseXml('../../../1._Introduction/01a/dataFiles/set1/users.xml', (xmlContent) => {
            res.send(xmlContent);
        });
    } catch (error){
        res.status(500).send(error.message);
    }
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));