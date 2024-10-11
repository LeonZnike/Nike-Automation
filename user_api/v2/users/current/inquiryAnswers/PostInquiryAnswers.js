// POST - v2/users/current/inquiryAnswers
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("POST - v2/users/current/inquiryAnswers", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    // Get inquiryHandle (pass in initiativeHandle) - /v1/users/current/userInquiryParticipations

    //Required props:
    //inquiryHandle, customKey, ppiHandle

    it("Creates a v2 user inquiryAnswer", async () => {
        let response
        try {
            response = await axios.post(`${env}/v2/users/current/inquiryAnswers`, {
                "inquiryHandle": "",
                "customKey": "",
                "answers": [{
                    "ppiHandle": "ppi-email",
                    "answer": "Test Answer"
                 }]
            },
            { headers: headers})

        } catch (error) {
            console.error(error)
        }
        assert.equal(response.status, 201, `Response status is not 201, instead the status is: ${response.status}`)
        
        // Check Inquiry Answer created - /v1/users/current/userInquiryParticipations

        // Remove inquiry answer
    })
})