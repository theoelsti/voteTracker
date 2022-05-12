#!/bin/bash
#63TEFT
#Script permettant d'installer les prérequis 
# Met un disclaimer a l'ecran
echo "
############################################################################################
#                                      /!\ ATTENTION ! /!\                                 #
#   Le script est sucéptible d'installer des mises à jour, pouvant consommer + 200 Mo      #
#                                                                                          #
#                                   Souhaitez-vous continuer ?                             #
############################################################################################

"
read -p "Oui (o) ou non (n) : " reponse
# Verifie si la réponse est non
if [ $reponse = "n" ]
then
    echo "Au revoir !"
    exit 2
fi

sudo apt update && sudo apt upgrade
sudo apt install apache2 -y
sudo apt install php -y
sudo apt install mysql-server -y
sudo apt install phpmyadmin -y
sudo apt install git -y
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate.crt
sudo mv private.key /etc/ssl/private/
sudo mv certificate.crt /etc/ssl/certs/

exit 0