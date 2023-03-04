import csv
import json

org_list = []

with open('org_emails.csv') as csv_file:
    my_reader = csv.reader(csv_file)
    entry = {}
    for row in my_reader:
        name, email = row[0], row[1]
        entry = {
            "name": name,
            "email": email
        }
        org_list.append(entry)

json_org_list = json.dumps(org_list[1:])

with open("orgs.json", "w") as outfile:
    outfile.write(json_org_list)