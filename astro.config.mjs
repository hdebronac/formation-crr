// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // Domaine personnalisé : `public/CNAME` est publié tel quel par GitHub
  // Pages. Pas de `base` — le site est servi à la racine du domaine.
  site: 'https://crr.bronac.net',
  trailingSlash: 'ignore',

  integrations: [
    starlight({
      title: 'Formation CRR',
      description:
        "Programme d'auto-formation au certificat restreint de radiotéléphoniste du service mobile maritime (CRR), aligné sur le manuel ANFR V16.",
      defaultLocale: 'root',
      locales: {
        root: { label: 'Français', lang: 'fr' },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/hdebronac/formation-crr',
        },
      ],
      // Les modules sont déclarés manuellement (pas d'`autogenerate`) pour
      // porter des libellés courts distincts des titres de page. Les groupes
      // portent le nom des épreuves de l'examen : la structure de l'épreuve
      // est ainsi visible dès la navigation.
      sidebar: [
        {
          label: 'Démarrer',
          items: [
            { label: 'Bienvenue', link: '/' },
            { label: 'Comment travailler', slug: 'meta/methode' },
            { label: "L'examen en bref", slug: 'meta/examen' },
            { label: 'Ressources', slug: 'meta/ressources' },
            { label: 'Crédits des illustrations', slug: 'meta/credits' },
          ],
        },
        {
          label: 'Épreuve A — Généralités',
          collapsed: false,
          items: [
            { label: 'M0 · Cadre, examen et méthode', slug: 'modules/m00-cadre-et-examen' },
            { label: 'M1 · Cadre réglementaire', slug: 'modules/m01-cadre-reglementaire' },
            { label: 'M2 · Communications et stations', slug: 'modules/m02-communications-et-stations' },
            { label: 'M3 · Ondes, fréquences et voies', slug: 'modules/m03-ondes-et-voies' },
            { label: 'M4 · Le SMDSM', slug: 'modules/m04-smdsm' },
            { label: 'M5 · Alphabet et vocabulaire', slug: 'modules/m05-alphabet-et-vocabulaire' },
          ],
        },
        {
          label: 'Épreuve B — Radiotéléphonie VHF',
          collapsed: true,
          items: [
            { label: 'M6 · La VHF en main', slug: 'modules/m06-vhf-en-main' },
            { label: "M7 · Procédures d'exploitation", slug: 'modules/m07-procedures-phonie' },
            { label: 'M8 · Détresse en phonie', slug: 'modules/m08-detresse-phonie' },
            { label: 'M9 · Urgence et sécurité', slug: 'modules/m09-urgence-et-securite' },
          ],
        },
        {
          label: 'Épreuve C — VHF ASN et SMDSM',
          collapsed: true,
          items: [
            { label: "M10 · L'appel sélectif numérique", slug: 'modules/m10-asn' },
            { label: 'M11 · Protection des fréquences', slug: 'modules/m11-protection-frequences' },
            { label: 'M12 · Sécurité maritime (RSM)', slug: 'modules/m12-rsm' },
            { label: "M13 · Signaux d'alerte", slug: 'modules/m13-signaux-alerte' },
          ],
        },
        {
          label: 'Bachotage',
          collapsed: true,
          items: [
            { label: 'M14 · Examens blancs', slug: 'modules/m14-bachotage' },
          ],
        },
        {
          label: 'À bord',
          collapsed: true,
          items: [{ autogenerate: { directory: 'bord' } }],
        },
        {
          label: 'Référence',
          collapsed: true,
          items: [{ autogenerate: { directory: 'reference' } }],
        },
      ],
    }),
  ],
});
