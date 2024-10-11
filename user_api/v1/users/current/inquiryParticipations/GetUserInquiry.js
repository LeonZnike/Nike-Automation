// GET - v1/users/current/inquiryParticipations/{id}
import axios from "axios"
import { headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("GET - v1/users/current/inquiryParticipations/{id}", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Returns the audiences users", async () => {
        let response
        let id

        // get inquiryParticipation id - /v1/users/current/userInquiryParticipations

        try {
            response = await axios.get(`${env}/v1/users/current/inquiryParticipations/${id}`, 
            { headers: headers})
        } catch (error) {
            // console.error(error)
            // throw error
        }
        assert.equal(response.status, 200, `Response status is not 200, instead the status is: ${response.status}`)

    })
})