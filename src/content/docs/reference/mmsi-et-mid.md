---
title: "MMSI, MID et identifiants"
description: "Format du MMSI, MID attribués à la France, MMSI des CROSS et des autres catégories de stations, et les identifiants à ne pas confondre avec lui."
sidebar:
  order: 5
---

**La référence rappelle, le module explique.** Le MMSI, sa programmation et
son rôle dans l'appel sélectif numérique sont l'objet de
**[M10](/modules/m10-asn/)** ; la licence qui le porte, de
**[M1](/modules/m01-cadre-reglementaire/)**.

## Ce qu'est le MMSI

**MMSI** — *Maritime Mobile Service Identity*, identité du service mobile
maritime. C'est une **identification unique de 9 chiffres** attribuée à la
station radio si le navire possède un ou plusieurs équipements devant être
codés avec un MMSI.

Il permet une **identification sûre du navire et du propriétaire** par les
centres de secours en mer en cas de détresse.

:::danger[Un MMSI ne se réutilise pas]
Le manuel est catégorique : **il est interdit de réutiliser un MMSI attribué à
un navire sur une autre embarcation.** Un poste racheté d'occasion doit être
reprogrammé par un professionnel — sur la plupart des VHF, le MMSI ne se
saisit **qu'une seule fois**.
:::

## La forme

| Type de station | Forme | Exemple |
|---|---|---|
| **Station de navire** | MID + 6 chiffres | `227 132 120` |
| **Station côtière** | `00` + MID + 4 chiffres | `00 227 5100` (CROSS Gris-Nez) |

Le **MID** — *Maritime Identification Digit* — est composé de **trois
chiffres** et identifie la **nationalité** du navire ou de la station côtière.
L'UIT a attribué à chaque État un ou plusieurs MID, selon l'importance de sa
flotte nationale.

## Les MID attribués à la France

| MID | Territoire |
|:--:|---|
| **226** | Métropole |
| **227** | Métropole |
| **228** | Métropole |
| 329 | Guadeloupe |
| 347 | Martinique |
| 361 | Saint-Pierre-et-Miquelon |
| 501 | Terre Adélie |
| 540 | Nouvelle-Calédonie |
| 546 | Polynésie française |
| 578 | Wallis-et-Futuna |
| 607 | Îles Saint-Paul et Amsterdam |
| 618 | Archipel de Crozet et TAAF |
| 635 | Îles Kerguelen, et anciens navires inscrits au Registre international français |
| 660 | La Réunion, Mayotte |
| 745 | Guyane |

Les MID **226, 227 et 228** correspondent aux navires rattachés à un quartier
maritime de la **France métropolitaine**. Les DOM, les collectivités
territoriales et les COM ont reçu des MID spécifiques.

## Les MMSI des CROSS

| CROSS | MMSI |
|---|---|
| Gris-Nez | `00 227 5100` |
| Jobourg | `00 227 5200` |
| Corsen | `00 227 5300` |
| Etel | `00 227 5000` |
| La Garde | `00 227 5400` |
| Antilles-Guyane | `00 227 5500` |
| Réunion | `00 660 1000` |

Détail utile : le CROSS **Antilles-Guyane** conserve le MID `227`, celui de la
métropole, parce qu'**avant 2000 il n'y avait aucune distinction entre les MID
de métropole et ceux d'outre-mer**.

## Ne pas confondre avec le MMSI

| Identifiant | Longueur | Où il vit | Module |
|---|---|---|---|
| **MMSI** | 9 chiffres | VHF ASN, AIS, balise codée du navire | M10 |
| **Indicatif d'appel** | Lettres et chiffres | Procédures en phonie, épelé | M1, M5 |
| **Code hexadécimal de balise** | 15 chiffres et lettres | RLS, EPIRB, PLB professionnelle | M13 |
| **ID-AIS** | 9 chiffres | Codé **en usine** dans l'équipement AIS | M10, M13 |
| **Code ATIS** | 10 chiffres | Fluvial uniquement, émis automatiquement | — |

Le manuel prévient explicitement : **ne pas confondre le MMSI avec
l'identifiant AIS (ID-AIS)**, déjà codé en usine dans l'équipement par le
fabricant. Cet ID-AIS commence par **970, 972 ou 974** selon le matériel.

Deux préfixes valent d'être reconnus au premier coup d'œil :

- **974…** — identifiant AIS d'une balise à *Return Link System*
  (**[M13](/modules/m13-signaux-alerte/)**) ;
- **99…** — MMSI d'une **aide à la navigation** : bouée, phare, émetteur
  signalant une zone dangereuse.

## Ce qui n'est pas interrogé

La **liste complète des MID** figure à l'**annexe 3** du manuel. Comme toutes
les annexes, **elle ne fait l'objet d'aucune question d'examen**. Elle est
reproduite ici parce qu'elle est utile à bord — reconnaître un `227` sur
l'écran de sa VHF, c'est reconnaître un voisin français — pas pour être
apprise par cœur.

Ce qui est interrogeable, en revanche : la **longueur** du MMSI, la **forme**
en `00` des stations côtières, le fait que le **MID compte trois chiffres** et
désigne une nationalité, et l'**interdiction de réutilisation**.
