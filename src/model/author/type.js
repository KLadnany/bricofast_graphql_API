const { 
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = require('graphql')


const Author = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    first_name:{type: GraphQLString},
    last_name:{type: GraphQLString},
    avatar:{type: GraphQLString}
  })
});

module.exports = Author;