# Formation CRR

Programme d'auto-formation au **certificat restreint de radiotéléphoniste du
service mobile maritime (CRR)** — l'examen de l'ANFR qui autorise l'usage
d'une VHF marine. Quinze modules, environ 33 heures, calibrés pour 3 à
4 semaines à raison de 8 à 10 heures par semaine.

**Site publié : https://crr.bronac.net**

> [!WARNING]
> Ce dépôt est un carnet d'auto-formation rédigé **par un candidat en cours de
> préparation**, pour son propre usage. Il ne remplace ni le **manuel de
> préparation de l'ANFR**, ni les Règlements des radiocommunications de
> l'UIT, ni une formation dispensée par un organisme agréé, et n'a **aucune
> valeur réglementaire**. Il porte sur le **CRR maritime passé en France
> métropolitaine** : l'outre-mer applique un autre format d'examen, et le CRR
> fluvial est un examen distinct.

## Le programme

Le découpage suit les **trois épreuves de l'examen** (24 questions au total) :

| Épreuve | Intitulé | Questions | Modules |
|---|---|---:|---|
| A | Généralités du service mobile maritime | 6 | M0 → M5 |
| B | Radiotéléphonie VHF | 8 | M6 → M9 |
| C | Utilisation pratique de VHF ASN (SMDSM) | 10 | M10 → M13 |
| — | Bachotage | — | M14 |

La répartition du travail n'est volontairement pas uniforme : l'épreuve C pèse
à elle seule 10 questions sur 24, et il faut la moyenne à **chacune** des
trois épreuves.

Le détail figure dans [`SPECS.md`](SPECS.md), qui fait office de source de
vérité pédagogique.

## Source de référence

Tout le contenu est aligné sur le **manuel de préparation du CRR maritime de
l'ANFR, édition de juin 2025 (V16)**, qui constitue le programme d'examen.

Les valeurs qui n'ont pas pu être vérifiées sur une source primaire sont
signalées dans le texte par le marqueur **`[à vérifier ANFR]`** — notamment le
barème chiffré par épreuve, l'existence de points négatifs et les règles de
repassage, qui ne sont **pas publiés** par l'ANFR.

## Développement

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm check    # astro check — TypeScript + frontmatter
pnpm build    # build statique dans dist/
```

Node 22 et pnpm 10. Le déploiement sur GitHub Pages est automatique à chaque
push sur `main`.

Pour régénérer les placeholders des modules sans écraser ce qui est déjà
rédigé :

```sh
node scripts/scaffold-modules.mjs
```

La structure d'un module est définie par ce script. On ne dévie pas sans
modifier le scaffold d'abord — voir [`CLAUDE.md`](CLAUDE.md).

## Licences

Double licence, détaillée dans [`LICENSE`](LICENSE) :

- **contenu rédactionnel** (`src/content/docs/`, `SPECS.md`) —
  [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr) ;
- **code** (`src/components/`, `scripts/`, configuration) — MIT ;
- **illustrations** — sous leur licence propre, créditées sur la page
  « Crédits des illustrations ».

Le manuel de l'ANFR n'est ni reproduit ni redistribué : il est cité et lié.
