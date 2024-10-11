// GET - /v2/users/{upmId}/participations
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("GET - v2/users/{upmId}/participations", () => { 
    it("Returns the users participations", async () => {
        const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'
        
        let response
        try {
            response = await axios.get(`${env}/v2/users/${vars.upmId}/participations`, 
            { headers: headers})
        } catch (error) {
            console.error(error)
            throw error
        }
        assert.equal(response.status, 200)

    })
})