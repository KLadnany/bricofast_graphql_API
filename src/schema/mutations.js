const { GraphQLObjectType } = require('graphql')
const baconMutation = require('../model/bacon/mutations')
const storeMutation = require('../model/store/mutations')

module.exports = new GraphQLObjectType({
    name: 'RootMutationsType',
    fields: {
        addBacon: baconMutation.addBacon,
        updateBacon: baconMutation.updateBacon,

        addStore: storeMutation.addStore,
        updateStore: storeMutation.updateStore
    }
})