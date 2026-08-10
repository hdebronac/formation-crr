---
title: "Radiotéléphonie fluviale"
description: "ATIS, réseaux VHF fluviaux, voies interdites et puissance réduite : ce qu’il faut savoir en pratique, et pourquoi rien de tout cela n’est interrogé à l’examen maritime."
sidebar:
  order: 8
---

:::danger[Hors programme de l'examen maritime]
Cette page décrit l'**annexe 7** du manuel de préparation. Comme toutes les
annexes, **elle ne fait l'objet d'aucune question à l'examen du CRR
maritime**. Le CRR **fluvial** est un **autre examen**, avec son propre
manuel et son propre programme.

Elle figure ici parce que le titulaire d'un CRR maritime peut se retrouver
sur une voie d'eau intérieure — canal, estuaire, lac — et que les règles y
sont **différentes au point d'être piégeuses**. Aucun quiz de ce site ne
l'interroge.
:::

## Le cadre

Les règles du service mobile radiotéléphonique fluvial sont définies par
l'**arrangement régional relatif au service de radiocommunications sur les
voies de navigation intérieure**, en cohérence avec les textes de l'UIT.

## Les trois différences qui comptent

| Point | En maritime | En fluvial |
|---|---|---|
| **ASN** | Fonction centrale du programme (**[M10](/modules/m10-asn/)**) | **Interdit** |
| **Puissance** | 25 W ou 1 W selon le besoin | **Puissance réduite obligatoire** |
| **Commutateur** | — | Position **« ATIS »** ou **« Fluvial »** |

Un émetteur-récepteur mixte doit donc être **basculé en mode fluvial** en
entrant sur une voie d'eau intérieure. Ce n'est pas une précaution de confort :
c'est ce qui limite la puissance comme la réglementation l'exige.

## Les voies 16 et 70 sont interdites

C'est le renversement le plus déroutant pour qui vient du maritime.

> Les voies 16 et 70 sont **interdites** sur les voies d'eau intérieures, à
> l'exception des zones mixtes proches de la mer.

Deux exceptions signalées par le manuel :

- le **lac Léman**, où la **voie 16 est utilisée** ;
- aux **Pays-Bas**, dans les estuaires et les canaux en communication avec la
  mer, l'**écoute de la voie 16 est conseillée**, en raison du voisinage des
  navires.

Les messages de **détresse, d'urgence et de sécurité** sont **généralement
transmis sur la voie 10**.

Autre différence de fond : la position du bateau n'est pas donnée en
coordonnées géographiques mais par le **point kilométrique** de sa situation.

## L'ATIS

**ATIS** — *Automatic Transmitter Identification System*.

Toutes les installations radiotéléphoniques de bord, **fixes ou portatives**,
doivent en être équipées. L'émission du **code ATIS de 10 chiffres** est
**automatique** et se produit **après relâchement du commutateur d'émission**.

:::caution[Dix chiffres, pas neuf]
Le code **ATIS** compte **10 chiffres** et relève du **fluvial**. Le **MMSI**
compte **9 chiffres** et relève du **maritime**. Un énoncé qui parle de « dix
chiffres émis automatiquement » ne parle pas du MMSI — voir
[la page MMSI](/reference/mmsi-et-mid/).
:::

## Les quatre réseaux

| Réseau | Puissance maximale | Objet des messages | Voie d'appel | Voies de travail |
|---|---|---|---|---|
| **Bateau – bateau** | 1 watt | Échanges entre bateaux ; communications privées autorisées mais limitées | **Voie 10** — veille obligatoire sur certaines voies d'eau | 6, 8, 13, 72, 77 en simplex (77 et 72 autorisées dans certains pays pour les communications privées) |
| **Bateau – autorité portuaire** | 1 watt | Attribution de stationnement, trafic dans les ports | Dépend du secteur géographique | 11, 12, 14, 71, 74 |
| **Liaisons avec les stations terrestres des autorités du port — informations nautiques** | 25 W, **sauf Belgique et Pays-Bas** où elle est limitée à 1 W | Conseil et orientation du trafic, exploitation des voies navigables | La première voie de la station appelée lorsqu'elle en utilise plusieurs | S'il n'existe qu'une voie, elle sert à l'appel **et** au trafic |
| **Communications de bord** | 1 watt | Radiocommunications internes à un bateau ou à un groupe de bateaux remorqués ou poussés | 15, 17 | 15, 17 |

## Les antennes

Sur certaines voies VHF fluviales, la puissance rayonnée par l'antenne est
**limitée à un watt maximum**. Les antennes **dites « à gain » sont donc
interdites**.

## Pour aller plus loin

Le **Guide de la radiotéléphonie pour la navigation intérieure** peut être
demandé auprès de la **Commission centrale pour la navigation du Rhin**, au
Palais du Rhin à Strasbourg.

:::note[Pourquoi il n'y a pas de module fluvial]
Le programme de ce site suit les **trois épreuves du CRR maritime**. Créer un
module fluvial reviendrait à faire réviser un contenu qui n'est jamais
interrogé, au détriment de l'épreuve C — celle qui pèse 10 questions sur 24.
Une page de référence, pas davantage.
:::
