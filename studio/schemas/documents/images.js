export default {
  name: 'images',
  type: 'document',
  title: 'Images',
  fields: [
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    }
  }
}
