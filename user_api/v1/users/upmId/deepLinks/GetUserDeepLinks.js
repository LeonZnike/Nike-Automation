// GET - v1/users/{upmId}/deepLinks
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("GET - v1/users/{upmId}/deepLinks", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Returns the users deepLinks", async () => {
        let response

        // Initialize
        // Create deep link

        try {
            response = await axios.get(`${env}/v1/users/${vars.upmId}/deepLinks`, 
            { headers: headers})
        } catch (error) {
            // console.error(error)
            // throw error
        }
        assert.equal(response.status, 200, `Response status is not 200, instead the status is: ${response.status}`)

         // Cleanup
         // Remove deep link
    })
})