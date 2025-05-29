import { defineField, defineType } from 'sanity';

const dualContentSection = defineType({
  name: 'dualContentSection',
  title: 'Dual Content Section',
  type: 'object',
  fields: [
    defineField({
      name: 'leftPanel',
      title: 'Left Panel',
      type: 'object',
      fields: [
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
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
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Our Story',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          initialValue: 'Toca Madera is an experience for all of your senses.',
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
      ],
    }),
    defineField({
      name: 'rightPanel',
      title: 'Right Panel',
      type: 'object',
      fields: [
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
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
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'On the Menu',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          initialValue: 'Our diverse menu is designed to offer something for everyone',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Explore Menu',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'buttonLink',
          title: 'Button Link',
          type: 'reference',
          to: [{ type: 'route' }],
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      leftTitle: 'leftPanel.title',
      rightTitle: 'rightPanel.title',
    },
    prepare({ leftTitle, rightTitle }) {
      return {
        title: 'Dual Content Section',
        subtitle: `${leftTitle ?? 'Our Story'} & ${rightTitle ?? 'On the Menu'}`,
      };
    },
  },
});

export default dualContentSection;
