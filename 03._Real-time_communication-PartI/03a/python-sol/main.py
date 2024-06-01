from fastapi import FastAPI
import uvicorn
#import sys
#from _1._Introduction._01a.python_sol.server import parse_txt, parse_json, parse_yaml, parse_csv, parse_xml

#sys.path.insert(1, '../../../1._Introduction/01a/python-sol/server.py')
from server import parse_txt, parse_json, parse_yaml, parse_csv, parse_xml

app = FastAPI()

@app.get("/")
def root():
    return { "message": "Parser API Python" }

@app.get("/txt")
def _():
    txt_content = parse_txt('../../../1._Introduction/01a/dataFiles/set2/intro.txt')
    return (txt_content)

@app.get("/json")
def _():
    json_content = parse_json('../../../1._Introduction/01a/dataFiles/set2/char.json')
    return (json_content)

@app.get("/yaml")
def _():
    yaml_content = parse_yaml('../../../1._Introduction/01a/dataFiles/set2/gear.yaml')
    return (yaml_content)

@app.get("/csv")
def _():
    csv_content = parse_csv('../../../1._Introduction/01a/dataFiles/set2/class.csv')
    return (csv_content)

@app.get("/xml")
def _():
    xml_content = parse_xml('../../../1._Introduction/01a/dataFiles/set2/skill.xml')
    return (xml_content)

uvicorn.run(app, host="localhost", port=8080)