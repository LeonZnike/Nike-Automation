// GET - v1/users/upmid/initiativeConsents
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("GET - v1/users/upmid/initiativeConsents", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Get a users initiative consents", async () => {
        let response
        try {
            response = await axios.get(`${env}/v1/users/${vars.upmId}/initiativeConsents`, 
            { headers: headers})
        } catch (error) {
            // console.error(error)
            // throw error
        }
        assert.equal(response.status, 200, `Response status is not 200, instead the status is: ${response.status}`)
    })
})