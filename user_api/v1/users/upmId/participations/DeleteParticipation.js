// DELETE - v1/users/{upmId}/participations/{initiativeHandle}
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("DELETE - v1/users/{upmId}/participations/{initiativeHandle}", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'



    it("Deletes a user participation", async () => {
        let response
        const initiativeHandle =  "a"

        // Create participation 
        // await axios.post(`${env}/v1/users/${vars.upmId}/participations`, {
        //     "initiativeHandle": initiativeHandle, 
        //     "status": "invite"
        // },
        // { headers: headers})

        try {
            response = await axios.delete(`${env}/v1/users/${vars.upmId}/participations/${initiativeHandle}`,
            { headers: headers})

        } catch (error) {
            console.error(error)
        }
        assert.equal(response.status, 204, `Response status is not 204, instead the status is: ${response.status}`)

    })
})