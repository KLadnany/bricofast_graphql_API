const { 
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLFloat,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} = require('graphql')

const ZoneModel = require("../zones/zones")
const Zone = require("../zones/type")

const City = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    zones: {
      type: new GraphQLList(Zone),
      resolve(parent, args) {
        return ZoneModel.findMatching({id_city: parent.id})
      }
    }
  })
});

module.exports = City;