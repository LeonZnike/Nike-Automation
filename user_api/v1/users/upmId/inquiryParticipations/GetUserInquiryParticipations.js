// GET - v1/users/{upmId}/userInquiryParticipations
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("GET - v1/users/{upmId}/userInquiryParticipations", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Returns inquiry participations (plural) listed under the upmid provided filtered by initiative handle", async () => {
        let response

        // Initialize
        // Create user inquiry participation

        try {
            response = await axios.get(`${env}/v1/users/${vars.upmId}/userInquiryParticipations`, 
            { headers: headers})
        } catch (error) {
            console.error(error)
            // throw error
        }
        assert.equal(response.status, 200, `Response status is not 200, instead the status is: ${response.status}`)

         // Cleanup
         // Remove user inquiry participation
    })
})