// DELETE - v1/caches/{cacheHandle}
import axios from "axios"
import { vars, headers } from "../../../../../helpers/variables.js"
import assert from "assert"

describe("DELETE - v1/caches/{cacheHandle}", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

    // Create cache - ?

    it("Deletes cache with cacheHandle from caches", async () => {
        let response
        let cacheHandle
        try {
            response = await axios.delete(`${env}/v1/caches/${cacheHandle}`,
            { headers: headers})

        } catch (error) {
            // console.error(error)
        }
        assert.equal(response.status, 204, `Response status is not 204, instead the status is: ${response.status}`)


        // Check cache is removed - ?

    })
})