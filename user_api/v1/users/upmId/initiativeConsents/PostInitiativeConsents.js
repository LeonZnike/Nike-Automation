// POST - v1/users/{upmId}/initiativeConsents
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("POST - v1/users/{upmId}/initiativeConsents", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Adds a user initiative Consents", async () => {
        // for initiativeConsentHandle search in Dynamo for the initiative_ and the consent handle is the "consentDocument" field
        // const version = Math.floor(Math.random() * 1000)
        const initiativeHandle = "123-kiru"
        const initiativeConsentHandle = "123-kiru-8"

        let response
        try {
            response = await axios.post(`${env}/v1/users/${vars.upmId}/initiativeConsents`, {
                "initiativeHandle": initiativeHandle,
                "initiativeConsentHandle": initiativeConsentHandle,
                "version": 1,
                "status": "accept"
            },
            { headers: headers})

        } catch (error) {
            console.error(error)
        }
        assert.equal(response.status, 201, `Response status is not 201, instead the status is: ${response.status}`)

    })
})