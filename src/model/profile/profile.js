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

    /**
     * Creates a new profile
     */
    static async createEntry(_, {cityId, zoneId, jobId, first_name, last_name, email, password, tel, address, second_jobs, times_job, description, provider_type, profile_type, experience, active, token, reset_password_expires, is_admin, created_date, updated_date}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {cityId, zoneId, jobId, first_name, last_name, email, password, tel, address, second_jobs, times_job, description, provider_type, profile_type, experience, active, token, reset_password_expires, is_admin, created_date, updated_date}
            })

            return this.getByID({id: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Updates a profile 
     */
    static async updateEntry(_, {id, profileId, cityId, zoneId, jobId, address, name, email, tel, providerType, title, detail, alias, createdDate, updatedDate, active}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                id,
                data: {profileId, cityId, zoneId, jobId, first_name, last_name, email, password, tel, address, second_jobs, times_job, description, provider_type, profile_type, experience, active, token, reset_password_expires, is_admin, created_date, updated_date}
            })

            return this.getByID({id})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = Profile