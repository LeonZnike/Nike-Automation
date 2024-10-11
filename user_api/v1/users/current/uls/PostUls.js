// POST - v1/uls
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("POST - v1/uls", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Receives a ULS event and puts in on an SQS queue", async () => {
        let response
        try {
            response = await axios.post(`${env}/v1/uls`, {
                "eventId": "", 
                "jobId": "invite",
                "upmId": vars.upmId,
                "nuid": "",
                "emailAddress": "",
                "s3Location": "",
                "requestDate": ""
            },
            { headers: headers})

        } catch (error) {
            console.error(error)
        }
        assert.equal(response.status, 201, `Response status is not 201, instead the status is: ${response.status}`)
        
        // Check ul created - ?

        // Remove ul - ?
    })
})