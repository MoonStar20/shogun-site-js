export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d2356f8a4cbf9e92eba5607',
                  title: 'Sanity Studio',
                  name: 'shogun-site-js-studio',
                  apiId: '13030e41-547c-41eb-a387-3357a1a68c38'
                },
                {
                  buildHookId: '5d2356f8b8ccf2562b6cedb4',
                  title: 'Blog Website',
                  name: 'shogun-site-js',
                  apiId: 'ef3ee790-437e-45d7-96c5-52288523969c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MoonStar20/shogun-site-js',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://shogun-site-js.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
