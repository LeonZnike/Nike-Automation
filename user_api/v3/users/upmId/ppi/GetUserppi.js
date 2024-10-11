// GET - v3/users/{upmId}/ppi
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("GET - v3/users/{upmId}/ppi", () => { 
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Returns the users ppi", async () => {
        let response
        try {
            response = await axios.get(`${env}/v3/users/${vars.upmId}/ppi`, 
            { headers: headers})
        } catch (error) {
            console.error(error)
            throw error
        }
        assert.equal(response.status, 200)

    })
})