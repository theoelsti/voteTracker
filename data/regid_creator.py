import json
with open('../app/script/fra.topo.json', 'r') as topofile:
    data = topofile.read()
    data=json.loads(data)
    topofile.close()
with open('dpt-regions.json','r') as dpt_regions:
    dpt_regions_data=json.loads(dpt_regions.read())
    dpt_regions.close()

reg_id = {}

for reg_key in data["objects"]["fra"]["geometries"]:
     
     if(reg_key["id"][0:2] == "FR"):
        for reg_dpt in dpt_regions_data:
            if(reg_dpt["dep_name"] == reg_key["properties"]["name"]):
                # print(reg_dpt["dep_name"], " = ", reg_key["id"], " = ", reg_dpt["num_dep"])
                reg_id[reg_dpt["num_dep"]] = {
                    "reg_id": reg_key["id"],
                    "reg_name": reg_key["properties"]["name"]
                }
with open('reg_id.json', 'w') as reg_id_file:
    json.dump(reg_id, reg_id_file)
    reg_id_file.close()