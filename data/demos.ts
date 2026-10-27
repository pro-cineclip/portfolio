export type DemoImage = {
  src: string;
  alt: string;
};

export type DemoAdmin = {
  /** Comment ouvrir la page admin. */
  access: string;
  /** Comment s'en servir. */
  usage: string;
  identifiant: string;
  motDePasse: string;
};

export type Demo = {
  slug: string;
  name: string;
  description: string;
  url: string;
  images: DemoImage[];
  /** Optionnel : si présent, la vignette affiche le bouton « Page Admin ». */
  admin?: DemoAdmin;
};

export type DemoCategory = {
  id: string;
  title: string;
  description: string;
  demos: Demo[];
};

/*
 * Pour ajouter une spécialité : ajouter un objet à `demoCategories`.
 * Pour ajouter une démo : ajouter un objet dans le tableau `demos` de sa catégorie,
 * et déposer ses captures dans `public/demos/<slug>/`.
 * La page, la navigation par ancres et les vignettes se mettent à jour toutes seules.
 */
export const demoCategories: DemoCategory[] = [
  {
    id: "agences-immobilieres",
    title: "Agences immobilières",
    description:
      "Des sites qui mettent les biens en valeur et rassurent les acheteurs comme les vendeurs.",
    demos: [
      {
        slug: "lechat-immobilier",
        name: "LeChat Immobilier",
        description:
          "Une agence haut de gamme avec une page d'accueil immersive et un menu latéral plein écran pour accéder en un clic à l'achat, la location, l'estimation, l'équipe et le contact. Les biens sont présentés sous forme de cartes (prix, localisation, pièces, surfaces), avec une page dédiée à l'équipe.",
        url: "https://lechat-immobilier-demo.onrender.com",
        admin: {
          access:
            "Ajoutez /admin.html à la fin de l'adresse du site de démo : vous arrivez sur la page de connexion.",
          usage:
            "Une fois connecté, vous pouvez gérer les annonces, l'équipe, les mentions légales et les informations de l'agence. Les modifications apparaissent sur le site, puis tout est remis à zéro chaque nuit.",
          identifiant: "Maître-Admin_013",
          motDePasse: "4dmInistratoR12#17*",
        },
        images: [
          {
            src: "/demos/lechat-immobilier/1.webp",
            alt: "Page d'accueil de LeChat Immobilier avec son menu latéral",
          },
          {
            src: "/demos/lechat-immobilier/2.webp",
            alt: "Liste des biens à vendre sous forme de cartes",
          },
          {
            src: "/demos/lechat-immobilier/3.webp",
            alt: "Page de présentation de l'équipe de l'agence",
          },
        ],
      },
      {
        slug: "anthem-immobilier",
        name: "Anthem Immobilier",
        description:
          "Une agence immobilière complète avec un bandeau vidéo plein écran, une sélection de biens « Coups de Cœur » mise en avant dès l'accueil, et une présentation d'équipe avec fiches individuelles par conseiller. Chaque annonce dispose d'une galerie photo au swipe tactile et d'un formulaire de visite relié directement au conseiller concerné.",
        url: "https://anthem-immobilier.onrender.com",
        admin: {
          access:
            "Ajoutez /admin.html à la fin de l'adresse du site de démo : vous arrivez sur la page de connexion.",
          usage:
            "Une fois connecté, vous pouvez gérer les annonces, l'équipe, les agences, les mentions légales et les textes du site. Les modifications apparaissent sur le site, puis tout est remis à zéro chaque nuit.",
          identifiant: "Maître-Admin_014",
          motDePasse: "D3mo-4nthem-2026!",
        },
        images: [
          {
            src: "/demos/anthem-immobilier/1.webp",
            alt: "Page d'accueil d'Anthem Immobilier avec son bandeau vidéo plein écran",
          },
          {
            src: "/demos/anthem-immobilier/2.webp",
            alt: "Sélection de biens à vendre sous forme de cartes",
          },
          {
            src: "/demos/anthem-immobilier/3.webp",
            alt: "Page de présentation de l'équipe de l'agence",
          },
        ],
      },
    ],
  },
  {
    id: "salons-de-coiffure",
    title: "Salons de coiffure",
    description:
      "Des sites qui donnent envie de pousser la porte du salon et simplifient la prise de rendez-vous.",
    demos: [
      {
        slug: "maison-loiseau",
        name: "Maison L'oiseau",
        description:
          "Un salon intimiste présenté dès l'accueil par une grande photo d'ambiance et un bouton de réservation toujours visible. Les prestations (coupes, coloration, extensions, soins) sont mises en scène dans des carrousels animés à faire défiler.",
        url: "https://maison-loiseau.onrender.com",
        admin: {
          access:
            "Ajoutez /admin à la fin de l'adresse du site de démo : vous arrivez sur la page de connexion.",
          usage:
            "Une fois connecté, vous accédez à l'interface de gestion du site, qui permet d'en modifier le contenu sans toucher au code. Les modifications apparaissent directement sur le site de démo, puis tout est réinitialisé chaque jour.",
          identifiant: "AdminOiseau-12",
          motDePasse: "MaîtreOiseau-12*",
        },
        images: [
          {
            src: "/demos/maison-loiseau/1.webp",
            alt: "Page d'accueil de Maison L'oiseau avec le salon en arrière-plan",
          },
          {
            src: "/demos/maison-loiseau/2.webp",
            alt: "Présentation de la prestation coupe femme en pile de photos",
          },
          {
            src: "/demos/maison-loiseau/3.webp",
            alt: "Carrousel des prestations : coupe homme, balayage, extensions, soins",
          },
        ],
      },
    ],
  },
];
