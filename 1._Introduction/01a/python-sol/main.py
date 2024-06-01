from server import parse_txt, parse_json, parse_yaml, parse_csv, parse_xml
 
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
