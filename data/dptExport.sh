#!/bin/bash
#Script visant à recuperer des fichiers d'un csv, de traiter l'entrée et de créer un fichier de sortie csv avec les données souhaitées

# Verifie si au moins deux parametres sont donnés et si'il n'y a pas plus de 3 parametres
if [ $# -lt 2 ] || [ $# -gt 4 ]; then
    echo "Usage: ./data-export.sh <mode_dpt> [<vainqueur>, <low;high>, <1;2;3;4...>] <file.csv>"
fi

# Iterate into 2tour2022.csv and echo lines
file="out/$4"
if [ "$1" = "1" ]; then
    file="out/$3"
fi

echo "Code_DPT;Libelle_DPT;Partitipation;abstentitons;votes1;votes2" > $file
range1=$(echo $2 |cut -d ';' -f 1)
range2=$(echo $2 |cut -d ';' -f 2)

while read line; do
    code_dpt=$( echo $line |cut -d ';' -f 1 )
    votes1=$( echo $line |cut -d ';' -f 24 )
    votes2=$( echo $line |cut -d ';' -f 31 )
    libelle_dpt=$( echo $line |cut -d ';' -f 2 )
    partitipation=$( echo $line |cut -d ';' -f 9 )
    abstentions=$( echo $line |cut -d ';' -f 7 )
# code dpt;nom commune;partitipation,abstention,votes1,votes2
    if [ "$1" == "1" ]; then      # Mode tous les départements
        if [ "$votes1" -gt "$votes2" -a "$2" == "1" ]; then
            echo "$code_dpt;$libelle_dpt;$libelle_ville;$partitipation;$abstentions;$votes1;$votes2"      >> $file         
        fi
        if [ "$votes1" -lt "$votes2" -a "$2" == "2" ]; then
            echo "$code_dpt;$libelle_dpt;$libelle_ville;$partitipation;$abstentions;$votes1;$votes2"     >> $file            
        fi
        if [ "$votes1" -eq "$votes2" -a "$2" == "3" ]; then
            echo "$code_dpt;$libelle_dpt;$libelle_ville;$partitipation;$abstentions;$votes1;$votes2"      >> $file         
        fi
        if [ "$2" == "4" ]; then
            echo "$code_dpt;$libelle_dpt;$libelle_ville;$partitipation;$abstentions;$votes1;$votes2"    >> $file            
        fi   
    fi
    
    if [ "$1" == "2" ]; then      # Mode Range de départements
        code_dpt=$( echo $line |cut -d ';' -f 1 )
        votes1=$( echo $line |cut -d ';' -f 24 )
        votes2=$( echo $line |cut -d ';' -f 31 )
        libelle_dpt=$( echo $line |cut -d ';' -f 2 )
        partitipation=$( echo $line |cut -d ';' -f 9 )
        abstentions=$( echo $line |cut -d ';' -f 7 )
        libelle_ville=$( echo $line |cut -d ';' -f 4 )
        range1=$(echo "$2" |cut -d ';' -f 1)
        range2=$(echo "$2" |cut -d ';' -f 2)


        if [ "$code_dpt" -ge "$range1" -a "$code_dpt" -le "$range2" ]; then
            # si le code est + grand que la range, on quitte le programme
            
            if [ "$code_dpt" -gt "$range2" ]; then
                echo "fini"
                $file=$file"_end"
                echo 1 > $file".state"
                exit 2
            fi
            if [ "$votes1" -gt "$votes2" -a "$3" == "1" ]; then
                echo "$code_dpt;$libelle_dpt;$libelle_ville;$partitipation;$abstentions;$votes1;$votes2"    >> $file           
            fi
            if [ "$votes1" -lt "$votes2" -a "$3" == "2" ]; then
                echo "$code_dpt;$libelle_dpt;$libelle_ville;$partitipation;$abstentions;$votes1;$votes2"     >> $file            
            fi
            if [ "$votes1" -eq "$votes2" -a "$3" == "3" ]; then
                echo "$code_dpt;$libelle_dpt;$libelle_ville;$partitipation;$abstentions;$votes1;$votes2"      >> $file           
            fi
            if [ "$3" == "4" ]; then
                echo "$code_dpt;$libelle_dpt;$libelle_ville;$partitipation;$abstentions;$votes1;$votes2"      >> $file           
            fi
        fi

    fi 

done < 2tour2022.csv

exit 0
