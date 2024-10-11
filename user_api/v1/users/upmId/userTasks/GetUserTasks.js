// GET - v1/users/{upmid}/tasks
import axios from "axios"
import { vars, adminHeaders } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("GET - v1/users/{upmid}/tasks", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'
    
    it("Returns the users userTasks", async () => {
        let response
        try {
            response = await axios.get(`${env}/v1/users/${vars.upmId}/tasks`,
            { headers: adminHeaders})
        } catch (error) {
            console.error(error)
        }
        assert.equal(response.status, 200, `Response status is not 200, instead the status is: ${response.status}`)

        // cleanup code
    })
})