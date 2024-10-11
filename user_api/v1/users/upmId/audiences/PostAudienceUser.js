// POST - v1/audiences/{audienceHandle}/{upmId}
import axios from "axios"
import { vars, headers, adminHeaders } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("POST - v1/audiences/{audienceHandle}/{upmId}", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    // Get audience handle - ?

    it("Adds an audience user", async () => {
        let audienceHandle = "aud-aud-init90"
        let response

        try {
            response = await axios.post(`${env}/v1/audiences/${audienceHandle}/${vars.upmId}`, {
                "upmId": vars.upmId
            },
            { headers: adminHeaders})

        } catch (error) {
            console.error(error)
        }
        assert.equal(response.status, 201, `Response status is not 201, instead the status is: ${response.status}`)
        
        // Check audience handle created - ?

        // Remove audience handle
    })
})