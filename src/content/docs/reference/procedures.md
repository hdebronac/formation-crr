---
title: "Les procédures côte à côte"
description: "Détresse, urgence, sécurité, annulation d’une fausse alerte et appel de routine : les cinq séquences dans la même mise en page, en français et en anglais."
sidebar:
  order: 2
---

**La référence rappelle, le module explique.** Ces séquences sont enseignées,
justifiées et travaillées dans **[M7](/modules/m07-procedures-phonie/)**,
**[M8](/modules/m08-detresse-phonie/)**, **[M9](/modules/m09-urgence-et-securite/)**
et **[M11](/modules/m11-protection-frequences/)**.

:::danger[Ces formulations ne se paraphrasent pas]
Elles sont convenues internationalement pour être comprises par des opérateurs
qui ne parlent pas votre langue. Un mot changé, un champ déplacé, et
l'information n'arrive pas. On les récite ; on ne les améliore pas.
:::

## Vue d'ensemble

| | Détresse | Urgence | Sécurité |
|---|---|---|---|
| Signal, trois fois | `MAYDAY` | `PAN PAN` | `SÉCURITÉ` |
| Prononciation | « m'aider » | « panne, panne » | « sécurité » |
| Motif | Danger **grave et imminent**, aide **immédiate** | Sécurité **d'un navire** ou **d'une personne** | Sécurité de la **navigation** ou **météorologie** |
| Indicatif d'appel | **épelé**, une fois | **épelé**, une fois | donné **une fois** |
| Nombre de personnes à bord | **oui** | non | non |
| Voie de dégagement | non, on reste sur la 16 | si le message est long | si le message est long |
| Répéter jusqu'à | réponse d'une station côtière **ou d'un navire** | — | accusé de réception d'une **station côtière** |
| Fin de l'exemple du manuel | « à vous » | « à vous » | « **terminé** » |

## Détresse

### Appel

| En français | En anglais |
|---|---|
| `MAYDAY, MAYDAY, MAYDAY` | `MAYDAY, MAYDAY, MAYDAY` |
| `ICI` | `THIS IS` |
| **Nom du navire**, trois fois | **Nom du navire**, trois fois |
| **Indicatif d'appel**, épelé une fois | **Indicatif d'appel**, épelé une fois |

### Message

Dans cet ordre :

1. la **position** — absolue, en coordonnées, ou relative à un point fixe
   bien connu ;
2. la **nature de la détresse** ;
3. le **type d'assistance requise** ;
4. le **nombre de personnes à bord** ;
5. les **intentions** du responsable du navire ;
6. tout **renseignement** facilitant les secours.

Le message est **répété autant de fois que possible jusqu'à réponse**.

### Accusé de réception

| En français | En anglais |
|---|---|
| `MAYDAY` | `MAYDAY` |
| **Nom du navire en détresse**, trois fois | **Nom du navire en détresse**, trois fois |
| `ICI` | `THIS IS` |
| **Nom et indicatif du navire qui répond**, une fois | idem |
| `REÇU MAYDAY` | `RECEIVED MAYDAY` |

Avant de répondre, **attendre un certain temps pour permettre à une station
côtière de répondre**.

### Relais

Émis lorsque **aucun accusé de réception n'est intervenu dans un délai de cinq
minutes**, ou lorsque le navire n'arrive pas à joindre une station côtière.

| En français | En anglais |
|---|---|
| `MAYDAY RELAY`, trois fois | `MAYDAY RELAY`, trois fois |
| `À TOUS`, trois fois | `ALL STATIONS`, trois fois |
| `ICI` | `THIS IS` |
| **Nom de la station qui relaie**, trois fois | idem |
| **Son indicatif**, une fois | idem |
| `MAYDAY`, une fois | `MAYDAY`, une fois |
| **Nom et indicatif du navire en détresse** | idem |
| **Répétition des renseignements** | idem |

### Contrôle du trafic

- `SILENCE MAYDAY` — imposé par la station qui coordonne les opérations :
  MRCC, station côtière ou unité de sauvetage.
- `SILENCE FINI` — à la fin des opérations, la fréquence redevient normale.

## Urgence

| En français | En anglais |
|---|---|
| `PAN PAN, PAN PAN, PAN PAN` | `PAN PAN, PAN PAN, PAN PAN` |
| **Station appelée**, trois fois, **ou** `À TOUS`, trois fois | **Station appelée** ×3 **ou** `ALL STATIONS` ×3 |
| `ICI` | `THIS IS` |
| **Nom du navire appelant**, trois fois | idem |
| **Indicatif d'appel**, épelé | idem |

Message, dans cet ordre : **position** · **nature de l'urgence** · **secours
demandés** · **intentions** du responsable · **renseignements** utiles.

La **consultation radiomédicale** se demande par un message d'urgence. Le
navire est ensuite mis en liaison, par une station côtière ou un CROSS, avec
le **Centre de consultation médicale maritime de Toulouse** ou un **SAMU
côtier**.

## Sécurité

| En français | En anglais |
|---|---|
| `SÉCURITÉ, SÉCURITÉ, SÉCURITÉ` | `SECURITE, SECURITE, SECURITE` |
| **Station appelée**, trois fois, **ou** `À TOUS`, trois fois | **Station appelée** ×3 **ou** `ALL STATIONS` ×3 |
| `ICI` | `THIS IS` |
| **Nom du navire**, trois fois | idem |
| **Indicatif d'appel**, une fois | idem |

Puis le danger signalé, et **« terminé »**. Le message est **répété jusqu'à
l'accusé de réception d'une station côtière**, qui se charge de retransmettre
l'information aux services diffusant les **AVURNAV**.

## Annulation d'une fausse alerte

Une fausse alerte émise par ASN doit être **annulée immédiatement par ASN** si
l'équipement le permet. **Dans tous les cas**, l'annulation est **transmise par
radiotéléphonie sur la voie 16**.

| En français | En anglais |
|---|---|
| `À TOUS, À TOUS, À TOUS` | `ALL STATIONS, ALL STATIONS, ALL STATIONS` |
| `ICI` | `THIS IS` |
| **Nom du navire**, trois fois | idem |
| **Indicatif d'appel**, une fois | idem |
| **MMSI**, si l'alerte a été émise par ASN | idem |
| `Veuillez annuler mon alerte de détresse du…` | `Please cancel my distress alert of…` |
| **Date et heure UTC de l'alerte** | idem |

Puis **rester quelques minutes en veille sur la voie 16** et répondre aux
communications concernant cette alerte.

## Appel de routine

| Étape | Contenu |
|---|---|
| Demande de liaison, généralement sur la **voie 16** | **Identification de la station appelée**, trois fois |
| | `ICI` |
| | **Identification du navire appelant**, trois fois |

On entend par **identification** : le nom du navire, l'indicatif de la
station, ou les deux à la fois. On dégage ensuite sur une voie de travail.

:::note[Ce que dit le manuel, et rien d'autre]
Toutes les séquences de cette page ont été recopiées du manuel de préparation
de l'ANFR, édition de juin 2025, et recoupées mot à mot. Aucune n'a été
reformulée pour « mieux sonner ».
:::
