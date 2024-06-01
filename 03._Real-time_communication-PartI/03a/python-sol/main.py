from fastapi import FastAPI
import uvicorn
import requests
from server import parse_txt, parse_json, parse_yaml, parse_csv, parse_xml

app = FastAPI()
server_A_url = 'http://localhost:8080'

@app.get("/")
def root():
    return { "message": "Parser API Python, server B." }

@app.get("/txt")
def _():
    txt_content = parse_txt('../../../1._Introduction/01a/dataFiles/set2/intro.txt')
    return (txt_content)

@app.get("/txta")
def _():
    response = requests.get(f"{server_A_url}/txt")
    return response.json()

@app.get("/json")
def _():
    json_content = parse_json('../../../1._Introduction/01a/dataFiles/set2/char.json')
    return (json_content)

@app.get("/jsona")
def _():
    response = requests.get(f"{server_A_url}/json")
    return response.json()

@app.get("/yaml")
def _():
    yaml_content = parse_yaml('../../../1._Introduction/01a/dataFiles/set2/gear.yaml')
    return (yaml_content)

@app.get("/yamla")
def _():
    response = requests.get(f"{server_A_url}/yaml")
    return response.json()

@app.get("/csv")
def _():
    csv_content = parse_csv('../../../1._Introduction/01a/dataFiles/set2/class.csv')
    return (csv_content)

@app.get("/csva")
def _():
    response = requests.get(f"{server_A_url}/csv")
    return response.json()

@app.get("/xml")
def _():
    xml_content = parse_xml('../../../1._Introduction/01a/dataFiles/set2/skill.xml')
    return (xml_content)

@app.get("/xmla")
def _():
    response = requests.get(f"{server_A_url}/xml")
    return response.json()

uvicorn.run(app, host="localhost", port=3000)