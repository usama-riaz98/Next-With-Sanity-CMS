import { defineArrayMember, defineField, defineType } from 'sanity';

const locationsSection = defineType({
  name: 'locationsSection',
  title: 'Locations Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Experience',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'location',
          fields: [
            defineField({
              name: 'name',
              title: 'Location Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
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
          preview: {
            select: {
              title: 'name',
              media: 'backgroundImage',
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
      location0: 'locations.0.name',
      location1: 'locations.1.name',
      location2: 'locations.2.name',
    },
    prepare({ location0, location1, location2 }) {
      const locations = [location0, location1, location2].filter(Boolean);
      const subtitle = locations.length > 0 ? `Locations: ${locations.join(', ')}` : 'No locations';
      
      return {
        title: 'Locations Section',
        subtitle,
      };
    },
  },
});

export default locationsSection;
