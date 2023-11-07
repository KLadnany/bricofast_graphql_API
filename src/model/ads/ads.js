const DAO = require('../../lib/dao')
const mySQLWrapper = require('../../lib/mysqlWrapper')

class Ad extends DAO {

    /**
     * Overrides TABLE_NAME with this class' backing table at MySQL
     */
    static get TABLE_NAME() {
        return 'ads'
    }

    /**
     * Returns a Ad by its ID
     */
    static async getByID({id}) {
        return await this.find(id)
    }

    /**
     * Returns a list of bacons matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    static async findMatching(fields, limit) {
        // Returns early with all bacons if no criteria was passed
        if (Object.keys(fields).length === 0) return this.findAll()
        
        // Find matching bacons
        return this.findByFields({
            fields,
            limit
        })
    }

    /**
     * Creates a new Ad
     */
    static async createEntry(_, {profileId, cityId, zoneId, jobId, address, name, email, tel, providerType, title, detail, alias, createdDate, updatedDate}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {profileId, cityId, zoneId, jobId, address, name, email, tel, providerType, title, detail, alias, createdDate, updatedDate}
            })

            return this.getByID({id: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Updates a Ad 
     */
    static async updateEntry(_, {id, profileId, cityId, zoneId, jobId, address, name, email, tel, providerType, title, detail, alias, createdDate, updatedDate, active}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                id,
                data: {profileId, cityId, zoneId, jobId, address, name, email, tel, providerType, title, detail, alias, createdDate, updatedDate, active}
            })

            return this.getByID({id})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = Ad