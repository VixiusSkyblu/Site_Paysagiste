# Guide d'installation - Gonzalez Espace Vert

## Fichiers à télécharger sur O2Switch

Voici la liste des fichiers à mettre en ligne sur votre hébergement O2Switch :

### Fichiers principaux
1. **index.html** - Page principale du site
2. **styles.css** - Fichier de styles CSS
3. **script.js** - Fichier JavaScript pour les interactions
4. **sitemap.xml** - Sitemap pour le référencement Google
5. **robots.txt** - Instructions pour les robots de recherche

## Instructions de déploiement sur O2Switch

### Étape 1 : Connexion à votre hébergement
1. Connectez-vous à votre espace client O2Switch
2. Accédez au cPanel
3. Ouvrez le **Gestionnaire de fichiers** (File Manager)

### Étape 2 : Upload des fichiers
1. Naviguez vers le dossier `public_html` (ou `www`)
2. Téléchargez tous les fichiers listés ci-dessus :
   - index.html
   - styles.css
   - script.js
   - sitemap.xml
   - robots.txt

### Étape 3 : Vérification
1. Visitez votre nom de domaine dans un navigateur
2. Le site devrait s'afficher correctement
3. Testez sur mobile et desktop

## Configuration du référencement (SEO)

### 1. Google Search Console
1. Allez sur [Google Search Console](https://search.google.com/search-console)
2. Ajoutez votre propriété (votre nom de domaine)
3. Vérifiez la propriété avec une des méthodes proposées
4. Soumettez le sitemap : `https://votre-domaine.fr/sitemap.xml`

### 2. Google My Business
1. Allez sur [Google My Business](https://www.google.com/intl/fr_fr/business/)
2. Créez votre fiche d'entreprise :
   - Nom : Gonzalez Espace Vert
   - Adresse : Lanta, 31280
   - Téléphone : 07 69 89 66 06
   - Email : julien31280.jbc@gmail.com
   - Site web : Votre nom de domaine
   - Catégorie : Paysagiste
   - Horaires : Lundi-Vendredi 7h30-17h30
3. Ajoutez des photos de vos réalisations
4. Demandez la vérification de votre fiche

### 3. Mise à jour du sitemap.xml
Avant de soumettre le sitemap, mettez à jour les URLs dans le fichier `sitemap.xml` :
- Remplacez `https://gonzalez-espace-vert.fr/` par votre vrai nom de domaine

## Optimisations supplémentaires

### Compression des fichiers
O2Switch propose généralement la compression Gzip automatiquement. Vérifiez dans cPanel > "Optimize Website"

### Cache navigateur
Ajoutez un fichier `.htaccess` dans le même dossier que index.html avec ce contenu :

```apache
# Activer la compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache navigateur
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/html "access plus 1 day"
</IfModule>
```

## Support et contact

Pour toute question technique sur l'hébergement, contactez le support O2Switch :
- Email : support@o2switch.fr
- Téléphone : 04 44 44 60 40

## Suivi du référencement

Après la mise en ligne, surveillez :
1. **Google Search Console** : Indexation, erreurs, performances
2. **Google Analytics** (optionnel) : Trafic, visiteurs, comportement
3. **Google My Business** : Avis clients, vues de fiche

Le référencement prend généralement 2-4 semaines pour commencer à apparaître dans les résultats de recherche.

## Mots-clés ciblés

Le site est optimisé pour ces termes de recherche :
- Paysagiste Lanta
- Jardinier Lanta
- Tonte pelouse Lanta
- Taille haies Lanta
- Entretien jardin Lanta
- Paysagiste 31280
- CESU jardinage
- Paysagiste secteur lauragais

## Mises à jour du contenu

Pour modifier le contenu du site :
1. Téléchargez le fichier `index.html`
2. Ouvrez-le avec un éditeur de texte (Notepad++, Sublime Text, VS Code)
3. Modifiez le contenu souhaité
4. Sauvegardez le fichier
5. Ré-uploadez sur O2Switch

**Important** : Faites toujours une sauvegarde avant de modifier un fichier.
