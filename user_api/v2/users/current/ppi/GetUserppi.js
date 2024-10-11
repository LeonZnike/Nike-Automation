// GET - v2/users/current/ppi
import axios from "axios"
import { headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("GET - v2/users/current/ppi", () => { 
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Returns the users ppi", async () => {
        let response
        try {
            response = await axios.get(`${env}/v2/users/current/ppi`, 
            { headers: headers})
        } catch (error) {
            console.error(error)
            throw error
        }
        assert.equal(response.status, 200)

    })
})