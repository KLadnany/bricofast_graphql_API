const { GraphQLList,
        GraphQLID,
        GraphQLString,
        GraphQLFloat } = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const Store = require("./store")

// Defines the queries
module.exports = {
    stores: {
        type: new GraphQLList(type),
        args: {
            id: {
                type: GraphQLID
            },
            name: {
                type: GraphQLString
            }
        },
        resolve: Store.findMatching.bind(Store)
    },
    store: {
        type,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: Store.getByID.bind(Store)
    }
}