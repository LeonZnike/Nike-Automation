// PATCH - v1/users/current/participations
import axios from "axios";
import { headers, vars } from "../../../../../helpers/variables.js";
import assert from "assert";

describe("PATCH - v1/users/current/participations", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com';

    it("Updates a user participation on an initiative", async () => {
        let response;

        try {
            response = await axios.patch(`${env}/v1/users/current/participations`, {
                status: "invite"
            }, { headers: headers });
        } catch (error) {
            assert.fail(`Error during PATCH request: ${error.message}`);
        }

        // Assert response status
        assert.equal(response.status, 204, `Response status is not 204, instead the status is: ${response.status}`);
    });
});
