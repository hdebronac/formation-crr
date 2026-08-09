#!/usr/bin/env bash
# Hook SessionStart : prépare l'environnement à chaque démarrage de session
# Claude Code on the web (conteneur éphémère, dépôt cloné à neuf).

set -e

echo "▶ Vérification de Node.js et pnpm..."
node --version
pnpm --version || npm install -g pnpm@10

if [ ! -d node_modules ] || [ ! -f node_modules/.modules.yaml ]; then
  echo "▶ Installation des dépendances (pnpm install --frozen-lockfile)..."
  pnpm install --frozen-lockfile
else
  echo "▶ node_modules présent, vérification de la cohérence..."
  pnpm install --frozen-lockfile --prefer-offline >/dev/null 2>&1 || pnpm install --frozen-lockfile
fi

echo "▶ Sync des content collections Astro..."
pnpm astro sync >/dev/null 2>&1 || true

echo "✔ Environnement prêt. Commandes utiles :"
echo "    pnpm dev       — serveur de dev (http://localhost:4321)"
echo "    pnpm build     — build statique"
echo "    pnpm check     — astro check (TypeScript + frontmatter)"
echo "    node scripts/scaffold-modules.mjs — re-générer les placeholders"
