// DELETE - v1/users/{upmId}
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("DELETE - v1/users/{upmId}", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    // Create user ? 

    it("Deletes user", async () => {
        let response
        try {
            response = await axios.delete(`${env}/v1/users/${vars.upmId}`,
            { headers: headers})

        } catch (error) {
            // console.error(error)
        }
        assert.equal(response.status, 204, `Response status is not 204, instead the status is: ${response.status}`)


        // Check User removed - /v1/users/{upmId}

    })
})