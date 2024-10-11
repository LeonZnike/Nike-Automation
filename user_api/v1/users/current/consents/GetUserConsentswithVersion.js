// GET - v1/consents/{consentVersion}
import axios from "axios"
import { headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("GET - v1/consents/{consentVersion}", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Create a consent according to the version provided", async () => {

        let response

        try {
            response = await axios.get(`${env}/v1/consents/0.0.1`, 
            { headers: headers})
        } catch (error) {
            console.error(error)
            // throw error
        }
        assert.equal(response.status, 200, `Response status is not 200, instead the status is: ${response.status}`)
        // assert.equal(response.data.version, consentVersion, `Consent version is is not ${consentVersion}.0, instead the consent version is: ${response.data.version}`)

    })
})

