export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eab0f1903b74169f5866991',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jswwhb1w',
                  apiId: '8030c30a-8e85-42d2-9b16-fa71a260d28a'
                },
                {
                  buildHookId: '5eab0f19fcf6e1eb012ba9b4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fjpkprnx',
                  apiId: '8dda06bd-3185-4fdd-b227-af0510e99ccd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Oyru/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fjpkprnx.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
