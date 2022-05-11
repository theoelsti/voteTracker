echo "Mise a jour..."
sudo apt update && sudo apt upgrade
echo "Installation de apache..."
sudo apt install apache2 -y
echo "Installation de php..."
sudo apt install php -y
echo "Installation de mysql..."
sudo apt install mysql-server -y
echo "Installation de phpmyadmin..."
sudo apt install phpmyadmin -y
echo "Installation de git..."
sudo apt install git -y
echo "Création du certificat..."
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate.crt
echo "Certificat crée... Déplacement en cours..."
sudo mv private.key /etc/ssl/private/
sudo mv certificate.crt /etc/ssl/certs/