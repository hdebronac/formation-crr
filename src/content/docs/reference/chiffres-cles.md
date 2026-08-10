---
title: "Les chiffres à ne jamais approximer"
description: "Toutes les valeurs chiffrées du programme rassemblées : fréquences, durées, portées, seuils, avec le module qui les explique."
sidebar:
  order: 3
---

**La référence rappelle, le module explique.** Chacune de ces valeurs a été
établie dans son module, contre le manuel de préparation de l'ANFR. La colonne
de droite dit où aller si l'une d'elles résiste.

Cette page est faite pour la relecture de la veille et pour le tableau de
bord. Elle ne remplace pas **[M14](/modules/m14-bachotage/)**, qui explique
comment la travailler.

## Fréquences et voies

| Valeur | Ce qu'elle désigne | Module |
|---|---|---|
| **156,800 MHz** | Voie 16 — appel, détresse, urgence, sécurité en phonie | M3 |
| **156,525 MHz** | Voie 70 — appel sélectif numérique, jamais la voix | M3, M10 |
| **156,300 MHz** | Voie 6 — navire-navire, exploitation simplex | M3 |
| **156,975 / 161,575 MHz** | Voie 79 — les deux fréquences de cette voie duplex | M3, M12 |
| **161,975 MHz** | Voie AIS 1 | M13 |
| **162,025 MHz** | Voie AIS 2 | M13 |
| **156 à 174 MHz** | Bande VHF du service mobile maritime | M3 |
| **57 voies** | Voies VHF marines, numérotées 01 à 28 et 60 à 88 | M3 |
| **75 et 76** | Voies de garde encadrant la voie 16, laissées libres | M11 |
| **10 et 11** | Voies demandant des précautions vis-à-vis de la voie 70 | M11 |
| **79 ou 80** | Voies de diffusion météo des CROSS, selon la zone | M12 |
| **518 / 490 / 4209,5 kHz** | NAVTEX international / national / ondes décamétriques | M12 |
| **406 MHz** | Radiobalise — alerte et localisation par satellite | M13 |
| **121,5 MHz** | Radiobalise — radioralliement en approche finale | M13 |
| **9200 à 9500 MHz** | Bande radar qui déclenche un SART | M13 |

## Durées et seuils

| Valeur | Ce qu'elle désigne | Module |
|---|---|---|
| **5 secondes** | Appui minimal sur le bouton `DISTRESS` | M10 |
| **5 fois** | Répétitions de l'alerte ASN sur la voie 70 | M10 |
| **4 minutes** | Renouvellement automatique de l'alerte tant qu'il n'y a pas d'accusé | M10 |
| **5 minutes** | Délai sans accusé de réception avant un `MAYDAY RELAY` | M8 |
| **1 minute** | Durée maximale d'une émission sur la voie 16 | M11 |
| **10 minutes / 4 heures** | Durée et périodicité d'une émission NAVTEX | M12 |
| **48 heures** | Autonomie exigée d'une radiobalise | M13 |
| **96 heures** | Durée d'émission minimale d'un AIS-SART | M13 |
| **5 ans** | Durée de conservation d'une batterie de balise, en général | M13 |
| **1 an** | Validité de la licence de station de navire, renouvelée chaque année | M1 |

## Puissances, portées, distances

| Valeur | Ce qu'elle désigne | Module |
|---|---|---|
| **25 W / 1 W** | Puissance normale / réduite d'une VHF fixe | M6 |
| **6 W** | Puissance maximale d'émission d'une VHF portative | M6 |
| **20 à 30 milles** | Portée de la zone A1 en métropole | M4 |
| **150 à 300 milles** | Portée de la zone A2 | M4 |
| **20 à 40 milles** | Portée d'un émetteur-récepteur AIS | M13 |
| **250 à 400 milles** | Portée du NAVTEX, d'où sa limite à la zone A2 | M12 |
| **5 à 10 milles** | Portée d'un SART | M13 |
| **10 mètres** | Étanchéité d'une radiobalise | M13 |
| **4 mètres** | Profondeur d'éjection automatique d'une RLS de pont | M13 |
| **60 milles** | Distance d'un abri au-delà de laquelle l'EPIRB est obligatoire | M13 |
| **7 Beaufort** | Seuil d'un BMS en zone côtière des 20 milles | M12 |
| **300 000 km/s** | Vitesse de propagation des ondes radioélectriques | M3 |

## Identifiants et signatures

| Valeur | Ce qu'elle désigne | Module |
|---|---|---|
| **9 chiffres** | Longueur d'un MMSI | M10 |
| **3 chiffres** | Longueur d'un MID, en tête du MMSI | M10 |
| **15 caractères** | Code hexadécimal d'une radiobalise, chiffres et lettres | M13 |
| **10 chiffres** | Code ATIS — **fluvial**, hors programme maritime | — |
| **12 traits** | Signature d'un SART sur un écran radar | M13 |
| **974…** | Début d'un identifiant AIS de balise à *Return Link System* | M13 |
| **99…** | Début du MMSI d'une aide à la navigation | M13 |
| **00 + MID + 4 chiffres** | Forme du MMSI d'une station côtière | M10 |

## Examen

| Valeur | Ce qu'elle désigne | Module |
|---|---|---|
| **24 questions** | Total de l'épreuve | M0 |
| **6 / 8 / 10** | Questions des épreuves A / B / C | M0 |
| **22 secondes** | Temps par question, sans retour en arrière | M0 |
| **environ 25 minutes** | Durée totale de l'épreuve | M0 |
| **une seule réponse** | Par question | M0 |

:::caution[Deux valeurs ne sont pas publiées]
Le **barème chiffré par épreuve** et l'**existence de points négatifs** ne
figurent ni sur les pages de l'ANFR, ni dans l'arrêté du 18 mai 2005, ni dans
le manuel. `[à vérifier ANFR]`

La règle « 1 point / 0 point » que l'on rencontre partout appartient à la page
de l'examen **radioamateur**. Ne construisez aucune stratégie de réponse sur
elle — voir **[M0](/modules/m00-cadre-et-examen/)**.
:::

## Les nombres qui se ressemblent

C'est là que se perdent les points. Isolez-les explicitement.

| Confusion | Ce qui les sépare |
|---|---|
| 5 s · 5 fois · 4 min · 5 min | Appui sur `DISTRESS` · répétitions de l'alerte · renouvellement · délai avant relais |
| 48 h · 96 h | Autonomie d'une radiobalise · émission d'un AIS-SART |
| 10 m · 4 m | Étanchéité d'une balise · profondeur d'éjection d'une balise de pont |
| A1 20-30 · A2 150-300 · NAVTEX 250-400 | Trois portées voisines, trois objets différents |
| 9 chiffres · 15 caractères · 10 chiffres | MMSI · code balise · ATIS fluvial |
| 518 · 490 | NAVTEX international en anglais · national en langue nationale |
