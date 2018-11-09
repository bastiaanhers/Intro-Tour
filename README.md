# Dev omgeving opzetten

### v-host opzetten
1. Open kladblok als administrator
2. Open bestand ``C:/Windows/System32/drivers/etc/hosts``
3. Voeg deze regel toe: ``127.0.0.1 intro-tour.local``

### Apache v-hosts opzetten

1. Open file httpd-v-hosts.conf
    * wamp: {wamp64:install-dir}\bin\apache\apache2.4.27\conf\extra\httpd-v-hosts.conf
    * xamp: {xamp:install-dir}\apache\conf\extra\httpd-v-hosts.conf
2. Voeg deze regels toe:
 ```
 <VirtualHost *:80>
    DocumentRoot "{project root}/public"
    ServerName "intro-tour.local"
</VirtualHost>
```
(``{project root}`` moet je wel zelf invullen)

3. Start apache opnieuw op

### Laravel Configureren

1. Maak ``.env`` bestand aan in de root folder van het project
2. Kopieer inhoud van ``.env.example`` in het nieuw aangemaakte ``.env`` bestandmand ``php artisan key:generate`` in "{project root}/intro_tour", niet "{project root}/intro-tour-client"
3. Pas de informatie in het ``.env`` bestand aan aan jou instellingen
4. maak in dien nodig een database aan in [phpMyAdmin](http://localhost/phpmyadmin/index.php)
4. Verander regel 5 naar ``APP_URL=http://intro-tour.local``
5. Run command ``composer update``
6. Run command ``php artisan key:generate``
7. Run command ``php migrate:refresh --seed`` om de database te vullen met de test data

## Angular werkend krijgen

1. install node.js
2. run command ``npm install`` in intro-tour-client map (if this does not work load node installer and run repair) 
3. run command ``npm start`` of ``ng serve -o``

# Bugs aangeven
Wil je een bug melden? Volg dan de volgende stappen:
1. Ga naar [de issue pagina van onze repo](https://github.com/SimonDamminga/Intro-Tour/issues) om bugs te reporten
2. Klik op de groene **New Issue** knop
3. Klik op **Get Started**
4. Volg de instructies in het template 
Dit moet wel in markdown: [cheatsheet MD](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
5. Klik op de **Submit new issue** knop

# Extra informatie

Wij adviseren bij het testen van de locaties om de *Chrome browser* te gebruiken
omdat Chrome de optie biedt om je geolocatie te manipuleren. Dit kan je doen door:
1. Open het ``f12`` menu
2. Klik op de drie puntjes rechts boven de pagina van het ``f12`` menu
3. Klik op **meer tools**
4. Zoek de optie **sensors**
5. Dit opent het sensors menu
6. Voer bij **geolocation** de gewenste locatie in door middel van:
    * latitude
    * longitude
