import express from 'express'
import axios from 'axios'
import { parseTxt, parseJson, parseYaml, parseCsv, parseXml } from '../../../1._Introduction/01a/node-sol/server.js';

const app = express();
const serverBurl = 'http://localhost:3000'

import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'My API Documentation',
    },
    servers: ['http://localhost:5000'],
  },
  apis: ['*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/", (req, res) => {
    res.send({message: "Parser API JavaScript, server A."})
});

/**
 * @swagger
 * /txt:
 *   get:
 *     description: txt from server a
 *     responses:
 *       200:
 *         description: Success
 * 
 */
app.get("/txt", (req, res) => {
    const txtContent = parseTxt('../../../1._Introduction/01a/dataFiles/set1/users.txt');
    res.json(txtContent);
});

/**
 * @swagger
 * /txtb:
 *   get:
 *     description: txt from server b
 *     responses:
 *       200:
 *         description: Success
 * 
 */
app.get("/txtb", async (req, res) => {
    try {
        const response = await axios.get(`${serverBurl}/txt`);
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get("/json", (req, res) => {
    const jsonContent = parseJson('../../../1._Introduction/01a/dataFiles/set1/users.json');
    res.send(jsonContent);
});

app.get("/jsonb", async (req, res) => {
    try {
        const response = await axios.get(`${serverBurl}/json`);
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get("/yaml", (req, res) => {
    const yamlContent = parseYaml('../../../1._Introduction/01a/dataFiles/set1/users.yaml');
    res.send(yamlContent);
});

app.get("/yamlb", async (req, res) => {
    try {
        const response = await axios.get(`${serverBurl}/yaml`);
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
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

app.get("/csvb", async (req, res) => {
    try {
        const response = await axios.get(`${serverBurl}/csv`);
        res.send(response.data);
    } catch (error) {
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

app.get("/xmlb", async (req, res) => {
    try {
        const response = await axios.get(`${serverBurl}/xml`);
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));