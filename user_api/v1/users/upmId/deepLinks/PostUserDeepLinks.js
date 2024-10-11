// POST - v1/users/{upmId}/deepLinks
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("POST - v1/users/{upmId}/deepLinks", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Adds a user participation", async () => {
        let response
        try {
            response = await axios.post(`${env}/v1/users/${vars.upmId}/deepLinks`, {
                "url": "https://google.com", 
                "handle": "deeplink-handle"
            },
            { headers: headers})

        } catch (error) {
            console.error(error)
        }
        assert.equal(response.status, 201, `Response status is not 201, instead the status is: ${response.status}`)
        
        // Check deep links created - /v1/users/current/deepLinks

        // Remove deep links
    })
})