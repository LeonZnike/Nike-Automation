// POST - v1/users/{upmId}/inquiryParticipations
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("POST - v1/users/{upmId}/inquiryParticipations", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    // Get initiative handle - https://api-qa1.l2w-test.nikecloud.com/v1/users/current/initiatives

    // Need an initiative inquiry for the inquiry handle (??)

    it("Adds a user inquiry participation", async () => {
        let response
        try {
            response = await axios.post(`${env}/v1/users/${vars.upmId}/inquiryParticipations`, {
                "upmId": vars.upmId,
                "inquiryHandle": "activity-survey-american-football",
                "inquiryType": "",
                "status": "invite"
            },
            { headers: headers})

        } catch (error) {
            console.error(error)
        }
        assert.equal(response.status, 201, `Response status is not 201, instead the status is: ${response.status}`)
        
        // Check Inquiry Participation created - /v1/users/current/userInquiryParticipations

        // Remove inquiry participation
    })
})