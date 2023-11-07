const { 
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLFloat,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} = require('graphql')

const Zone = new GraphQLObjectType({
  name: 'Zone',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    city_id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    }
  })
});

module.exports = Zone;