export default {
    name: 'property',
    title: 'Property',
    type:'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type:'string',
        },
        {
          name: 'price',
          title: 'Price starting at',
          type: 'string',
        },
        {
          name: 'bedrooms',
          title: 'Bedrooms',
          type: 'number',
        },
        {
          name: 'bathrooms',
          title: 'Bathrooms',
          type: 'number',
        },
        {
            name: 'location',
            title: 'Location',
            type:'geopoint',
        },
        
        {
            name: 'propertyType',
            title: 'Property Type',
            type: 'string',
            options:{
                list: [
                  { title: 'Residential apartment', value: 'Apartment' },
                  { title: 'Apartment Condo-Hotel', value: 'Condo-hotel' },
                  { title: 'Individual houses (Villas)', value: 'Villa' },
                  { title: 'Duplex houses', value: 'Duplex' },
                  { title: 'Land', value: 'Land' },
                  { title: 'Commercial premises', value: 'Commercial' },
                ],
                layout: 'radio'
                
            }
        },
        {
          name: 'ft',
          title: 'Square FT',
          type:'number',
        },
        {
        name: 'mt',
        title: 'Square MT',
        type:'number',
        },
        {
          title: 'Delivery date',
          name: 'delDate',
          type: 'date'
        },
        {
          name: 'reserve',
          title: 'Reserve',
          type:'number',
          },
        {
          title: 'Appliances (linea blanca)',
          name: 'appliances',
          type: 'string',
          options:{
            list: [
                { title: 'Yes', value: 'Yes' },
                { title: 'No', value: 'No' },
                
            ],
            
                layout: 'radio'
            
            
        }
        },
        {
          title: 'Furnished',
          name: 'furnished',
          type: 'string',
          options:{
            list: [
                { title: 'Yes', value: 'Yes' },
                { title: 'No', value: 'No' },
                
            ],
            
                layout: 'radio'}
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
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'propertyImage' }],
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 100,
            },
          },
          {
            name: 'description',
            title: 'Description',
            type: 'string',
          },
          {
            name: 'content',
            type: 'blockContent',
            title: 'Content',
          },
          
          {
            name: 'seller',
            title: 'Seller',
            type: 'seller',
          },
    ]
}