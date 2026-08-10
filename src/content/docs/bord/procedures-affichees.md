---
title: "Les procédures affichées"
description: "Les cartes de cockpit prêtes à imprimer et à plastifier : détresse, ASN, urgence, sécurité, annulation d’une fausse alerte et essai radio."
sidebar:
  order: 2
---

**Ces pages pilotent, les modules expliquent.** Ce qui suit s'imprime, se
plastifie et se fixe. Le pourquoi de chaque ligne est dans le module indiqué.

Les blocs sont calibrés pour une **carte de cockpit**, pas une feuille A4 :
étroits, en majuscules pour les rubriques, lisibles à bout de bras et par
mauvais temps.

:::danger[Remplissez les champs avant d'imprimer]
Les valeurs entre chevrons — `<NOM DU NAVIRE>`, `<INDICATIF>`, `<MMSI>` —
doivent être **remplacées par celles de votre licence** avant impression. Une
carte générique ne sert à rien le jour où il faut la lire à voix haute en
tremblant.

Les exemples ci-dessous portent l'identité **fictive** d'ALIZÉ.
:::

## Où va chaque carte

| Carte | Emplacement | Module |
|---|---|---|
| Détresse — phonie et ASN | **À la VHF**, face visible | M8, M10 |
| Urgence et sécurité | À la VHF, au dos de la précédente | M9 |
| Annulation d'une fausse alerte | **Au dos de la carte détresse** | M11 |
| Essai radio | Table à cartes | M11 |
| Météo et RSM | Table à cartes | M12 |
| Balises et abandon | **Dans le sac de survie** | M13 |

## Carte 1 — Détresse

```
DÉTRESSE — VOIE 16                      ALIZÉ · FH 2827
========================================================
DANGER GRAVE ET IMMINENT · AIDE IMMÉDIATE
EN CAS DE DOUTE, ON ALERTE.

1. ASN D'ABORD  — bouton rouge sous capot
   APPUI ≥ 5 SECONDES
   → l'alerte part 5 FOIS sur la VOIE 70
   → elle se RENOUVELLE toutes les 4 MINUTES
   → CLASSE D : l'accusé de réception arrive
     PAR LA VOIX SUR LA 16

2. PUIS LA VOIX — VOIE 16, PUISSANCE 25 W

   MAYDAY, MAYDAY, MAYDAY
   ICI                        / THIS IS
   ALIZÉ, ALIZÉ, ALIZÉ
   FOXTROT HOTEL DEUX HUIT DEUX SEPT   (épelé, 1 fois)

   MAYDAY  ALIZÉ  FH 2827

   1. POSITION ....................................
      (coordonnées, ou relative à un point connu)
   2. NATURE DE LA DÉTRESSE .......................
   3. ASSISTANCE DEMANDÉE .........................
   4. NOMBRE DE PERSONNES À BORD ..................
   5. INTENTIONS ..................................
   6. AUTRES RENSEIGNEMENTS .......................
   À VOUS / OVER

   RÉPÉTER autant de fois que possible
   JUSQU'À RÉPONSE.

--------------------------------------------------------
J'ENTENDS UN MAYDAY
--------------------------------------------------------
  1. CESSER TOUTE ÉMISSION · RESTER EN VEILLE 16
  2. NOTER : nom · position · nature · personnes
  3. LAISSER À UNE STATION CÔTIÈRE LE TEMPS
     DE RÉPONDRE
  4. Personne n'a répondu → J'ACCUSE RÉCEPTION :
       MAYDAY
       <NAVIRE EN DÉTRESSE> x3
       ICI  ALIZÉ, ALIZÉ, ALIZÉ  FH 2827
       REÇU MAYDAY / RECEIVED MAYDAY
  5. Toujours rien après 5 MINUTES → MAYDAY RELAY :
       MAYDAY RELAY x3 · À TOUS x3 / ALL STATIONS
       ICI · ALIZÉ x3 · FH 2827 (1 fois)
       MAYDAY (1 fois) · <navire> · ses renseignements

  SILENCE MAYDAY .. imposé par qui coordonne
  SILENCE FINI .... fin des opérations
```

Le détail est en **[M8](/modules/m08-detresse-phonie/)** et
**[M10](/modules/m10-asn/)**.

## Carte 2 — Urgence et sécurité

```
URGENCE & SÉCURITÉ — VOIE 16            ALIZÉ · FH 2827
========================================================
QUEL SIGNAL ?
  Venir me chercher MAINTENANT ? ....... MAYDAY
  Mon bateau ou quelqu'un, sérieux ..... PAN PAN
  Je préviens d'un danger .............. SÉCURITÉ

--------------------------------------------------------
URGENCE — PAN PAN            (dire « panne, panne »)
--------------------------------------------------------
  PAN PAN, PAN PAN, PAN PAN
  <STATION> x3  OU  À TOUS x3 / ALL STATIONS
  ICI                        / THIS IS
  ALIZÉ, ALIZÉ, ALIZÉ
  FOXTROT HOTEL DEUX HUIT DEUX SEPT   (épelé)

  1. POSITION ....................................
  2. NATURE DE L'URGENCE .........................
  3. SECOURS DEMANDÉS ............................
  4. INTENTIONS ..................................
  5. RENSEIGNEMENTS UTILES .......................
  À VOUS / OVER

  Message long → VOIE DE DÉGAGEMENT annoncée sur la 16

  CONSULTATION RADIOMÉDICALE = un PAN PAN
    → mise en liaison par une station côtière
      ou un CROSS avec le CCMM DE TOULOUSE
      ou un SAMU CÔTIER
    → fiche médicale : voir dossier radio M9
    Ça s'aggrave → ON PASSE EN MAYDAY.

--------------------------------------------------------
SÉCURITÉ                        (dire « sécurité »)
--------------------------------------------------------
  SÉCURITÉ, SÉCURITÉ, SÉCURITÉ
  À TOUS x3                  / ALL STATIONS x3
  ICI                        / THIS IS
  ALIZÉ, ALIZÉ, ALIZÉ
  FH 2827                              (une seule fois)

  → le danger : ...................................
  TERMINÉ / OUT            ← et NON « à vous »

  RÉPÉTER jusqu'à l'ACCUSÉ DE RÉCEPTION
  D'UNE STATION CÔTIÈRE.

--------------------------------------------------------
  indicatif  ÉPELÉ en détresse et urgence · x1 en sécurité
  fin        « à vous » en urgence · « TERMINÉ » en sécurité
```

Le détail est en **[M9](/modules/m09-urgence-et-securite/)**.

## Carte 3 — Annulation d'une fausse alerte

À coller **au dos de la carte détresse** : c'est au moment où l'alerte vient
de partir qu'on a besoin de savoir l'annuler.

```
FAUSSE ALERTE — ANNULATION              ALIZÉ · FH 2827
========================================================
CE N'EST PAS UNE FAUTE HONTEUSE.
C'EST UNE PROCÉDURE NORMALE. ON LA DÉROULE.

1. PAR ASN si le poste le permet — immédiatement
2. DANS TOUS LES CAS, À LA VOIX SUR LA VOIE 16 :

   À TOUS, À TOUS, À TOUS   / ALL STATIONS x3
   ICI                      / THIS IS
   ALIZÉ, ALIZÉ, ALIZÉ
   FOXTROT HOTEL DEUX HUIT DEUX SEPT   (une fois)
   MMSI DEUX DEUX SEPT UN TROIS DEUX UN DEUX ZÉRO

   VEUILLEZ ANNULER MON ALERTE DE DÉTRESSE DU
   <DATE> À <HEURE UTC DE L'ALERTE>
   / Please cancel my distress alert of ...

3. RESTER QUELQUES MINUTES EN VEILLE SUR LA 16
   et RÉPONDRE si le CROSS rappelle.

L'HEURE À DONNER EST CELLE DE L'ALERTE,
PAS CELLE DE L'ANNULATION.
  → la relever tout de suite, ou dans
    l'historique des appels de la VHF.

Le CROSS ne passe pas ? TÉLÉPHONE : 196
  ou CROSS de la zone : .........................
```

Le détail est en **[M11](/modules/m11-protection-frequences/)**.

## Carte 4 — Essai radio

```
ESSAI RADIO                             ALIZÉ · FH 2827
========================================================
AVANT TOUTE ÉMISSION
  1. ÉCOUTER la voie envisagée
  2. S'assurer qu'AUCUNE DÉTRESSE n'est en cours
  3. S'assurer que la station appelée
     N'EST PAS DÉJÀ EN COMMUNICATION

EN PHONIE
  Voie 16 : nombre et durée AU MINIMUM
  PUISSANCE RÉDUITE (1 W)
  Émission ≤ 1 MINUTE

EN ASN
  a) AUTOTEST du poste — n'émet RIEN
  b) ou essai réel vers une autre station :
       menu type d'appel .... INDIVIDUAL
       MMSI ................. <celui du correspondant>
       catégorie ............ ROUTINE

JAMAIS LE BOUTON ROUGE POUR « ESSAYER ».
Fausse alerte → carte ANNULATION.

NOTER L'ESSAI : date ........ résultat ...........
```

Le détail est en **[M11](/modules/m11-protection-frequences/)**.

## Carte 5 — Météo et renseignements de sécurité

```
MÉTÉO & RSM                             ALIZÉ · FH 2827
========================================================
BULLETINS DES CROSS — VHF
  MA ZONE : CROSS ...............  VOIE 79 / 80
  HORAIRES : ......................................
  (à relever auprès du CROSS — ce site ne les invente pas)

  BMR  bulletin RÉGULIER ..... à heures fixes
  BMS  bulletin SPÉCIAL ...... dès réception,
       puis TOUTES LES HEURES tant qu'il est valide
       (coup de vent > 7 BEAUFORT, zone des 20 milles)

  Émetteur en panne → relais par les SÉMAPHORES

À NOTER À CHAQUE ÉCOUTE
  vent ......  mer ......  visibilité ......
  évolution ......  avis en cours ......
  validité ......

JE SIGNALE UN DANGER → message SÉCURITÉ (carte 2)
  la station côtière retransmet aux services
  qui diffusent les AVURNAV.

CROSS PAR TÉLÉPHONE : 196
```

Le détail est en **[M12](/modules/m12-rsm/)**.

## Carte 6 — Balises et abandon

À ranger **dans le sac de survie**, avec la carte détresse.

```
BALISES & ABANDON                       ALIZÉ · FH 2827
========================================================
ORDRE À L'ABANDON
  1. MAYDAY   voie 16 + ASN        (carte détresse)
  2. BALISE   déclenchée et EMPORTÉE
  3. SAC de survie
  4. RADEAU
  5. SART / AIS-SART hissé LE PLUS HAUT POSSIBLE
  6. VHF PORTATIVE dans le sac, pas sur la table

BALISE DE SURVIE : MANUELLE.
  Elle ne part pas toute seule. SI PERSONNE NE LA
  PREND, ELLE COULE AVEC LE BATEAU.
BALISE DE PONT : largueur hydrostatique,
  éjectée à MOINS DE 4 M de profondeur.

FRÉQUENCES
  406 MHz .... alerte + localisation par satellite
  121,5 MHz .. radioralliement, approche finale
  AIS-SART ... voies AIS, ≥ 96 heures
  SART ....... répond aux radars 9200-9500 MHz
               DOUZE TRAITS sur l'écran · 5 à 10 milles

QUI FAIT QUOI À BORD
  Balise ....... .........................
  Sac .......... .........................
  Radeau ....... .........................
  VHF portative  .........................

CES ÉQUIPEMENTS SERVENT À ÊTRE SECOURU.
Ils ne remplacent ni la veille, ni le gilet,
ni le plan de navigation.
```

Le détail est en **[M13](/modules/m13-signaux-alerte/)**.

## Contrôle d'affichage

| Carte | Imprimée | Plastifiée | Fixée à sa place | Champs remplis |
|---|:--:|:--:|:--:|:--:|
| 1 — Détresse | ☐ | ☐ | ☐ | ☐ |
| 2 — Urgence et sécurité | ☐ | ☐ | ☐ | ☐ |
| 3 — Annulation | ☐ | ☐ | ☐ | ☐ |
| 4 — Essai radio | ☐ | ☐ | ☐ | ☐ |
| 5 — Météo et RSM | ☐ | ☐ | ☐ | ☐ |
| 6 — Balises et abandon | ☐ | ☐ | ☐ | ☐ |

Une carte imprimée mais rangée dans un tiroir ne compte pas.
