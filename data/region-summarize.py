import csv
import json
import string
from unittest import result

i=0

resultats = {  
}
with open("2tour2022.csv", "r") as csvfile:
    reader= csv.reader(csvfile, delimiter=";")
    for row in reader:
        vainqueur=1
        if(row[2]!="Code de la commune"):
            if(row[23] < row[30]):
                vainqueur=2
                resultats[i] = {
                    "code-dpt": row[0],
                    "voix-1": row[23],
                    "voix-2": row[30],
                    "vainqueur":1
                }
            if(row[23] == row[30]):
                resultats[i] = {
                    "code-dpt": row[0],
                    "voix-1": row[23],  
                    "voix-2": row[30],
                    "vainqueur":0
                }
            i+=1
    csvfile.close()
    with open('output/dpts.json', 'w') as ouptputfile:
        resultats_write = json.dumps(resultats)
        ouptputfile.write(resultats_write)
        ouptputfile.close()
    

regions = { }
i=0
for key in resultats:
    print(key)