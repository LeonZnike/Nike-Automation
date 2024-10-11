// GET - v2/users/current/participations
import axios from "axios"
import { headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("GET - v2/users/current/participations", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Returns the users participations", async () => {
        let response
        try {
            response = await axios.get(`${env}/v2/users/current/participations`, 
            { headers: headers})
        } catch (error) {
            console.error(error)
            throw error
        }
        assert.equal(response.status, 200)

    })
})