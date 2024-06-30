module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enable: true,
      origin: ['https://booking-ruby-nine.vercel.app/', 'https://booking-5tvt7h05z-chrizzo2s-projects.vercel.app/']
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
