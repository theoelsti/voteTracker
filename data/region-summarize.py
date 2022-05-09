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
                vainqueur=2
            if(row[23] == row[30]):
                vainqueur=0
            if(row[23] > row[30]):
                vainqueur=1
            resultats[i] = {
                "code-dpt": row[0],
                "libelle-dpt": row[1],
                "voix-1": row[23],
                "voix-2": row[30],
                "vainqueur":vainqueur
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

    if(resultats[key]["code-dpt"]!=current_dpt or key==len(resultats)-1):
        if(votes_1>votes_2):
            vainqueur=1
        if(votes_1==votes_2):
            vainqueur=0
        if(votes_1<votes_2):
            vainqueur=2
        regions[current_dpt] = {
            "voix-1": votes_1,
            "voix-2": votes_2,
            "libelle-dpt": resultats[key-1]["libelle-dpt"],
            "vainqueur":vainqueur,
            "reg_id":
        }
        current_dpt=resultats[key]["code-dpt"]
    i+=1

with open('output/dpts-clean.json', 'w') as ouptputfile:
            resultats_write = json.dumps(regions, separators=(',', ':'))
            ouptputfile.write(resultats_write)
            ouptputfile.close()       

with open('../app/script/fra.topo.json', 'r') as topofile:
    data = topofile.read()
    data=json.loads(data)
    topofile.close()

i=1
reg_id = {}
for key in data["objects"]["fra"]["geometries"]:
    if(key["id"][0:2] == "FR"):
        if(i <10):
            i_tmp="0"+str(i)
        else:
            i_tmp=str(i)
        reg_id[i_tmp] = key["id"]
        i+=1
for key in reg_id:
    print(reg_id[key])
# 11h04 : Il faut ajouter les id des regions dans le json