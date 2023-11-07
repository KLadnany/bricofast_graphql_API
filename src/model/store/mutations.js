const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat
} = require('graphql')
const type = require('./type')
const Store = require('./store')

// Defines the mutations
module.exports = {
    addStore: {
        type,
        args: {
            name:   { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve: Store.createEntry.bind(Store)
    },
    updateStore: {
        type,
        args: {
            id:     { type: GraphQLID },
            name:   { type:new GraphQLNonNull(GraphQLString) },
        },
        resolve: Store.updateEntry.bind(Store)
    }
}