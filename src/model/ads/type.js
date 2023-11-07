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

const Ad = new GraphQLObjectType({
  name: 'Ad',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    id_profile:{type: GraphQLID},
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
    address:{type: GraphQLString},
    name:{type: GraphQLString},
    email:{type: GraphQLString},
    tel:{type: GraphQLString},
    provider_type:{type: GraphQLID},
    title:{type: GraphQLString},
    detail:{type: GraphQLString},
    alias:{type: GraphQLString},
    created_date:{type: GraphQLString},
    updated_date:{type: GraphQLString},
    active: {type: GraphQLID}
  })
});

module.exports = Ad;