export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'credit',
      type: 'string',
      title: 'Credit',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'story',
      type: 'text',
      title: 'Story',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'title'
    }
  }
}
