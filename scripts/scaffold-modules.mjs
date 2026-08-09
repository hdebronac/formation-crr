// Génère les placeholders des 15 modules avec une structure uniforme.
// Exécution : `node scripts/scaffold-modules.mjs`
//
// C'EST CE FICHIER QUI DÉFINIT LA STRUCTURE D'UN MODULE. Aucun module ne doit
// s'en écarter : pour changer la structure, on modifie d'abord ce gabarit,
// puis on répercute sur les modules déjà rédigés.
//
// Le script est idempotent : un module déjà écrit n'est jamais écrasé.
import { writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

// [slug, titre, épreuve, heures, description]
// L'épreuve est celle de l'examen CRR : A (généralités, 6 questions),
// B (radiotéléphonie VHF, 8 questions), C (VHF ASN et SMDSM, 10 questions).
// M0 et M14 sont transverses : ils ne relèvent d'aucune épreuve.
const modules = [
  ['m00-cadre-et-examen', 'M0 · Cadre, examen et méthode', '—', 1, 'Ce qu’est le CRR et ce qu’il n’est pas, le format de l’examen métropolitain, l’inscription à l’ANFR, et la méthode de travail sur trois à quatre semaines.'],
  ['m01-cadre-reglementaire', 'M1 · Cadre réglementaire et administratif', 'A', 2.5, 'OMI et SOLAS, UIT, textes français, licence de station de navire, indicatif d’appel, documents à conserver à bord, secret des correspondances.'],
  ['m02-communications-et-stations', 'M2 · Catégories de communications et de stations', 'A', 1, 'Détresse, urgence, sécurité, correspondance publique. Station de navire, station côtière, station portuaire, centres de coordination des secours.'],
  ['m03-ondes-et-voies', 'M3 · Ondes, fréquences et voies VHF', 'A', 2.5, 'Bandes de fréquences, VHF marine de 156 à 162 MHz, simplex et duplex, propagation et portée, antennes, sources d’énergie des stations de navire.'],
  ['m04-smdsm', 'M4 · Le SMDSM', 'A', 2.5, 'Les neuf fonctions du système mondial de détresse et de sécurité en mer, les zones A1 à A4, les sous-systèmes, l’organisation SAR, les CROSS et les MRCC.'],
  ['m05-alphabet-et-vocabulaire', 'M5 · Alphabet phonétique et vocabulaire normalisé OMI', 'A', 1.5, 'Alphabet phonétique international, prononciation normalisée des lettres et des chiffres, signaux de base du vocabulaire normalisé de l’OMI.'],
  ['m06-vhf-en-main', 'M6 · La VHF en main', 'B', 2, 'Commandes du poste, squelch, puissance 25 W et 1 W, double veille, alternat, appareil portatif, antenne et son installation.'],
  ['m07-procedures-phonie', 'M7 · Procédures d’exploitation en phonie', 'B', 2, 'Ordre de priorité des communications, appel de routine, dégagement de la voie 16, choix d’une voie de travail, correspondance publique et taxation.'],
  ['m08-detresse-phonie', 'M8 · Détresse en phonie', 'B', 3, 'Émission d’un MAYDAY sur la voie 16, message de détresse, accusé de réception, MAYDAY RELAY, SILENCE MAYDAY et SILENCE FINI.'],
  ['m09-urgence-et-securite', 'M9 · Urgence et sécurité en phonie', 'B', 2, 'PAN PAN et SÉCURITÉ, consultation radiomédicale, avis urgents aux navigateurs et bulletins météorologiques spéciaux.'],
  ['m10-asn', 'M10 · L’appel sélectif numérique', 'C', 3.5, 'Voie 70, identité MMSI et MID, classes A, B et D, formats et catégories d’appel, alerte de détresse, accusé de réception, essais.'],
  ['m11-protection-frequences', 'M11 · Protection des fréquences de détresse', 'C', 2, 'Brouillages et émissions non autorisées, voies de garde, protocoles d’essai, fausses alertes de détresse et procédure d’annulation.'],
  ['m12-rsm', 'M12 · Renseignements sur la sécurité maritime', 'C', 1.5, 'NAVTEX, SafetyNET, avis urgents aux navigateurs, bulletins météorologiques spéciaux, catégories de messages non rejetables.'],
  ['m13-signaux-alerte', 'M13 · Signaux d’alerte et de localisation', 'C', 2.5, 'Radiobalise de localisation des sinistres, balise personnelle, répondeur radar SART, AIS-SART, MOB-AIS, AIS et système Cospas-Sarsat.'],
  ['m14-bachotage', 'M14 · Bachotage', '—', 3.5, 'Examens blancs chronométrés au format réel — 24 questions, 22 secondes chacune, sans retour arrière. Analyse des erreurs et révision ciblée.'],
];

const yamlEscape = (s) => `"${String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;

// Nombre de questions de chaque épreuve à l'examen, pour le rappel de poids
// affiché dans l'Aside « Cadre ».
const poidsEpreuve = { A: 6, B: 8, C: 10 };

const formatHeures = (h) => String(h).replace('.', ',');

const moduleTemplate = ({ title, epreuve, heures, description, index }) => {
  const cadreEpreuve =
    epreuve === '—'
      ? 'transverse (aucune épreuve dédiée)'
      : `**${epreuve}** — ${poidsEpreuve[epreuve]} questions sur 24`;
  const prerequis = index === 0 ? 'aucun' : 'modules précédents validés';

  return `---
title: ${yamlEscape(title)}
description: ${yamlEscape(description)}
sidebar:
  order: ${index}
---

import { Aside, Card, CardGrid, Steps } from '@astrojs/starlight/components';
import Quiz from '../../../components/Quiz.astro';
import Figure from '../../../components/Figure.astro';

<Aside type="note" title="Cadre">
  **Épreuve** : ${cadreEpreuve} · **Volume** : ${formatHeures(heures)} h ·
  **Prérequis** : ${prerequis}
</Aside>

*(chapeau narratif à rédiger : 8 à 10 lignes, en langage direct, disant
pourquoi ce module compte à bord et pas seulement à l'examen)*

## Objectifs de fin de module

À l'issue de ce module, je suis capable de :

- [ ] *(à rédiger — verbe opérationnel : émettre, identifier, formuler,
  distinguer, dérouler, annuler)*
- [ ] *(à rédiger)*
- [ ] *(à rédiger)*
- [ ] *(à rédiger)*
- [ ] *(à rédiger)*

## Concepts clés

| Concept | Définition courte |
|---------|-------------------|
| *(à rédiger — 12 à 15 lignes)* | — |

## Ce que l'examen en attend

- *(rattachement à l'épreuve ${epreuve === '—' ? 'concernée' : epreuve} et poids de cette épreuve)*
- *(renvoi au chapitre du manuel ANFR V16, **par intitulé et non par
  numéro**)*
- *(ce qui n'est pas interrogé — typiquement les annexes du manuel)*
- *(les confusions que l'examen exploite, avec renvoi au module qui les
  traite)*

## Cours

### 1. *(section à rédiger)*

### 2. *(section à rédiger)*

### 3. *(section à rédiger)*

## Vidéos sélectionnées

| Source | Sujet couvert | Durée |
|--------|---------------|------:|
| *(à indexer — lien réel ouvert, vérifié et daté)* | — | — |

## Mise en situation — à bord

**Livrable attendu** : *(à rédiger — fichiers nommés, versés au dossier radio
du bord)*

## Entraînement — micro en main

<Steps>

1. **_(titre à rédiger)_** *(3 à 5 lignes)*

2. **_(titre à rédiger)_** *(3 à 5 lignes)*

3. **_(titre à rédiger)_** *(3 à 5 lignes)*

4. **_(titre à rédiger)_** *(3 à 5 lignes)*

</Steps>

## Quiz de validation

Seuil : 80 %.

*(à intégrer — un \`<Quiz />\` de 10 questions, 4 choix, réponses mélangées,
explications renvoyant aux autres modules. Écrit ici entre backticks : un
\`<Quiz />\` sans prop \`questions\` fait échouer le build.)*

## Fiche de synthèse

\`\`\`
FORMATION CRR — ${title.split('·')[0].trim()} — Carte de cockpit
=======================================

*(à rédiger — bloc ASCII brut, imprimable et plastifiable)*
\`\`\`

*(phrase de clôture renvoyant aux fiches voisines)*
`;
};

const root = join(process.cwd(), 'src/content/docs/modules');
await mkdir(root, { recursive: true });

for (let i = 0; i < modules.length; i++) {
  const [slug, title, epreuve, heures, description] = modules[i];
  const path = join(root, `${slug}.mdx`);
  if (existsSync(path)) {
    console.log(`skip  ${slug} (existe déjà)`);
    continue;
  }
  const content = moduleTemplate({ title, epreuve, heures, description, index: i });
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, content, 'utf8');
  console.log(`write ${slug}.mdx`);
}

const total = modules.reduce((sum, m) => sum + m[3], 0);
console.log(`\n${modules.length} modules scaffold OK — ${formatHeures(total)} h au total.`);
