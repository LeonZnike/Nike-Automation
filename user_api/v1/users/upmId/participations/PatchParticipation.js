// PATCH - v1/users/{upmId}/participations
import axios from "axios"
import { headers, vars } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("PATCH - v1/users/{upmId}/participations", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Updates a user participation on an initiative", async () => {
        let response
        
        try {
            response = await axios.patch(`${env}/v1/users/${vars.upmId}/participations`, {
                "status": ""
            },
        {headers: headers})

        } catch (error) {
            console.error(error)
        }

        assert.equal(response.status, 204, `Response status is not 204, instead the status is: ${response.status}`)
        //cleanup code

    })
})