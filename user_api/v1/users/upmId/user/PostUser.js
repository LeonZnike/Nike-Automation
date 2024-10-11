// POST - v1/users
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("POST - v1/users", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Adds a user", async () => {
        let response
        try {
            response = await axios.post(`${env}/v1/users`, {
                "upmId": "12345",
                "athleteId": "54321",
                "hasOnboarded": true
            },
            { headers: headers})

        } catch (error) {
            // console.error(error)
        }
        assert.equal(response.status, 201, `Response status is not 201, instead the status is: ${response.status}`)


        // Check User created - /v/1/users/{upmId}

        // Remove user
    })
})