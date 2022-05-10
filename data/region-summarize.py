import csv
import json
import re
from tkinter.ttk import Separator
i=0

resultats = {  
}
# Tri du fichier de base 
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
                "voix1": row[23],
                "voix2": row[30],
                "vainqueur":vainqueur,
                "dept": row[1]
            }
            i+=1

    csvfile.close()

with open('output/dpts.json', 'w') as ouptputfile:
    resultats_write = json.dumps(resultats, separators=(',', ':'))
    ouptputfile.write(resultats_write)
    ouptputfile.close()

# Compte des votes et création du fichier de sortie
departments = { }
i=0
current_dpt=1
votes_1=0
votes_2=0

outremer = {
    "2A":"FR.CS",
    "2B":"FR.HC",
    "ZA":"GP.",
    "ZB":"MQ.",
    "ZC":"GF.",
    "ZD":"RE.",
    "ZM":"YT.",
    "ZN":"NC.",
    "ZP":"PF.",
    "ZS":"SP.",
    "ZW":"WF.",
    "ZX":"SM.",
    "ZZ":"FH."
}

with open('../app/script/fra.topo.json', 'r') as topofile:
    data = topofile.read()
    data=json.loads(data)
    topofile.close()
i=1

with open("reg_id.json", "r") as reg_id_file:
    reg_id = json.loads(reg_id_file.read())
    reg_id_file.close()

for key in resultats:

    if(current_dpt==20):
        current_dpt=21
    if(current_dpt==96):
        break
    if(current_dpt<10):
        tmp_current_dpt="0"+str(current_dpt)
    if(current_dpt>=10):
        tmp_current_dpt=str(current_dpt)

    print("Key : ", key, " - Current DPT : ", tmp_current_dpt)
    print(resultats[key]["code-dpt"], " - ", tmp_current_dpt)
    if(resultats[key]["code-dpt"]==tmp_current_dpt):
        
        votes_1+=int(resultats[key]["voix1"])
        votes_2+=int(resultats[key]["voix2"])

    if(resultats[key]["code-dpt"]!=tmp_current_dpt or key==len(resultats)-1):
        
        if(votes_1>votes_2):
            vainqueur=1

        if(votes_1==votes_2):
            vainqueur=0
            
        if(votes_1<votes_2):
            vainqueur=2
        if(bool(re.match("^[0-9]{2}$",tmp_current_dpt)) is True):
            depart_id=reg_id[tmp_current_dpt]["reg_id"]
            departments[depart_id]= {
                "voix1": votes_1,
                "voix2": votes_2,
                "fillKey":vainqueur
            }
        votes_1=0
        votes_2=0
        current_dpt+=1

with open('../app/data/dpts-clean.json', 'w') as ouptputfile:
            resultats_write = json.dumps(departments, separators=(',', ':'))
            ouptputfile.write(resultats_write)
            ouptputfile.close()       

# Lecture du fichier de topo pour récupérer les codes régions

# 11h04 : Il faut ajouter les id des departments dans le json