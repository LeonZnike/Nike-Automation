// PATCH - v1/users/current
import axios from "axios"
import { headers, vars } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("PATCH - v1/users/current", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Updates partial properties of a user", async () => {
        let response
        try {
            response = await axios.patch(`${env}/v1/users/current`, {
                "upmId": "test321",
            },
        {headers: headers})

        } catch (error) {
            // console.error(error)
        }

        //cleanup code
        await axios.patch('https://api-qa1.l2w-test.nikecloud.com/v1/users/current', {
            "upmId": vars.upmId,
        },{headers: headers})

        assert.equal(response.status, 204, `Response status is not 204, instead the status is: ${response.status}`)
    })
})