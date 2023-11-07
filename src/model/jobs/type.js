const { 
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} = require('graphql')

const Job = new GraphQLObjectType({
  name: 'Job',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    }
  })
});

module.exports = Job;