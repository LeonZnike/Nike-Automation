// POST - v1/users/current/inquiryAnswers
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("POST - v1/users/current/inquiryAnswers", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    // Get ppi - https://api-qa1.l2w-test.nikecloud.com/v1/users/current/ppi
    // {
    //     "handle": "ppi-email",
    //     "value": "leon+2@plusqa.com"
    // },


    // Unable to create athlete inquiry answers: 400
    
    it("Creates a user InquiryAnswer", async () => {
        let response
        try {
            response = await axios.post(`${env}/v1/users/current/inquiryAnswers`, {
            "answers": [{
                "ppiHandle": "ppi-nuid",
                "inquiryHandle": "test123",
                "inquiryIdentifier": "test123",
                "answer": "test answer"
            }]},
            { headers: headers})

        } catch (error) {
            console.error(error)
        }
        assert.equal(response.status, 201, `Response status is not 201, instead the status is: ${response.status}`)
        
    })
})