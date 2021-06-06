import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Splace', // e.g: 'Name | Developer'
  lang: 'cat', // e.g: en, es, fr, jp
  description: 'Benvingut a Splace', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Splace',
  name: '',
  subtitle: 'The safe place to be',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Splace és una eina que ajuda a les pàgines web a certificar la seva autenticitat a la xarxa. Nascuda al 2021, és el resultat d’un estudi que analitzat el mercat i les actuals tendències. S’ha desenvolupat per ajudar als usuaris a sentir-se segurs quan naveguen per internet.',
  paragraphTwo:
    'El ràpid accés i implementació de la etiqueta fa que es converteixi en una opció a tenir en compete a l’hora d’aportar confiança a les pàgines web',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

export const about2Data = {
  img: 'profile.jpg',
  paragraphOne:
    'Al obtindre la certificació s’enviaràn per correu l’etiqueta i l’avís de Splace mitjançant el correu electrònic. L’etiqueta vindrà amb unes intruccions de col·locació senzilles que hauran de ser seguits.',
  paragraphTwo:
    'Apart, també es fàcilitarà una url que podrà ser inserida a la pàgina web per mostrar que la pàgina està certificada el primer cop que els usuaris la visitin.',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

export const about3Data = {
  img: 'profile.jpg',
  paragraphOne:
    'Per obtindre la certificació, s’ha de complir uns criteris d’admissió, aquests estan recollits al codi ètic de Splace. Apart, s’haurà d’omplir un formulari en la següent seccion amb les dades necessaris per fer l’avaluació completa i identificar-te.',
  paragraphTwo:
    'Un cop omplis les dades i llegexis les condicions d’entrada, es durà a terme una avaluació comprovant qwue es compleixen totes les normes de Splace.',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: 'Al obtindre la certificació s’enviaràn per correu l’etiqueta i l’avís de Splace mitjançant el correu electrònic. L’quetiqueta vindrà amb unes intruccions de col·locació senzill que hauran de ser seguits. Apart, com també es fàcilitarà una url que podrà ser inserida a la pàgina web per mostrar que la pàgina està certificada el primer cop que la visitin',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Marc Sánchez Garcia',
  btn: "Envia'm un correu!",
  email: 'marc.sanchez08@estudiant.upf.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
