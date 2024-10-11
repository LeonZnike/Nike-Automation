// POST - v1/users/{upmId}/tasks
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("POST - v1/users/{upmId}/tasks", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'


    it("Adds a user task", async () => {
        let response
        try {
            response = await axios.post(`${env}/v1/users/${vars.upmId}/tasks`, {
                "id": "",
                "upmId": vars.upmId,
                "initiativeHandle": vars.initiativeHandle,
                "taskType": "test",
                "description": "test description",
                "status": "todo"
            },
            { headers: headers})

        } catch (error) {
            console.error(error)
        }
        assert.equal(response.status, 201, `Response status is not 201, instead the status is: ${response.status}`)
        
        // Check User task created - /v1/users/{upmid}/tasks

        // Remove User task
    })
})