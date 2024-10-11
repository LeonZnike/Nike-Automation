// PATCH - v1/users/{upmId}/tasks/{id}
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("PATCH - v1/users/{upmId}/tasks/{id}", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    // Get a task id - get: /v1/users/{upmid}/tasks
    // or create one - post: /v1/users/{upmId}/tasks

    it("Updates a user task", async () => {
        let response
        let id
        try {
            response = await axios.post(`${env}/v1/users/${vars.upmId}/tasks/${id}`, {
                "url": "https://google.com", 
                "handle": "deeplink-handle"
            },
            { headers: headers})

        } catch (error) {
            console.error(error)
        }
        assert.equal(response.status, 201, `Response status is not 201, instead the status is: ${response.status}`)
        
        // Check task is updated - get: /v1/users/{upmid}/tasks

    })
})