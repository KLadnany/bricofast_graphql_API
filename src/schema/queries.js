const { 
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLFloat,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} = require('graphql')

const City = require("../model/cities/type")
const Zone = require("../model/zones/type")
const Job = require("../model/jobs/type")
const Ad = require("../model/ads/type")
const Profile = require("../model/profile/type")
const Review = require("../model/reviews/type")

const CityModel = require("../model/cities/cities")
const ZoneModel = require("../model/zones/zones")
const JobModel = require("../model/jobs/jobs")
const AdModel = require("../model/ads/ads")
const ProfileModel = require("../model/profile/profile")
const ReviewModel = require("../model/reviews/reviews")

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    jobs: {
      type: new GraphQLList(Job),
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        return JobModel.findMatching(args)
      }
    },
    city: {
      type: City,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(parent, args) {
        return CityModel.getByID(args)
      }
    },
    cities: {
      type: new GraphQLList(City),
      resolve(parent, args) {
        return CityModel.findMatching(args)
      }
    },
    zones: {
      type: new GraphQLList(Zone),
      args: {
        id_city: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(parent, args) {
        return ZoneModel.findMatching(args)
      }
    },
    reviews: {
      type: new GraphQLList(Review),
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        return ReviewModel.findMatching(args)
      }
    },
    ads: {
      type: new GraphQLList(Ad),
      args: {
        id: {
          type: GraphQLID
        },
        active: {
          type: GraphQLID
        },
        id_profile: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        return AdModel.findMatching(args, 5)
      }
    },
    profiles: {
      type: new GraphQLList(Profile),
      args: {
        id: {
          type: GraphQLID
        },
        active: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        return ProfileModel.findMatching(args, 20, {by: 'id', direction: 'desc'})
      }
    }
  })
});

module.exports = Query;