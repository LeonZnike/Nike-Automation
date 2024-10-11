// PATCH - v2/users/current/ppi
import axios from "axios"
import { headers, vars } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("PATCH - v2/users/current/ppi", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Updates the users ppi", async () => {
        let response
        try {
            response = await axios.patch(`${env}/v2/users/current/ppi`, {
                "ppi": [{
                    "handle": "",
                    "value": {
                        "key": ""
                    }
                }]
            },
        {headers: headers})

        } catch (error) {
            // console.error(error)
        }

        assert.equal(response.status, 204, `Response status is not 204, instead the status is: ${response.status}`)
        //cleanup code

    })
})