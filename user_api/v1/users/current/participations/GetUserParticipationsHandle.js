// GET - v1/users/current/participations/{initiativeHandle}
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("GET - v1/users/current/participations/{initiativeHandle}", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    it("Returns the users participation for the initiative handle", async () => {
        let response


        try {
            response = await axios.get(`${env}/v1/users/current/participations/${vars.initiativeHandle}`, 
            { headers: headers})
        } catch (error) {
            // console.error(error)
            // throw error
        }
        assert.equal(response.status, 200, `Response status is not 200, instead the status is: ${response.status}`)
    })
})