BUBU-DUDU FINAL PREMIUM WEBSITE
=================================

FILES
- index.html  : main website
- style.css   : design, animations and gallery
- script.js   : names, password, letter and interactions

CUSTOMIZE
1. Open script.js.
2. Change:
   herName: "HER NAME"
   yourName: "YOUR NAME"
   secretPassword: "bubu"
   letter: `...`
3. Open style.css and replace the five Unsplash URLs (.p1 to .p5) with your own photo URLs.

LOCAL TEST
Open index.html in a browser.

APACHE / EC2 DEPLOYMENT
Copy all files into:
 /var/www/html/

Then:
 sudo systemctl restart apache2

Your website will be available on port 80.
Jenkins can later pull the GitHub repo and copy the files automatically.

NOTE
The bear characters are CSS illustrations, so no extra image assets are required.
The music button is a placeholder for adding your own audio.
