---
title: "Les voies VHF"
description: "Les voies dont le manuel de préparation énonce l’usage dans son corps de texte : appel, détresse, ASN, navire-navire, opérations portuaires, météo, AIS."
sidebar:
  order: 6
---

**La référence rappelle, le module explique.** Les fréquences, la différence
simplex/duplex et le choix d'une voie de dégagement sont l'objet de
**[M3](/modules/m03-ondes-et-voies/)** et
**[M7](/modules/m07-procedures-phonie/)**.

La bande VHF du service maritime s'étend de **156 à 174 MHz**, l'essentiel des
équipements travaillant entre **156 et 162 MHz**. **57 voies** y sont
utilisées, **numérotées de 01 à 28 et de 60 à 88**.

## Les voies dont le manuel énonce l'usage

| Voie | Usage | Fréquences | Module |
|:--:|---|---|---|
| **16** | **Appel, détresse, urgence et sécurité en phonie.** Émissions réduites au minimum, jamais plus d'une minute | 156,800 MHz | M7, M8, M11 |
| **70** | **Appel sélectif numérique** — alerte, appels ASN, y compris de correspondance publique. **Jamais la voix** | 156,525 MHz | M10, M11 |
| **6** | Navire-navire ; également retenue pour les **communications sur site** de moindre importance pendant une détresse | 156,300 MHz, simplex | M3, M8 |
| **8** | Navire-navire, routine | — | M7 |
| **9** | **Opérations portuaires** — « en France la voie 9 est la plus utilisée par les ports de plaisance » | — | M2 |
| **10** et **11** | Utilisables, mais **précautions** exigées : elles peuvent brouiller la voie 70 | — | M11 |
| **72** | Navire-navire, routine — la voie de dégagement de l'exemple du manuel | — | M7 |
| **75** et **76** | **Voies de garde** encadrant la voie 16 : **non utilisées** | — | M11 |
| **77** | Navire-navire, routine | — | M7 |
| **79** | **Diffusion météo** par les CROSS, exploitation **duplex** | 156,975 et 161,575 MHz | M3, M12 |
| **80** | Diffusion météo par les CROSS, selon la zone | — | M12 |
| **AIS 1** | Système d'identification automatique | 161,975 MHz | M13 |
| **AIS 2** | Système d'identification automatique | 162,025 MHz | M13 |

## Les quatre voies de routine navire-navire

En dehors des situations de sécurité, des opérations portuaires et de la
correspondance publique, les échanges de routine de navire à navire
s'effectuent sur **quatre voies : 6, 8, 72 et 77**.

La mécanique est toujours la même : on appelle sur la **voie 16** sans trop
l'encombrer, puis on **bascule** sur l'une de ces quatre.

> Appel sur voie 16 : MARIE, MARIE – ICI JULES JULES – Me recevez-vous ? – À
> vous.
>
> Réponse sur voie 16 : JULES – ICI MARIE – Bonjour – Dégagez voie 72 – À
> vous.

## Simplex, duplex, semi-duplex

| Mode | Ce qui se passe | Exemple du manuel |
|---|---|---|
| **Simplex** | **Une seule fréquence** à l'émission et à la réception. Chacun parle à son tour | **Voie 6** — 156,300 MHz dans les deux sens |
| **Duplex** | **Deux fréquences** différentes, on émet et on reçoit en même temps, comme au téléphone | **Voie 79** — 156,975 et 161,575 MHz. L'attribution de chaque fréquence à un bout de la liaison : `[à vérifier ANFR]`, voir **M12** |
| **Semi-duplex** | Une extrémité en simplex — en général la station de navire —, l'autre en duplex — en général la station terrestre | — |

:::caution[La table complète est une annexe, et les annexes ne sont pas interrogées]
Le **tableau d'affectation des voies VHF du service mobile maritime en
France** constitue l'**annexe 2** du manuel de préparation. Le manuel est
explicite : **« L'examen ne comporte pas de questions se rapportant aux
annexes de ce manuel. »**

Cette page ne reproduit donc **que les voies dont le corps du manuel énonce
lui-même l'usage**. Pour la table complète — et elle est utile à bord —
reportez-vous à l'annexe 2 du manuel, publiée par l'ANFR.
:::

:::danger[Une carte de voies étrangère induit en erreur]
Les tableaux de voies que l'on trouve en ligne sont souvent **américains** :
ils comportent des voies **22A**, une série **WX1 à WX7** pour la météo, et
des affectations qui n'existent pas dans le cadre UIT appliqué en France.
Vérifiez toujours l'origine d'une carte de voies avant de la plastifier.

Le **fluvial** est un autre cas encore : son affectation des voies est
**complètement différente** de celle du maritime, et l'ASN y est **interdit**.
Voir [la page qui lui est consacrée](/reference/radiotelephonie-fluviale/).
:::

## Ce qui est interrogeable

Malgré l'exclusion des annexes, plusieurs faits de cette page relèvent du
corps du manuel et **peuvent tomber** :

- la voie **16** et la voie **70**, leurs rôles respectifs et leurs
  fréquences ;
- les **quatre voies** de routine navire-navire — 6, 8, 72, 77 ;
- les **voies de garde 75 et 76**, et les **précautions sur 10 et 11** ;
- le nombre de voies — **57**, numérotées 01 à 28 et 60 à 88 ;
- la distinction **simplex / duplex / semi-duplex** et ses exemples.
