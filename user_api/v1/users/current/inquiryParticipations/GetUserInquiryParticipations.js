// GET - v1/users/current/userInquiryParticipations
import axios from "axios"
import { headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("GET - v1/users/current/userInquiryParticipations", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Returns the current users inquiry participations (plural) filtered by initiative handle", async () => {
        let response

        // Initialize
        // Create user inquiry participation

        try {
            response = await axios.get(`${env}/v1/users/current/userInquiryParticipations`, 
            { headers: headers})
        } catch (error) {
            console.error(error)
            // throw error
        }
        console.log(response)
        assert.equal(response.status, 200, `Response status is not 200, instead the status is: ${response.status}`)

         // Cleanup
         // Remove user inquiry participation
    })
})