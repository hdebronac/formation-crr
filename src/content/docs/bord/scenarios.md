---
title: "Scénarios"
description: "Sept situations réelles et ce qu’on émet dans chacune : homme à la mer, échouement, voie d’eau, avarie de moteur, malaise à bord, coup de vent annoncé, entrée de port."
sidebar:
  order: 3
---

**Ces pages pilotent, les modules expliquent.** Chaque scénario dit **ce qu'on
émet**, dans quel ordre, et sur quelle voie. Le pourquoi est dans le module
indiqué.

Ces situations se jouent **à quai, poste éteint**, avec l'équipage, avant de
les rencontrer en mer. Le chronomètre compte autant que les mots.

:::caution[Le tri d'abord]
Trois questions, dans cet ordre :

1. **Faut-il venir me chercher maintenant ?** → `MAYDAY`
2. **Mon bateau ou quelqu'un a un problème sérieux, sans danger immédiat ?**
   → `PAN PAN`
3. **Je préviens d'un danger qui ne me vise pas ?** → `SÉCURITÉ`

Sinon, c'est de la routine. En cas de doute entre deux rangs, **on prend le
plus élevé** : un message surclassé se déclasse, un message sous-classé se
paie.
:::

## Tableau de tri

| Situation | Signal | Voie | Module |
|---|---|---|---|
| Homme à la mer | `MAYDAY` | 16 + ASN 70 | M8, M10 |
| Échouement avec danger | `MAYDAY` | 16 + ASN 70 | M8 |
| Voie d'eau non maîtrisée | `MAYDAY` | 16 + ASN 70 | M8 |
| Voie d'eau maîtrisée à la pompe | `PAN PAN` | 16 | M9 |
| Avarie de moteur, dérive lente | `PAN PAN` | 16 | M9 |
| Malaise ou blessure à bord | `PAN PAN` | 16 | M9 |
| Objet flottant dangereux rencontré | `SÉCURITÉ` | 16 | M9, M12 |
| Coup de vent annoncé | *écoute* | 79 ou 80 | M12 |
| Entrée de port | routine | 9, ou voie du port | M2, M7 |

---

## 1. Homme à la mer

**C'est un MAYDAY.** La vie d'une personne est en jeu et l'aide doit être
immédiate.

1. **À bord d'abord** — « HOMME À LA MER », on désigne un équipier qui **ne
   quitte pas la personne des yeux**, on jette ce qui flotte, on marque la
   position sur le traceur.
2. **ASN** — bouton `DISTRESS`, appui **≥ 5 secondes**. Nature : `MAN
   OVERBOARD` si le poste le propose.
3. **Voie 16, 25 W** — `MAYDAY` ×3, `ICI`, nom ×3, indicatif épelé, puis
   position, nature, assistance, **nombre de personnes à bord**, intentions.
4. **Répéter jusqu'à réponse.** Un accusé ASN de classe D arrivera **par la
   voix sur la 16**.

> Le nombre de personnes à bord se donne **avant** et **après** : les
> sauveteurs doivent savoir combien de personnes chercher, et si l'une est à
> l'eau.

## 2. Échouement

**MAYDAY si le navire ou l'équipage est en danger** — talonnage violent,
déferlante, coque ouverte, côte sous le vent. **PAN PAN** si le bateau est
posé sans danger immédiat et que vous attendez la marée.

Renseignements utiles à donner en plus : **nature du fond**, **état de la
marée** — montante ou descendante —, **gîte**, entrée d'eau ou non.

C'est le cas type où la situation **change de rang** : un échouement calme
devient une détresse si le vent forcit. On **surclasse** sans hésiter et sans
recommencer le message précédent.

## 3. Voie d'eau

| Situation | Signal |
|---|---|
| L'eau monte, la pompe ne suffit pas | `MAYDAY` |
| La pompe tient, la voie d'eau est localisée | `PAN PAN` |
| Voie d'eau colmatée, retour au port assuré | routine, ou rien |

En ASN, la nature à sélectionner est **`FLOODING`**. En phonie, on dit **voie
d'eau**, on dit **où**, et on dit **si la pompe suit**.

## 4. Avarie de moteur

**PAN PAN** dans presque tous les cas : la sécurité du navire est en jeu, sans
danger grave et imminent.

Ce que la station côtière voudra savoir, dans cet ordre : **position**,
**nature** — moteur, gouvernail, gréement —, **secours demandés** — un
remorquage, en général —, **intentions** — mouiller, dériver, faire route à
la voile —, puis les **renseignements utiles** : tirant d'eau, nombre de
personnes, autonomie.

Cela devient un **MAYDAY** si vous dérivez vers une côte, un caillou ou un
rail de navigation.

## 5. Malaise ou blessure à bord

**PAN PAN**, et le mot à prononcer est **consultation radiomédicale**.

Le CROSS ou une station côtière vous met en liaison avec le **Centre de
consultation médicale maritime de Toulouse** ou un **SAMU côtier**. Une
**évacuation sanitaire** peut suivre.

**Préparez la fiche avant d'appeler** — c'est le livrable `radiomedicale.md`
de **[M9](/modules/m09-urgence-et-securite/)** :

| À donner | |
|---|---|
| Identité, âge, sexe | |
| Symptômes, et **depuis quand** | |
| Conscience, respiration, pouls, température | |
| Traitements en cours, allergies | |
| Contenu de la pharmacie du bord | |
| Position, route, **délai jusqu'au port** | |

Les noms de médicaments **s'épellent** (**[M5](/modules/m05-alphabet-et-vocabulaire/)**).

Si la personne perd connaissance en cours d'échange : **on passe en MAYDAY**.

## 6. Danger rencontré, coup de vent annoncé

**Vous voyez un danger** — conteneur, épave à la dérive, feu de balisage
éteint : c'est un message **`SÉCURITÉ`**, adressé à toutes les stations, sur
la voie 16, **terminé par « terminé »**. Vous le répétez **jusqu'à l'accusé de
réception d'une station côtière**, qui retransmettra aux services diffusant
les **AVURNAV**.

**Le temps se gâte** : ce n'est pas vous qui émettez, c'est vous qui écoutez.
Bulletins des CROSS sur les **voies 79 ou 80** selon la zone, à heures
précises. Un **BMS** est diffusé **dès réception** puis **répété toutes les
heures** tant qu'il est valide.

Notez le bulletin. Un bulletin entendu et non noté est un bulletin perdu.

## 7. Entrée de port

De la **routine**, mais c'est là que la plupart des plaisanciers émettent
réellement.

1. Écouter la voie du port avant d'appeler — en France, la **voie 9** est la
   plus utilisée par les ports de plaisance.
2. Appel : **nom de la capitainerie ×3**, `ICI`, **nom du bateau ×3**.
3. Message court : longueur, tirant d'eau, heure d'arrivée estimée, demande de
   place.
4. **Puissance réduite** — vous êtes à quelques centaines de mètres.

Si vous devez passer par la voie 16, **n'y restez pas** : on appelle, on
dégage sur une voie de travail. Une minute maximum
(**[M11](/modules/m11-protection-frequences/)**).

---

## Jouer les scénarios

| Scénario | Joué à quai | Joué en mer | Chronomètre | Refait en anglais |
|---|:--:|:--:|:--:|:--:|
| Homme à la mer | ☐ | ☐ | ☐ | ☐ |
| Échouement | ☐ | ☐ | ☐ | ☐ |
| Voie d'eau | ☐ | ☐ | ☐ | ☐ |
| Avarie de moteur | ☐ | ☐ | ☐ | ☐ |
| Malaise à bord | ☐ | ☐ | ☐ | ☐ |
| Danger signalé | ☐ | ☐ | ☐ | ☐ |
| Entrée de port | ☐ | ☐ | ☐ | ☐ |

:::danger[Deux personnes au moins]
Le skipper peut être la personne à l'eau, ou celle qui est blessée. Au moins
**deux personnes à bord** doivent savoir émettre un MAYDAY et annuler une
fausse alerte. Notez leurs noms dans `equipage.md`
(**[M14](/modules/m14-bachotage/)**) : c'est la seule façon de voir les trous.
:::
