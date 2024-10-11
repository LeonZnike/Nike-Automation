// POST - v1/users
// import axios from "axios"
// import { vars, environments, headers } from "../../../helpers/variables.js"
// import assert from "assert"

// describe("POST - v1/users", () => { 
//     it("Create a new user", async () => {
//         let response
//         try {
//             response = await axios.post(`${environments.qa1}/v1/users`, {
//                 "upmId": "12345",
//                 "athleteId": "54321",
//                 "hasOnboarded": true
//             },
//             { headers: headers})
//         } catch (error) {
//             console.error(error)
//             throw error
//         }
//         assert.equal(response.status, 201)

//         // cleanup code
//     })
// })