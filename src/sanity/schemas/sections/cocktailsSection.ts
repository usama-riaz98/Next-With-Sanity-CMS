import { defineArrayMember, defineField, defineType } from 'sanity';

const cocktailsSection = defineType({
  name: 'cocktailsSection',
  title: 'Cocktails Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Signature Cocktails',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      initialValue: 'True craftsmanship exists in the balance between tradition and innovation.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Learn More',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'reference',
      to: [{ type: 'route' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cocktails',
      title: 'Cocktails',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'cocktail',
          fields: [
            defineField({
              name: 'name',
              title: 'Cocktail Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Cocktail Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                defineField({
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                }),
              ],
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              media: 'image',
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      cocktail0: 'cocktails.0.name',
      cocktail1: 'cocktails.1.name',
    },
    prepare({ cocktail0, cocktail1 }) {
      const cocktails = [cocktail0, cocktail1].filter(Boolean);
      const subtitle = cocktails.length > 0 ? `Cocktails: ${cocktails.join(', ')}...` : 'No cocktails';
      
      return {
        title: 'Cocktails Section',
        subtitle,
      };
    },
  },
});

export default cocktailsSection;
