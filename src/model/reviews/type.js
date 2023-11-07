const { 
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLFloat,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} = require('graphql')
  
const AuthorModel = require("../author/author")
const Author = require("../author/type")

const Review = new GraphQLObjectType({  
    name: 'Review',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        id_profile: {
            type: GraphQLID
        },
        id_user: {
            type: GraphQLID
        },
        author: {
            type: Author,
            resolve(parent, args) {
                return AuthorModel.getByID({id: parent.id_user})
            }
        },
        comment: {
            type: GraphQLString
        },
        note: {
            type: GraphQLFloat
        },
        date: {
            type: GraphQLString
        },
        active: {
            type: GraphQLID
        }
    })
});

module.exports = Review;