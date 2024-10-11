// GET - v2/users/{upmId}/participations/{initiativeHandle}
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("GET - v2/users/{upmId}/participations/{initiativeHandle}", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Returns the users participation for the initiative handle", async () => {
        let response

        // Initialize
        // Create user participation

        try {
            response = await axios.get(`${env}/v2/users/${vars.upmId}/participations/${vars.initiativeHandle}`, 
            { headers: headers})
        } catch (error) {
            console.error(error)
            // throw error
        }
        assert.equal(response.status, 200)

         // Cleanup
         // Remove user participation

    })
})