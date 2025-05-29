import { defineArrayMember, defineField, defineType } from 'sanity';

const instagramSection = defineType({
  name: 'instagramSection',
  title: 'Instagram Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'INSTAGRAM',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      initialValue: 'Unlock exclusive experiences and insider moments.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'instagramHandle',
      title: 'Instagram Handle',
      type: 'string',
      initialValue: '@tocamadera',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Instagram Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'instagramImage',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
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
              name: 'link',
              title: 'Instagram Link',
              type: 'url',
              validation: (Rule) => Rule.uri({
                scheme: ['http', 'https']
              }),
            }),
          ],
          preview: {
            select: {
              media: 'image',
              title: 'image.alt',
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
      subtitle: 'instagramHandle',
    },
    prepare({ subtitle }) {
      return {
        title: 'Instagram Gallery Section',
        subtitle: subtitle ?? '@tocamadera',
      };
    },
  },
});

export default instagramSection;
