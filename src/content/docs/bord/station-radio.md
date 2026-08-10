---
title: "La station radio du bord"
description: "Inventaire du matériel, identifiants, licence, programmation de la VHF et échéances : la fiche d’identité radio du bateau, à remplir et à garder à jour."
sidebar:
  order: 1
---

**Ces pages pilotent, les modules expliquent.** Cette fiche ne vous apprend
rien : elle rassemble ce qui, à bord, doit être **écrit, vérifié et à jour**.
Les renvois vous ramènent au module qui dit pourquoi.

Elle est présentée pour **ALIZÉ**, le voilier de référence du programme.
Remplacez chaque valeur par celle de **votre** licence.

:::caution[Identité fictive]
Le nom, l'indicatif d'appel et le MMSI d'ALIZÉ sont **inventés pour les
besoins du programme**. Ils ne désignent aucun navire réel.
:::

## 1. Identité de la station

| Rubrique | ALIZÉ | Le vôtre | Module |
|---|---|---|---|
| Nom du navire | **ALIZÉ** | | M1 |
| Quartier et immatriculation | | | M1 |
| Indicatif d'appel | **FH 2827** | | M1, M5 |
| Indicatif **épelé** | FOXTROT HOTEL – DEUX HUIT DEUX SEPT | | M5 |
| MMSI | **227 132 120** | | M10 |
| MID et ce qu'il dit | **227** — France métropolitaine | | M10 |
| Titulaire de la licence | | | M1 |
| Date de délivrance de la licence | | | M1 |
| **Échéance** — valable un an | | | M1 |

:::danger[Ce qui doit être signalé à l'ANFR]
Toute **modification de l'installation radio**, tout **changement de
propriété** du navire ou de **coordonnées** doit être signalé pour maintenir
la licence à jour. Une portative achetée en cours de saison, une balise
ajoutée, un déménagement : chacun se déclare.

L'enjeu n'est pas administratif. C'est la licence qui permet à un centre de
secours de rattacher un MMSI à un bateau, à un propriétaire et à un numéro de
téléphone.
:::

## 2. Inventaire des équipements

Chaque ligne doit correspondre à une ligne de la licence. **Tout écart est à
corriger.**

| Équipement | ALIZÉ | Identifiant porté | Sur la licence ? | Module |
|---|---|---|---|---|
| VHF fixe | 25 W, **ASN classe D**, raccordée au GPS | MMSI `227 132 120` | oui | M6, M10 |
| VHF portative | Étanche, **≤ 6 W** | MMSI du navire | oui | M6 |
| Radiobalise (RLS / EPIRB) | — | Code hexadécimal, 15 caractères | oui | M13 |
| Balise personnelle (PLB) | — | Code usine, **non décodable en MMSI** | **non** — à déclarer au FMCC | M13 |
| Émetteur-récepteur AIS | — | MMSI du navire | oui | M13 |
| Récepteur AIS seul | — | **aucun** — ne peut être codé | — | M13 |
| Répondeur radar (SART) | — | — | | M13 |
| NAVTEX | **aucun** | — | | M12 |
| MF / HF, Inmarsat | **aucun** | — | | M4 |

## 3. Programmation de la VHF

À vérifier une fois, puis à chaque intervention sur le poste.

| Point à contrôler | Fait | Module |
|---|:--:|---|
| Le **MMSI est saisi** et l'écran l'affiche au démarrage | ☐ | M10 |
| La **position GPS est fournie en permanence** au poste | ☐ | M1, M10 |
| La position s'affiche à l'écran et **elle est juste** | ☐ | M10 |
| Le capot du bouton `DISTRESS` **se referme** et rien ne s'appuie dessus | ☐ | M10, M11 |
| La **veille sur la voie 70** est active | ☐ | M11 |
| La **double veille** est réglée comme voulu | ☐ | M6 |
| Le **squelch** est réglé — un « cloc » de temps à autre, pas de souffle continu | ☐ | M6 |
| La **puissance réduite** est accessible d'un geste | ☐ | M6 |
| Les MMSI utiles sont enregistrés dans le répertoire | ☐ | M10 |
| L'**heure du poste est en UTC** | ☐ | M11 |

:::caution[Le MMSI ne se saisit souvent qu'une fois]
Sur la plupart des VHF, le MMSI ne peut être entré qu'**une seule fois** ;
au-delà, il faut un professionnel. Vérifiez donc chiffre par chiffre avant de
valider, et **ne réutilisez jamais** le MMSI d'un autre navire — c'est
interdit.
:::

## 4. Les MMSI et numéros à enregistrer

| Correspondant | Valeur | Où |
|---|---|---|
| CROSS de la zone principale | *(voir [la page CROSS](/reference/cross/))* | Répertoire de la VHF |
| CROSS de la zone secondaire | | Répertoire de la VHF |
| **196** — CROSS depuis un téléphone | `196` | Téléphone du bord, et sur une carte |
| Port d'attache | | Répertoire |
| Bateau accompagnateur, le cas échéant | | Répertoire |

## 5. Échéances

Une seule liste, triée par date, relue au début de chaque saison.

| Échéance | Date | Module |
|---|---|---|
| Licence de station — renouvellement annuel | | M1 |
| Batterie de la radiobalise — cinq ans en général | | M13 |
| Largueur hydrostatique de la balise de pont | | M13 |
| Batterie de la VHF portative | | M6 |
| Dernier **autotest** de la balise | | M13 |
| Dernier **essai radio** en phonie et en ASN | | M11 |
| Prochain contrôle de cette fiche | | — |

## 6. Journal des essais

Un essai qui n'est pas noté n'a pas eu lieu.

| Date | Type d'essai | Correspondant | Résultat |
|---|---|---|---|
| | Phonie, puissance réduite | | |
| | ASN — `INDIVIDUAL` + MMSI + `ROUTINE` | | |
| | Autotest de la balise | | |

Le protocole d'essai, et l'interdiction d'utiliser le bouton rouge pour
tester, sont en **[M11](/modules/m11-protection-frequences/)**.

## Où est rangée la notice

Le manuel exige que les **instructions du fabricant** soient **disponibles à
proximité des équipements radioélectriques**. Notez ici où elles sont — et si
le classeur est au fond d'un coffre, photographiez les pages utiles et
plastifiez-les avec les cartes de cockpit.

> Emplacement de la notice : ……………………………………………
