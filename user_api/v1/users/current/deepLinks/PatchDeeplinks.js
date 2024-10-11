// PATCH - v1/users/current/deepLinks/{handle}
import axios from "axios"
import { headers, vars } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("PATCH - v1/users/current/deepLinks/{handle}", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Updates a users deepLinks", async () => {
        let response
        let handle = "deeplink-handle"
        try {
            response = await axios.patch(`${env}/v1/users/current/deepLinks/${handle}`, {
                "url": "",
                "handle": ""
            },
        {headers: headers})

        } catch (error) {
            console.error(error)
        }

        //cleanup code

        assert.equal(response.status, 204, `Response status is not 204, instead the status is: ${response.status}`)
    })
})