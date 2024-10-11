// GET - v1/users/{upmId}/inquiries/{inquiryHandle}/customKey/{customKey}
import axios from "axios"
import { headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("GET - v1/users/{upmId}/inquiries/{inquiryHandle}/customKey/{customKey}", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Returns user initiative inquiry object by given handle", async () => {
        let response
        let customKey
        
        try {
            response = await axios.get(`${env}/v1/users/${vars.upmId}/inquiries/${vars.inquiryHandle}/customKey/${customKey}`, 
            { headers: headers})
        } catch (error) {
            // console.error(error)
            // throw error
        }
        assert.equal(response.status, 200, `Response status is not 200, instead the status is: ${response.status}`)

    })
})