# Portfolio en ligne

Ce dossier contient le site portfolio `index.html` de Lahcen Mze Soilihi.

## Comment publier ce site en ligne

### Option 1 : GitHub Pages
1. Crée un dépôt GitHub public.
2. Dans le dossier `c:\Users\lahce\OneDrive\Desktop\lessence`, ouvre un terminal.
3. Installe Git si nécessaire : https://git-scm.com/downloads
4. Exécute :
   ```bash
   git init
   git add index.html
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<ton-utilisateur>/<ton-repo>.git
   git push -u origin main
   ```
5. Sur GitHub, va dans `Settings` > `Pages` et active la publication depuis la branche `main`.
6. Ton site sera accessible via `https://<ton-utilisateur>.github.io/<ton-repo>/`.

### Option 2 : Netlify (sans Git)
1. Va sur https://app.netlify.com/signup et crée un compte.
2. Depuis Netlify, choisis "Deploy sites" > "Deploy manually" > "Deploy with drag and drop".
3. Glisse le fichier `index.html` dans la zone de déploiement.
4. Netlify publiera un site accessible à tous avec une URL fournie.

### Option 3 : Vercel
1. Va sur https://vercel.com/signup et crée un compte.
2. Crée un nouveau projet et connecte-le à un dépôt GitHub (ou utilise le déploiement par fichier si Vercel le propose).
3. Vercel publiera automatiquement ton portfolio.

## Remarques
- Ton site est déjà prêt : il suffit de publier `index.html`.
- Si tu veux, je peux aussi t’aider à créer un dépôt GitHub et à écrire les commandes exactes pour ton nom d’utilisateur.
