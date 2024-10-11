// POST - v1/users/current/consents
import axios from "axios"
import { vars, headers, adminHeaders } from "./variables.js"

const env = process.env.ENV_VAR || 'https://api-qa1.l2w-test.nikecloud.com'

async function createConsent() {
    const consentResponse = await axios.post(`${env}/v1/users/current/consents`, {
        version: '1.0',
        status: "accept",
    }, headers);

    if (consentResponse && consentResponse.status === 201) {
        console.log("Consent created successfully ✅")
    }
}

async function createParticipation() {
    const participationResponse = await axios.post(
        `${env}/v1/users/current/participations`,
        {
            "initiativeHandle": vars.initiativeHandle,
            "status": "invite"
        },
        { headers: headers }
    )

    if (participationResponse && participationResponse.status === 201) {
        console.log("Participation created successfully ✅")
    }
}

async function createDeepLinks() {

    const deepLinkResponse = await axios.post(`${env}/v1/users/current/deepLinks`, {
        "url": "https://google.com", 
        "handle": "deeplink-handle"
    },
    { headers: headers})


    if (deepLinkResponse && deepLinkResponse.status === 201) {
        console.log("Deeplink created successfully ✅");
    }
}

async function createInitiativeConsent() {
    const initiativeHandle = "123-kiru"
    const initiativeConsentHandle = "123-kiru-8"

    const initiativeConsentResponse = await axios.post(`${env}/v1/users/current/initiativeConsents`, {
        "initiativeHandle": initiativeHandle,
        "initiativeConsentHandle": initiativeConsentHandle,
        "version": 1,
        "status": "accept"
    },
    { headers: headers})


    if (initiativeConsentResponse && initiativeConsentResponse.status === 201) {
        console.log("Initiative Consent created successfully ✅");
    }
}

async function main() {
    await createConsent()
    await createParticipation()
    await createDeepLinks()
    await createInitiativeConsent()
}

main()