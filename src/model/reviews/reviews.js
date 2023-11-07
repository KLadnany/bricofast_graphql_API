const DAO = require('../../lib/dao')
const mySQLWrapper = require('../../lib/mysqlWrapper')

class Reviews extends DAO {

    /**
     * Overrides TABLE_NAME with this class' backing table at MySQL
     */
    static get TABLE_NAME() {
        return 'comments'
    }

    /**
     * Returns a comments by its ID
     */
    static async getByID({id}) {
        return await this.find(id)
    }

    /**
     * Returns a list of comments matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    static async findMatching(fields) {
        // Returns early with all comments if no criteria was passed
        if (Object.keys(fields).length === 0) return this.findAll()
        
        // Find matching comments
        return this.findByFields({
            fields
        })
    }

    /**
     * Creates a new comments
     */
    static async createEntry(_, {id_profile, id_user, comment, note, date, active}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    id_profile,
                    id_user,
                    comment,
                    note,
                    date,
                    active
                }
            })

            return this.getByID(_, {id: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Updates a comments 
     */
    static async updateEntry(_, {id, id_profile, id_user, comment, note, date, active}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                id,
                data: {
                    id_profile, id_user, comment, note, date, active
                }
            })

            return this.getByID(_, {id})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = Reviews