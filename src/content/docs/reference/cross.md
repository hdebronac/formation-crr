---
title: "Les CROSS"
description: "Centres régionaux opérationnels de surveillance et de sauvetage : rôle, liste des centres métropolitains et ultramarins, MMSI, et le 196."
sidebar:
  order: 4
---

**La référence rappelle, le module explique.** Le rôle des CROSS dans le
service mobile maritime est traité en
**[M2](/modules/m02-communications-et-stations/)** et
**[M4](/modules/m04-smdsm/)**.

## Ce qu'est un CROSS

Un **centre de coordination des secours** est, au sens du manuel, **une
station côtière responsable des opérations de sauvetage pour une zone
déterminée**. En France, ce sont les **CROSS** — centres régionaux
opérationnels de surveillance et de sauvetage — qui « coordonnent en
permanence les opérations de recherche et de sauvetage des zones maritimes
sous leur juridiction ».

Le sigle international correspondant est **MRCC**, *Maritime Rescue
Coordination Centre*.

Les CROSS traitent **plus de 10 000 opérations par an** au profit des navires
de pêche, de commerce, de plaisance et des pratiquants de loisirs nautiques.
Suivant l'alerte reçue, ils peuvent faire intervenir sur zone tous les moyens
en hommes et en matériel — navire, avion, hélicoptère — et contacter les
navires à proximité du lieu du sinistre.

Outre le sauvetage, le manuel leur attribue quatre missions additionnelles :

- surveillance de la **navigation** maritime ;
- surveillance des **pollutions** ;
- surveillance des **pêches** maritimes ;
- **diffusion des renseignements de sécurité maritime et de sûreté
  maritime** — voir **[M12](/modules/m12-rsm/)**.

## Les centres

### Métropole

| CROSS | Zone | MMSI |
|---|---|---|
| **Gris-Nez** | Manche Est – mer du Nord | `00 227 5100` |
| **Jobourg** | Manche centrale | `00 227 5200` |
| **Corsen** | Manche Ouest – mer d'Iroise | `00 227 5300` |
| **Etel** | Atlantique | `00 227 5000` |
| **La Garde** | Méditerranée | `00 227 5400` |

### Outre-mer

| Centre | Zone | MMSI |
|---|---|---|
| **CROSS Antilles-Guyane** | Antilles – Guyane | `00 227 5500` |
| **CROSS Réunion** | Sud océan Indien | `00 660 1000` |
| **MRCC de Nouvelle-Calédonie** | Nouvelle-Calédonie | — |
| **JRCC de Polynésie française** | Polynésie française | — |

Le MMSI du CROSS Antilles-Guyane conserve le **MID historique de métropole**,
`227`, alors que le CROSS Réunion utilise le MID `660`. Le manuel le signale
lui-même : **avant 2000, il n'y avait aucune distinction entre les MID de
métropole et ceux d'outre-mer**.

## Comment les joindre

| Moyen | Détail | Module |
|---|---|---|
| **VHF, voie 16** | Appel en phonie, détresse, urgence, sécurité | M7, M8 |
| **VHF ASN, voie 70** | Alerte numérique vers le MMSI du CROSS | M10 |
| **Téléphone : 196** | Depuis une ligne fixe ou un portable | M12 |
| **Radiobalise** | Via le FMCC de Toulouse, qui retransmet au CROSS compétent | M13 |

:::note[Le 196 fait partie de la panoplie]
Le manuel exige de savoir **communiquer avec le MRCC par n'importe quel
moyen** — c'est l'une des trois obligations d'installation et d'information à
bord (**[M11](/modules/m11-protection-frequences/)**). Si la VHF est en panne
ou si vous devez annuler une fausse alerte et que la voie 16 ne passe pas, le
téléphone est un moyen parfaitement légitime.
:::

:::caution[Un CROSS peut être relayé]
En cas d'**indisponibilité d'un émetteur**, les CROSS peuvent être **relayés
localement par les sémaphores de la Marine nationale**. Un bulletin qui ne
tombe pas à l'heure habituelle sur la voie annoncée n'est donc pas
nécessairement le signe d'une panne de votre poste.
:::

## Ce que le CROSS n'est pas

- Ce **n'est pas un moyen de sauvetage** : il coordonne, il n'intervient pas
  lui-même. Il engage la **SNSM**, les affaires maritimes, la gendarmerie
  maritime, la marine nationale.
- Ce **n'est pas le CCMM** : la consultation radiomédicale est assurée par le
  **Centre de consultation médicale maritime de Toulouse** ou un **SAMU
  côtier**, le CROSS assurant la mise en liaison
  (**[M9](/modules/m09-urgence-et-securite/)**).
- Ce **n'est pas le FMCC** : les alertes de radiobalises transitent par le
  **FMCC de Toulouse**, qui les retransmet ensuite au CROSS concerné
  (**[M13](/modules/m13-signaux-alerte/)**).
