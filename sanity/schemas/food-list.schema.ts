const schema =  {
    name: 'foodList',
    type: 'document',
    title: 'Food List',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'foodList',
            type: 'array',
            title: 'Food List',
            of: [
                { type: 'reference', to: [{ type: 'food' }]}
            ]
        }
    ]
}

export default schema;