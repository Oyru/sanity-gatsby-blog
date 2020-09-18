export default {
  name: 'frontPage',
  type: 'document',
  title: 'Front Page',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'text',
      title: 'Title',
      validation: Rule => Rule.required().max(10)
    },
    {
      name: 'links',
      type: 'array',
      title: 'Page links',
      of: [{ type: 'string' }]
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{ type: 'mainImage' }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
