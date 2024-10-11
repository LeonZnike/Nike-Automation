// POST - v1/users/current/consents
import axios from "axios"
import { headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("POST - v1/users/current/consents", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Adds a user consent", async () => {
        // const randValue = Math.floor(Math.random() * 1000)
        // const consentVersion = `${randValue}.0`
        let response

        try {
            response = await axios.post(`${env}/v1/users/current/consents`, {
                "version": '1.0',
                "status": "accept",
            },
            { headers: headers})

        } catch (error) {
            // console.error(error)
        }
        assert.equal(response.status, 201, `Response status is not 201, instead the status is: ${response.status}`)
        // assert.equal(response.data.version, consentVersion, `Consent version is is not ${consentVersion}.0, instead the consent version is: ${response.data.version}`)
        
    })
})