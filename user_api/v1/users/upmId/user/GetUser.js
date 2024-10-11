// GET - v1/users/{upmID}
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("GET - v1/users/{upmID}", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'
    
    it("Returns the user", async () => {
        let response
        try {
            response = await axios.get(`${env}/v1/users/${vars.upmID}`,
            { headers: headers})

        } catch (error) {
            console.error(error)
        }
        assert.equal(response.status, 200, `Response status is not 201, instead the status is: ${response.status}`)

        // cleanup code
    })
})