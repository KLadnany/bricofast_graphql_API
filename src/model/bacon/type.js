let {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList
} = require('graphql')

const Store = require('../store/type')
console.log(Store)
const storeQueries = require('../store/queries')

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'Bacon',
    description: 'A bacon',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        type: {
            type: new GraphQLNonNull(GraphQLString)
        },
        price: {
            type: new GraphQLNonNull(GraphQLFloat)
        },
        store_id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        store: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: () => "Hello GraphQl"
        }
    }
})