import axios from "axios";
import { vars, headers } from "../../../../../helpers/variables.js";
import assert from "assert";

describe("POST - v1/users/{upmId}/participations", () => {
    const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com';

    it("Deletes and then adds a user participation", async () => {
        let deleteResponse;

        try {
            deleteResponse = await axios.delete(
                `${env}/v1/users/${vars.upmId}/participations/${vars.initiativeHandle}`,
                { headers: headers }
            );

            assert.equal(deleteResponse.status, 204, `DELETE was not successful. Status: ${deleteResponse.status}`);

            console.log("DELETE request successful");
            
            const response = await axios.post(
                `${env}/v1/users/${vars.upmId}/participations`,
                {
                    "initiativeHandle": vars.initiativeHandle,
                    "status": "invite"
                },
                { headers: headers }
            );

            assert.equal(response.status, 201, `POST response status is not 201. Status: ${response.status}`);
            console.log("POST request successful");
            
        } catch (error) {
            console.error("Error in DELETE or POST request", error);
            throw error; 
        }
    });
});
