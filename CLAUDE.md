# CLAUDE.md — Guide de contribution Claude

Ce fichier oriente toute session Claude Code sur ce dépôt. Lecture obligatoire
au démarrage.

## Vocation du projet

Programme d'auto-formation destiné à faire obtenir le **certificat restreint
de radiotéléphoniste du service mobile maritime (CRR)** — l'examen ANFR qui
autorise l'usage d'une VHF marine — en 3 à 4 semaines, et à rendre l'apprenant
capable de s'en servir réellement en mer. Cf. `SPECS.md` à la racine pour les
spécifications complètes.

**Le contenu prime sur la technique. Toute proposition technique doit servir
la pédagogie, jamais l'inverse.**

La source primaire du domaine est le **manuel de préparation du CRR maritime
de l'ANFR, édition de juin 2025 (V16)**. C'est le programme d'examen. Ce site
en est un **appareil pédagogique** — découpage, progression, quiz, mises en
situation, fiches — pas une reformulation approximative.

## Stack technique

- **Astro 6.3.5** + **Starlight 0.39.2** (thème documentation) — **versions
  figées, voir l'avertissement ci-dessous**
- **MDX** pour les cours (composants interactifs intégrables)
- **Pagefind** (recherche statique, fournie par Starlight, rien à configurer)
- **pnpm 10**, **Node 22**
- Déploiement **GitHub Pages** via Actions, sur `crr.bronac.net`

⚠️ **Ne pas mettre à jour Astro ni Starlight sans vérifier les tableaux des
modules.** Avec **astro 6.4.8 + Starlight 0.39.3**, GFM n'est plus appliqué au
pipeline **MDX** : les tableaux Markdown des modules sont rendus en **texte
brut**, barres verticales comprises, dans un simple `<p>`. Le build passe,
`astro check` passe, aucune erreur n'est émise — la régression est
**silencieuse**, et elle ne touche que les `.mdx` : les pages `.md` de `meta/`,
`bord/` et `reference/` continuent de rendre leurs tableaux normalement, ce qui
la rend d'autant plus facile à manquer.

Les versions sont donc **épinglées à l'exact** dans `package.json`, sans
accent circonflexe. Starlight 0.41 n'est pas une issue : il exige Astro 7.
Après toute tentative de mise à jour, contrôler :

```sh
pnpm build && grep -c "<table" dist/modules/m00-cadre-et-examen/index.html
```

Le compte doit être **8**, et `grep -o '<p>| ' dist/modules/*/index.html` ne
doit rien remonter.

**Pas de KaTeX.** Le CRR ne comporte aucune formule ; les rares expressions
(longueur d'onde, portée) s'écrivent en texte. N'ajouter `remark-math` /
`rehype-katex` que devant un besoin réel, et le justifier dans le commit.

## Commandes

| Commande | Effet |
|----------|-------|
| `pnpm dev` | Serveur de dev sur `http://localhost:4321` |
| `pnpm build` | Build statique dans `dist/` |
| `pnpm check` | `astro check` — TypeScript + validation du frontmatter |
| `pnpm astro sync` | Régénère les types des content collections |
| `node scripts/scaffold-modules.mjs` | (Re)génère les placeholders des 15 modules **sans écraser l'existant** |

Toujours lancer `pnpm check` avant de proposer un commit, et `pnpm build`
avant tout push.

## Structure du dépôt

```
src/content/docs/
├── index.mdx                  Page splash (avertissement de non-normativité)
├── meta/                      Méthode, examen, ressources, crédits
├── modules/                   M00 à M14 (15 modules pédagogiques)
├── bord/                      Le dossier radio du voilier — « ces pages
│                              pilotent, les modules expliquent »
└── reference/                 Aides-mémoire — « la référence rappelle, le
                               module explique »

src/components/
├── Quiz.astro                 QCM autonome, évaluation côté client
└── Figure.astro               Illustration créditée par construction

scripts/
└── scaffold-modules.mjs       Génère/régénère les placeholders des modules

astro.config.mjs               Configuration Astro + Starlight (sidebar, locale)
SPECS.md                       Spécifications du programme (vérité pédagogique)
```

## Conventions de rédaction

### Langue

- **Tout en français**, y compris les commentaires de code et les messages de
  commit.
- **Terminologie radio-maritime française**, celle du manuel ANFR. On écrit
  « appel sélectif numérique (ASN) » à la première occurrence de chaque page
  avant d'utiliser le sigle ; idem pour « SMDSM », « RLS », « RSM »,
  « CROSS ». On écrit « détresse / urgence / sécurité », « accusé de
  réception », « veille », « indicatif d'appel », « station de navire »,
  « station côtière », et **« voie »** — jamais « canal », le manuel dit
  *voie*.
- Les équivalents anglais (DSC, GMDSS, EPIRB, MSI) sont mentionnés **une fois
  entre parenthèses**, parce que l'apprenant les lira sur son matériel, puis
  on garde le français.
- **Vouvoiement**, ou première personne du singulier dans les listes
  d'objectifs (« je suis capable de… »). **Le tutoiement est interdit.**

### Structure d'un module

Tous les modules suivent la structure définie dans
`scripts/scaffold-modules.mjs`. **Ne pas dévier sans modifier le scaffold
d'abord.**

Sections obligatoires, dans cet ordre :

1. Aside « Cadre » — épreuve visée · volume · prérequis
2. Chapeau narratif (8–10 lignes)
3. **Objectifs de fin de module** — checklist `- [ ]`, 5 à 7 items, tous en
   « je suis capable de + verbe opérationnel »
4. **Concepts clés** — un **tableau** `| Concept | Définition courte |` de 12 à
   15 lignes, pas une liste à puces
5. **Ce que l'examen en attend** — 4 à 8 puces (cf. ci-dessous)
6. **Cours** — sous-sections `### N. Titre` numérotées, 5 à 8 par module
7. **Vidéos sélectionnées** — tableau `| Source | Sujet couvert | Durée |`,
   colonne Durée alignée à droite (`------:`), 3 à 5 lignes
8. **Mise en situation — à bord** — avec « Livrable attendu » et fichiers
   nommés
9. **Entraînement — micro en main** — `<Steps>` de 4 à 6 étapes, chacune avec
   un titre en gras et 3–5 lignes
10. **Quiz de validation** — `<Quiz>`, 10 questions, seuil 80 %
11. **Fiche de synthèse** — bloc de code brut **sans langage**, ASCII

**Densité cible : 400 à 600 lignes par module.** En dessous, c'est un résumé,
pas un cours.

Le corps des modules est **retourné à la main autour de 65 caractères**, y
compris dans les Asides et les items de checklist : c'est ce qui rend les
diffs lisibles.

### La section « Ce que l'examen en attend »

Propre à ce projet. Elle contient, en 4 à 8 puces :

- le rattachement du module à **l'une des trois épreuves** du CRR, et le poids
  de cette épreuve (A = 6 questions, B = 8, C = 10, sur 24) ;
- le renvoi précis au **chapitre du manuel ANFR** correspondant, **par
  intitulé et non par numéro** (le sommaire et le corps du manuel divergent
  sur la numérotation du chapitre 3.E) ;
- ce qui, dans le module, **n'est pas interrogé** — typiquement le contenu
  relevant des **annexes du manuel**, explicitement hors questions ;
- les confusions classiques que l'examen exploite, avec renvoi au module qui
  les traite.

### Tableaux

Les tableaux sont l'ossature des modules : « Concepts clés » en compte 12 à 15
lignes, et plusieurs comparaisons tiennent sur 4 colonnes. Sous 50em — donc sur
téléphone — ils basculent automatiquement en **rendu empilé** : chaque ligne
devient une fiche, chaque cellule est précédée du libellé de sa colonne
(`src/styles/tableaux.css`, alimenté par le plugin rehype d'`astro.config.mjs`
qui injecte `data-libelle` au build).

Deux conséquences pour la rédaction :

- **Les en-têtes de colonnes deviennent des libellés.** Ils doivent être courts
  et compréhensibles isolément : « Questions », « Épreuve », « Titre requis ».
  Éviter « Valeur », « Item », « — », qui n'apprennent rien une fois détachés
  de leur ligne.
- **La première colonne ancre la fiche** : y mettre l'entrée qui identifie la
  ligne (le concept, la situation, le document), pas une donnée secondaire.

Une cellule vide ne produit pas de libellé orphelin, elle est masquée. À
l'impression, la grille classique est rétablie.

### Principe spirale

Chaque notion est revue **au moins trois fois** dans des contextes différents
(cours, mise en situation, quiz). Chaque section de cours se termine par un
renvoi explicite vers l'amont ou l'aval : « la procédure complète est l'objet
de **M8** », « on a vu la voie 70 en **M10** ».

### Asides

Usage nourri. `danger` pour ce qui met en danger en mer, `caution` pour les
pièges d'exploitation et les pièges d'examen, `tip` pour les astuces de
mémorisation, `note` pour le cadre. Titres courts et parlants : « Ce que l'ASN
ne fait pas », « Classe D : l'accusé passe par la voix », « 5 secondes,
5 fois, 4 minutes ».

### Quiz

Exactement **10 questions**, exactement **4 choix**, `answer` en index
0-based, **positions des bonnes réponses mélangées** (ne pas laisser l'index 0
ou 1 dominer), une `explanation` de 1 à 3 phrases sur chaque question, qui
**renvoie à un autre module** quand c'est pertinent. Les questions sont
rédigées **à partir du manuel ANFR**, en ciblant les confusions classiques —
pas des reformulations molles du cours.

La prop optionnelle `secondsPerQuestion` active le **mode examen** : une
question à la fois, compte à rebours, passage automatique, retour arrière
impossible. Elle reproduit les **22 secondes par question** du format réel.
Réservée aux examens blancs de M14 et aux séances de bachotage.

### Fiche de synthèse

Bloc de code brut (trois backticks, **sans langage**), formaté ASCII, calibré
pour être **imprimé, plastifié et fixé à côté de la VHF** — pas une feuille
A4. Titre encadré, rubriques en MAJUSCULES, indentation à 2 espaces, flèches
`→`, valeurs condensées. Puis, **hors du bloc**, une phrase de clôture qui
renvoie aux fiches voisines.

⚠️ **Jamais un tableau Markdown à la place du bloc ASCII.** Le bloc s'imprime
et se plastifie ; un tableau Markdown non.

### Illustrations

Uniquement des images libres (Wikimedia Commons et équivalents) ; jamais une
planche de documentation constructeur ni une page du manuel ANFR reproduite —
on renvoie par lien. Hébergement local systématique dans `src/assets/`. Chaque
image est **ouverte et regardée** avant publication, et créditée via
`Figure.astro`.

Vigilance propre au domaine : **vérifier que l'illustration correspond à la
pratique française et aux voies UIT**. Une carte de voies VHF américaine
(voies 22A, WX1–WX7), une signalisation fluviale non-RAINWAT ou un schéma
SMDSM antérieur à la généralisation de l'ASN induiraient l'apprenant en erreur
à l'examen.

⚠️ Piège MDX : **le nom d'un SVG importé doit être capitalisé.**
`<schema />` en minuscules est traité comme un élément HTML inconnu — la
figure se rend vide, **sans aucune erreur au build**.

### Frontmatter

```yaml
---
title: "M8 · Détresse en phonie"
description: "Émission d'un MAYDAY sur la voie 16, message de détresse, accusé de réception, MAYDAY RELAY, silence radio et contrôle du trafic de détresse."
sidebar:
  order: 8
---
```

Toujours **quoter** `title` et `description` : les apostrophes françaises et
les deux-points cassent le parsing YAML sinon. Titres de modules au format
`M<n> · <Titre>`, séparateur point médian `·`.

### Citation réglementaire

Donner la référence précise : « manuel ANFR CRR maritime, éd. juin 2025,
chap. 3 », « arrêté du 18 mai 2005, art. 3 », « RR de l'UIT, art. 47 ». Si la
référence n'est pas connue : `[à vérifier ANFR]`, **jamais une référence
vraisemblable**.

## Honnêteté épistémique

**Aucun fait vérifiable ne s'invente.** Sont concernés sans exception : le
format d'examen (nombre de questions, durée, barème), le tarif et les
modalités d'inscription, les numéros et fréquences de voies VHF, le format
d'un MMSI ou d'un code ATIS, la formulation exacte des procédures de détresse,
les références réglementaires, les durées et seuils techniques (5 s, 5 fois,
4 minutes, 5 minutes…).

Pour chacun : **soit il a été vérifié sur une source primaire et l'URL est
citée, soit on écrit le marqueur `[à vérifier ANFR]` à la place de la
valeur.** Un marqueur visible vaut infiniment mieux qu'un chiffre plausible.

Sources primaires, dans l'ordre : **manuel ANFR CRR maritime V16 (juin
2025)**, **anfr.fr**, Légifrance, textes de l'UIT et de l'OMI, SHOM, CROSS. Un
site d'école de croisière, un forum, une vidéo ou un PDF non daté ne sont pas
des sources primaires : ils orientent la recherche, ils ne la concluent
jamais.

Si deux sources se contredisent, **on ne tranche pas** : on écrit les deux, on
dit laquelle vient d'où, et on marque `[à vérifier ANFR]`.

### Trois pièges de sourçage déjà identifiés

- **Versions périmées du manuel.** `manuel-crr-23.pdf` et
  `Manuel_Maritime_REV_Aout17_V10.pdf` remontent encore dans les moteurs de
  recherche. L'édition de référence est **juin 2025, V16** ; l'ANFR indique
  elle-même que le contenu a substantiellement changé.
- **Pages ANFR d'outre-mer.** Elles décrivent un **autre examen**
  (Nouvelle-Calédonie : 20 questions + épreuve pratique, gratuit, seuil
  10/20). Ne jamais mélanger avec le format métropolitain.
- **Barème « 1 point / 0 point ».** Cette règle figure sur la page de l'examen
  **radioamateur** de l'ANFR, **pas** sur les pages du CRR. Le barème chiffré
  du CRR et l'existence de points négatifs ne sont **pas publiés** :
  `[à vérifier ANFR]`.

## Sécurité pédagogique

Cet apprenant émettra un jour un vrai appel de détresse depuis un vrai bateau.
Une procédure mal apprise coûte des minutes, et **en mer les minutes coûtent
des vies**.

- Les formulations **MAYDAY**, **PAN PAN** et **SÉCURITÉ** sont données dans
  leur forme normalisée exacte, dans l'ordre exact des champs, **jamais
  paraphrasées ni « améliorées »**.
- Chaque procédure est présentée comme une **séquence ordonnée** (composant
  `<Steps>` ou bloc de code), pas comme un paragraphe de prose dont on
  retiendrait l'idée.
- Le déclenchement d'une alerte **n'est jamais présenté comme une décision
  difficile** : en cas de doute, on alerte. L'annulation d'une fausse alerte
  est une procédure normale et prévue, enseignée en entier — pas une faute
  honteuse qu'on cacherait. Rappeler néanmoins que les fausses alertes
  **intentionnelles ou par négligence** sont pénalement sanctionnées.
- Tout module décrivant un matériel de survie (RLS, SART, VHF portative)
  rappelle qu'il **ne remplace ni la veille, ni le gilet, ni le plan de
  navigation**.

## Workflow de contribution

1. Branche de travail : `claude/prompt-execution-mt2rw1` (fusionnée dans
   `main` pour publication).
2. `pnpm check` doit passer avant tout commit.
3. `pnpm build` doit passer avant tout push.
4. **Un commit par module**, message en français au format « Sujet —
   précisions ». Exemple : « M8 complet — Détresse en phonie : MAYDAY, accusé
   de réception, MAYDAY RELAY, silence radio ».
5. **Pas de pull request** créée automatiquement — attendre la demande
   explicite.

## Ce qu'il ne faut PAS faire

- **Inventer un chiffre d'examen plausible.** C'est la faute la plus grave :
  l'apprenant calerait son entraînement dessus. Le barème par épreuve et les
  points négatifs **ne sont pas publiés**.
- **Reproduire une banque de questions commerciale.** Il n'existe aucune
  banque officielle publique — l'ANFR le dit de son propre module
  d'entraînement. Les QCM se rédigent à partir du manuel. On peut **lier**
  vers un entraînement gratuit ; on ne copie pas son contenu.
- **Deviner un lien vidéo.** Un lien non ouvert n'est pas un lien vérifié — et
  un lien vérifié mais antérieur à juin 2025 doit être signalé comme
  potentiellement décalé. Aucune vidéo produite en interne.
- **Créer un module hors de la séquence M0–M14.** Toute extension va dans
  `bord/` ou `reference/`.
- **Modifier la liste des modules sans mettre à jour `SPECS.md`** dans le même
  commit.
- **Ajouter une dépendance npm sans justification écrite** dans le message de
  commit.
- **Traiter le fluvial comme un module.** Examen séparé ; l'annexe 7 du manuel
  maritime n'est pas interrogée. Une page de `reference/`, pas plus.
- **Déborder sur le CGO / LRC / MF-HF / Inmarsat.** Mentionnés pour situer le
  CRR dans le SMDSM, jamais enseignés.
- **Bachoter les annexes.** Le tableau des voies et la liste des MID ne sont
  pas interrogés : `reference/`, pas de quiz.
- **Lisser le programme.** L'épreuve C pèse 10 questions sur 24 et elle est
  éliminatoire : M10 à M13 doivent être visiblement plus denses que M2 ou M5.
- **Transformer le CRR en cours de permis bateau.** Le CRR est un certificat
  de radiotéléphonie. La navigation, la météo et le balisage n'y entrent que
  par ce que la radio en transporte.
