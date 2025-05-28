import { defineField, defineType } from 'sanity';

const tocaTuesdaySection = defineType({
  name: 'tocaTuesdaySection',
  title: 'Toca Tuesday Section',
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
      initialValue: 'TOCA TUESDAY',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      initialValue: 'Elevate Tuesdays with signature tacos, cocktails, and live entertainment.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'LEARN MORE',
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
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'backgroundImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Toca Tuesday Section',
        subtitle: subtitle,
        media,
      };
    },
  },
});

export default tocaTuesdaySection;
