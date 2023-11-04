const schema =  {
    name: 'food',
    type: 'document',
    title: 'Food',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            require,
            validation: (Rule: any) => Rule.required()
        }, 
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: { source: 'name' }
        },
        {
            name: 'image', 
            type: 'image',
            title: 'Food Image',
            require,            
            validation: (Rule: any) => Rule.required(),
            options: {
                hotspot: true       
            }
        },
        {
            name: 'ingredients',
            type: 'string',
            title: 'Ingredients'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price',
            require,
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'price_id',
            type: 'string',
            title: 'Stripe Price ID'
        },
        {
            name: 'category',
            type: 'string',
            title: 'Category',
            validation: (Rule: any) => Rule.required(),
            options: {
                list: ['starters', 'beef specialities']       
            }
        }
    ]
}

export default schema;