import csv
import json
import string
from unittest import result
from time import sleep
i=0

resultats = {  
}
with open("2tour2022.csv", "r") as csvfile:
    reader= csv.reader(csvfile, delimiter=";")
    for row in reader:
        vainqueur=1
        if(row[2]!="Code de la commune"):
            if(row[23] < row[30]):
                resultats[i] = {
                    "code-dpt": row[0],
                    "voix-1": row[23],
                    "voix-2": row[30],
                    "vainqueur":2
                }
            if(row[23] == row[30]):
                resultats[i] = {
                    "code-dpt": row[0],
                    "voix-1": row[23],  
                    "voix-2": row[30],
                    "vainqueur":0
                }
            if(row[23] > row[30]):
                vainqueur=1
                resultats[i] = {
                    "code-dpt": row[0],
                    "voix-1": row[23],
                    "voix-2": row[30],
                    "vainqueur":1
                }

            i+=1
    csvfile.close()
    with open('output/dpts.json', 'w') as ouptputfile:
        resultats_write = json.dumps(resultats, separators=(',', ':'))
        ouptputfile.write(resultats_write)
        ouptputfile.close()

regions = { }
i=0

current_dpt="01"
votes_1=0
votes_2=0
for key in resultats:
    if(resultats[key]["code-dpt"]==current_dpt):
        votes_1+=int(resultats[key]["voix-1"])
        votes_2+=int(resultats[key]["voix-2"])

    if(resultats[key]["code-dpt"]!=current_dpt):
        regions[current_dpt] = {
            "voix-1": votes_1,
            "voix-2": votes_2
        }
        current_dpt=resultats[key]["code-dpt"]
        with open('output/dpts-clean.json', 'w') as ouptputfile:
            resultats_write = json.dumps(regions, separators=(',', ':'))
            ouptputfile.write(resultats_write)
            ouptputfile.close()
