export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6159af7019ab3e23cafde8b7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1b2x8np5',
                  apiId: '84f3ace7-9b09-45a9-937f-3ec74bad472b'
                },
                {
                  buildHookId: '6159af72bb69fc7ebf48db0e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xc2fhbov',
                  apiId: '84e3ada2-60c1-4cc5-b2c2-79798c5d76cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/armanomar82/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xc2fhbov.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
