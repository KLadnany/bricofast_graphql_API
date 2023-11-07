const DAO = require('../../lib/dao')
const mySQLWrapper = require('../../lib/mysqlWrapper')

class Profile extends DAO {

    /**
     * Overrides TABLE_NAME with this class' backing table at MySQL
     */
    static get TABLE_NAME() {
        return 'profile'
    }

    /**
     * Returns a profile by its ID
     */
    static async getByID({id}) {
        return await this.find(id)
    }

    /**
     * Returns a list of profile matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    static async findMatching(fields, limit, order) {
        // Returns early with all profile if no criteria was passed
        if (Object.keys(fields).length === 0) return this.findAll()
        
        // Find matching profile
        return this.findByFields({
            fields,
            limit,
            order
        })
    }
}

module.exports = Profile