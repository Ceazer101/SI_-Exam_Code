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

print("From TEXT file")
print(parse_txt("../dataFiles/set2/intro.txt"))
print()

print("From JSON file")
print(parse_json("../dataFiles/set2/char.json"))
print()

print("From YAML file")
print(parse_yaml("../dataFiles/set2/gear.yaml"))
print()

print("From CSV file")
print(parse_csv("../dataFiles/set2/class.csv"))
print()

print("From XML file")
print(parse_xml("../dataFiles/set2/skill.xml"))
print()
