// DELETE - v1/users/{upmId}/deepLinks/{handle}
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("DELETE - v1/users/{upmId}/deepLinks/{handle}", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    // Create deep link - /v1/users/current/deepLinks

    it("Deletes a user deepLink", async () => {
        let response
        let handle
        try {
            response = await axios.delete(`${env}/v1/users/${vars.upmId}/deepLinks/${handle}`,
            { headers: headers})

        } catch (error) {
            // console.error(error)
        }
        assert.equal(response.status, 204, `Response status is not 204, instead the status is: ${response.status}`)


        // Check deep link is removed - /v1/users/current/deepLinks

    })
})