// GET - v1/users/{upmId}/initiatives/{initiativeHandle}/allowed
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("GET - v1/users/{upmId}/initiatives/{initiativeHandle}/allowed", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Returns whether the user can participate in the initiative", async () => {
        let response
        try {
            response = await axios.get(`${env}/v1/users/${vars.upmId}/initiatives/${vars.initiativeHandle}/allowed`, 
            { headers: headers})
        } catch (error) {
            // console.error(error)
            // throw error
        }
        assert.equal(response.status, 200, `Response status is not 200, instead the status is: ${response.status}`)

    })
})