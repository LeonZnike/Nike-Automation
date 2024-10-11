// DELETE - v1/audiences/{audienceHandle}/users/{upmId}
import axios from "axios"
import { vars, headers, adminHeaders } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("DELETE - v1/audiences/{audienceHandle}/users/{upmId}", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    // Create audience - /v1/audiences/{audienceHandle}/users

    it("Deletes a audience user according to the handles provided", async () => {
        let response
        let audienceHandle = "aud-aud-init90"

        try {
            response = await axios.delete(`${env}/v1/audiences/${audienceHandle}/users/${vars.upmId}`,
            { headers: adminHeaders})

        } catch (error) {
            console.error(error)
        }
        assert.equal(response.status, 204, `Response status is not 204, instead the status is: ${response.status}`)


        // Check audience is removed - /v1/audiences/{audienceHandle}/users/{upmId}

    })
})