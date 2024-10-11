// GET - v1/users/{upmId}/inquiryParticipations/{inquiryHandle/customKey/{customKey}
import axios from "axios"
import { headers, vars } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("GET - v1/users/{upmId}/inquiryParticipations/{inquiryHandle/customKey/{customKey}", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Returns the users inquiry participation using their customKey", async () => {
        let response
        let customKey

        try {
            response = await axios.get(`${env}/v1/users/${vars.upmId}/inquiryParticipations/${vars.inquiryHandle}/customKey/${customKey}`, 
            {headers: headers})

        } catch (error) {
            // console.error(error)
        }

        assert.equal(response.status, 200, `Response status is not 200, instead the status is: ${response.status}`)

    })
})