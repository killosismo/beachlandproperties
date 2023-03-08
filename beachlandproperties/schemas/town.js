export default {
    name: 'town',
    title: 'Town',
    type:'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type:'string',
        },
        {
          name: 'url',
          title: 'Url',
          type:'url',
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },    

        {
            name: 'properties',
            title: 'Properties',
            type:'array',
            of:[{type: "reference", to: { type: "property"} }],
          },
        
    ]
}