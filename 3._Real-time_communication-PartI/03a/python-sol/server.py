import json
import yaml
import csv
import xmltodict

def parse_txt(file_path):
    with open(file_path, 'r') as file:
        content = file.read()
    return content
    
def parse_json(file_path):
    with open(file_path) as file:
        content = json.load(file)
    return content
    
def parse_yaml(file_path):
    with open(file_path, 'r') as file:
        content = yaml.safe_load(file)
    return content

def parse_csv(file_path):
    with open(file_path, 'r') as file:
        reader = csv.DictReader(file)
        content = [row for row in reader]
    return content

def parse_xml(file_path):
    with open(file_path, 'r') as file:
        content = xmltodict.parse(file.read())
    return content
