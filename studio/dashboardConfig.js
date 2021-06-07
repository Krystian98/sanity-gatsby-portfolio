export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60be53922e76d47cf8e2a642',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-osmiho97',
                  apiId: '6fab4709-a052-4e3b-9f51-f9e6db74b11e'
                },
                {
                  buildHookId: '60be539380fddf009dcfb520',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1d5sc7aw',
                  apiId: '8b85b1b6-9088-4d9b-a1e1-b602c47f456f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Krystian98/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1d5sc7aw.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
