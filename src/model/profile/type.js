const { 
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = require('graphql')

const CityModel = require("../cities/cities")
const City = require("../cities/type")

const ZoneModel = require("../zones/zones")
const Zone = require("../zones/type")

const JobModel = require("../jobs/jobs")
const Job = require("../jobs/type")

const ReviewModel = require("../reviews/reviews")
const Review = require("../reviews/type")

const Profile = new GraphQLObjectType({
  name: 'Profile',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    id_city:{type: GraphQLID},
    city: {
      type: City,
      resolve(parent, args) {
        return CityModel.getByID({id: parent.id_city})
      }
    },
    id_zone:{type: GraphQLID},
    zone: {
      type: Zone,
      resolve(parent, args) {
        return ZoneModel.getByID({id: parent.id_zone})
      }
    },
    id_job:{type: GraphQLID},
    job: {
      type: Job,
      resolve(parent, args) {
        return JobModel.getByID({id: parent.id_job})
      }
    },
    review: {
      type: new GraphQLList(Review),
      resolve(parent, args) {
        return ReviewModel.findMatching({id_profile: parent.id, active: 1})
      }
    },
    first_name:{type: GraphQLString},
    last_name:{type: GraphQLString},
    avatar:{type: GraphQLString},
    second_jobs:{type: GraphQLString},
    times_job:{type: GraphQLString},
    address:{type: GraphQLString},
    name:{type: GraphQLString},
    email:{type: GraphQLString},
    password:{type: GraphQLString},
    tel:{type: GraphQLString},
    provider_type:{type: GraphQLID},
    profile_type:{type: GraphQLID},
    experience: {type: GraphQLID},
    description:{type: GraphQLString},
    created_date:{type: GraphQLString},
    updated_date:{type: GraphQLString},
    last_seen:{type: GraphQLString},
    active: {type: GraphQLID},
    reset_password_expires:{type: GraphQLString},
    token:{type: GraphQLString},
  })
});

module.exports = Profile;