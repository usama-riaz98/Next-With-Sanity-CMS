import { defineField, defineType } from 'sanity';

const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
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
      name: 'headingTop',
      title: 'Top Heading',
      type: 'string',
      initialValue: 'Modern',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headingMiddle',
      title: 'Middle Heading',
      type: 'string',
      initialValue: 'Mexican',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headingBottom',
      title: 'Bottom Heading',
      type: 'string',
      initialValue: 'Steakhouse',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'headingTop',
      subtitle: 'headingMiddle',
      media: 'backgroundImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: `Hero Section: ${title} ${subtitle}`,
        media,
      };
    },
  },
});

export default heroSection;
