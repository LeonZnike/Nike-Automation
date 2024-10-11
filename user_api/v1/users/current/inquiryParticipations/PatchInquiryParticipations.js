// PATCH - v1/users/current/inquiryParticipations/{id}
import axios from "axios"
import { headers, vars } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("PATCH - v1/users/current/inquiryParticipations/{id}", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Updates a user inquiry participation", async () => {
        let response
        let id

        // get inquiryParticipation id - /v1/users/current/userInquiryParticipations

        try {
            response = await axios.patch(`${env}/v1/users/current/inquiryParticipations/${id}`, {
                "upmId": vars.upmId,
                "inquiryHandle": "",
                "status": "",
                "customKey": "",
                "attributes": {
                    "addutionalProp1": {}
                }
            },
        {headers: headers})

        } catch (error) {
            // console.error(error)
        }

        //cleanup code

        assert.equal(response.status, 204, `Response status is not 204, instead the status is: ${response.status}`)
    })
})