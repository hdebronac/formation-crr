---
title: "Crédits des illustrations"
description: "Auteur, licence et source de chaque illustration publiée sur le site, règles de sélection des images, et les images écartées avec leur motif."
sidebar:
  order: 4
---

Toute image publiée sur ce site est **libre** et **créditée**. Le composant
`Figure.astro` rend le crédit obligatoire par construction : une figure sans
légende ne se rend pas.

## Règles de sélection

- **Images libres uniquement** — domaine public, CC0, CC BY, CC BY-SA. Les
  sources privilégiées sont Wikimedia Commons et équivalents.
- **Jamais une planche de documentation constructeur**, jamais une page du
  manuel de l'ANFR reproduite : on renvoie par lien.
- **Hébergement local systématique** dans `src/assets/` : les images ne sont
  pas chargées depuis un site tiers.
- **Chaque image est ouverte et regardée** avant publication. Une vignette
  plausible n'est pas une image vérifiée.
- **La légende doit enseigner** — dire ce qu'il faut observer, pas seulement
  nommer l'objet.

:::caution[Vigilance propre au domaine]
Une illustration exacte ailleurs peut être fausse ici. Sont à écarter :

- les **cartes de voies VHF américaines** (voies 22A, WX1 à WX7) — la
  numérotation et les usages diffèrent des voies de l'UIT appliquées en
  France ;
- les schémas de **signalisation fluviale non-RAINWAT** ;
- les schémas du **SMDSM antérieurs à la généralisation de l'appel sélectif
  numérique**, qui décrivent une organisation dépassée.

Chacun de ces trois cas induirait l'apprenant en erreur à l'examen.
:::

## Illustrations publiées

| Module | Image | Auteur | Licence | Source |
|---|---|---|---|---|
| M12 | Récepteur NAVTEX imprimant un message, façade affichant 518 | Clipper | CC BY 2.5 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Navtex.jpg) |
| M13 | Largueur hydrostatique d'une balise de pont, en place sur son conteneur | 12thave | CC BY-SA 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Epirb_hydrostatic_release_mechanism.jpg) |
| M13 | Écran AIS et liste des navires à proximité | Ulf Larsen | CC BY-SA 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ships_AIS_display_with_lists_of_nearby_vessels.jpg) |

## Schémas produits pour ce programme

Réalisés spécifiquement pour ce site et publiés sous la licence du contenu,
**CC BY-SA 4.0**. Les fichiers source sont dans `src/assets/modules/`.

| Module | Schéma | Ce qu'il montre |
|---|---|---|
| M0 | Les trois épreuves | Les bandes à l'échelle — 6, 8 et 10 questions — et la règle de la moyenne à chacune |
| M1 | Certificat et licence | Deux colonnes : ce qui porte sur la personne, ce qui porte sur le bateau |
| M2 | Les types de stations | L'emboîtement : portuaire et centre de coordination sont des stations côtières |
| M3 | Simplex et duplex | Une fréquence et deux sens, contre deux fréquences simultanées |
| M4 | Les quatre zones du SMDSM | Les zones A1 à A4 lues depuis la côte, avec le moyen radio de chacune et la limite de ce que le CRR autorise |
| M6 | Les commandes d'un poste | Huit repères numérotés sur une face avant, du squelch au bouton sous capot |
| M7 | Les quatre rangs de priorité | Détresse, urgence, sécurité, routine, et l'accolade de la sauvegarde de la vie humaine sur les trois premiers |
| M8 | Entendre un MAYDAY | Les cinq obligations dans l'ordre, et le relais au bout de cinq minutes |
| M9 | Quel signal émettre | Trois questions posées dans l'ordre, et la sortie qu'elles donnent |
| M10 | Les quatre nombres de l'alerte | 5 s, 5 fois, 4 min et 5 min replacés sur une même ligne de temps |
| M11 | Les voies protégées et leurs voisines | 75-76 autour de la 16, 10-11 autour de la 70 : deux statuts différents |
| M13 | La chaîne Cospas-Sarsat | De la balise au CROSS : satellites, LUT, MCC, FMCC de Toulouse, avec les rôles distincts du 406 et du 121,5 MHz |
| M13 | La trace d'un SART sur un écran radar | Les douze traits régulièrement espacés, alignés dans l'axe du répondeur |

## Images écartées, et pourquoi

La transparence sur les refus vaut celle sur les publications.

| Image | Motif |
|---|---|
| Deux photographies de postes VHF « SAILOR » | Le champ **source** de la fiche Commons désigne le **constructeur**. La règle du dépôt interdit les planches de documentation constructeur, et la provenance de la licence est ambiguë. |
| Photographie produit d'un AIS-SART Jotron | Photographie de catalogue sur fond blanc, créditée au fabricant. Même motif. |
| Diagrammes Cospas-Sarsat trouvés en ligne | Marqués « domaine public » sans justification vérifiable. Le schéma a été **redessiné** pour ce site plutôt que repris. |

Quand aucune image libre et sûre n'existe, le schéma est **produit ici**
plutôt qu'emprunté : c'est plus long, mais la provenance est alors certaine
et la légende peut être écrite pour enseigner.

## État de la passe

**Seize illustrations sur treize modules** : trois photographies et treize
schémas. Deux modules n'en portent pas, et c'est délibéré — **M5** est déjà
une table d'épellation, **M14** un récapitulatif : dans les deux cas, la
forme tabulaire enseigne mieux qu'une image.

Le rapport s'est inversé en cours de route. Faute d'images libres dont la
provenance soit sûre, la plupart des figures sont désormais **dessinées
ici** : cela coûte plus de temps, mais la légende peut alors être écrite pour
enseigner un point précis du programme, et non pour décrire ce qu'une photo
montrait par hasard.

## Signaler un problème de crédit

Si une attribution est incorrecte ou incomplète, ouvrez une issue sur le
[dépôt](https://github.com/hdebronac/formation-crr/issues) : l'image sera
corrigée ou retirée.
