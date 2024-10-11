// DELETE - v1/users/current/inquiryParticipations/{id}
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("DELETE - v1/users/current/inquiryParticipations/{id}", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    // Create inquiryParticipation - /v1/users/current/inquiryParticipations

    it("Deletes a user inquiry participation", async () => {
        const id = ""
        let response
        try {
            response = await axios.delete(`${env}/v1/users/current/inquiryParticipations/${id}`,
            { headers: headers})

        } catch (error) {
            // console.error(error)
        }
        assert.equal(response.status, 204, `Response status is not 204, instead the status is: ${response.status}`)


        // Check inquiryParticipation is removed - /v1/users/current/userInquiryParticipations

    })
})