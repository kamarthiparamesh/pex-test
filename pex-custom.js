import { PEX } from "@sphereon/pex";

const input = {
    pdWithCustomAttr: {
        id: "vp_combined_email_user_profile_combined",
        purpose: "Check if VC type is correct",
        affinidiPurpose: "this is attribute for specific purpose used by affinidi",
        affinidiPurpose2: "this is attribute for specific purpose used by affinidi",
        submission_requirements: [{ rule: "pick", min: 1, from: "A" }],
        input_descriptors: [
            {
                id: "email_vc",
                name: "Email VC type",
                group: ["A"],
                constraints: {
                    fields: [
                        {
                            path: ["$.type"],
                            purpose: "Verify VC Type",
                            filter: {
                                type: "array",
                                contains: {
                                    type: "string",
                                    pattern: "^EmailVC$",
                                },
                            },
                        },
                    ],
                },
            },
        ],
    },
    presentationDefinition: {
        id: "vp_combined_email_user_profile_combined",
        purpose: "Check if VC type is correct",
        submission_requirements: [{ rule: "pick", min: 1, from: "A" }],
        input_descriptors: [
            {
                id: "email_vc",
                name: "Email VC type",
                group: ["A"],
                constraints: {
                    fields: [
                        {
                            path: ["$.type"],
                            purpose: "Verify VC Type",
                            filter: {
                                type: "array",
                                contains: {
                                    type: "string",
                                    pattern: "^EmailVC$",
                                },
                            },
                        },
                    ],
                },
            },
        ],
    },
    VCsListProfile: [
        {
            "@context": [
                "https://www.w3.org/2018/credentials/v1",
                "https://schema.affinidi.io/profile-template/EmailVC.jsonld",
            ],
            id: "claimId:cc87f27c1120c639",
            type: ["VerifiableCredential", "EmailVC"],
            holder: {
                id: "did:elem:EiAj_r-lhxVqd2NOFt0QhpdTx1JH4iAF_HqIktYwDqKMEg;",
            },
            credentialSubject: {
                email: "paramesh.k@affinidi.com",
            },
            credentialSchema: {
                id: "https://schema.affinidi.io/profile-template/EmailVC.jsonld",
                type: "JsonSchemaValidator2018",
            },
            issuanceDate: "2023-08-04T04:26:25.359Z",
            issuer: "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ;",
            proof: {
                type: "EcdsaSecp256k1Signature2019",
                created: "2023-08-04T04:26:29Z",
                verificationMethod:
                    "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ#primary",
                proofPurpose: "assertionMethod",
                jws: "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..w-OaTfzV67xXfc667WMfSGGEh3KqYivSPuFtNAVkaKcK24lCfE1yONdQV8yQs8TtEAvZsV5gGWFXmwG1NOtLNg",
            },
        },
        {
            "@context": [
                "https://www.w3.org/2018/credentials/v1",
                "https://schema.affinidi.io/profile-template/EmailVC.jsonld",
            ],
            id: "claimId:cc87f27c1120c639",
            type: ["VerifiableCredential", "EmailVC"],
            holder: {
                id: "did:elem:EiAj_r-lhxVqd2NOFt0QhpdTx1JH4iAF_HqIktYwDqKMEg;",
            },
            credentialSubject: {
                email: "kamarthiparamesh@affinidi.com",
            },
            credentialSchema: {
                id: "https://schema.affinidi.io/profile-template/EmailVC.jsonld",
                type: "JsonSchemaValidator2018",
            },
            issuanceDate: "2023-08-04T04:26:25.359Z",
            issuer: "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ;",
            proof: {
                type: "EcdsaSecp256k1Signature2019",
                created: "2023-08-04T04:26:29Z",
                verificationMethod:
                    "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ#primary",
                proofPurpose: "assertionMethod",
                jws: "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..w-OaTfzV67xXfc667WMfSGGEh3KqYivSPuFtNAVkaKcK24lCfE1yONdQV8yQs8TtEAvZsV5gGWFXmwG1NOtLNg",
            },
        },
        {
            "@context": [
                "https://www.w3.org/2018/credentials/v1",
                "https://schema.affinidi.io/profile-template/context.jsonld",
            ],
            id: "claimId:cc87f27c1120c639",
            type: ["VerifiableCredential", "ProfileTemplate"],
            holder: {
                id: "did:elem:EiAj_r-lhxVqd2NOFt0QhpdTx1JH4iAF_HqIktYwDqKMEg;",
            },
            credentialSubject: {
                person: {
                    givenName: "paramesh",
                    familyName: "Kamarthi",
                },
            },
            credentialSchema: {
                id: "https://schema.affinidi.io/profile-template/context.jsonld",
                type: "JsonSchemaValidator2018",
            },
            issuanceDate: "2023-08-04T04:26:25.359Z",
            issuer: "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ;",
            proof: {
                type: "EcdsaSecp256k1Signature2019",
                created: "2023-08-04T04:26:29Z",
                verificationMethod:
                    "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ#primary",
                proofPurpose: "assertionMethod",
                jws: "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..w-OaTfzV67xXfc667WMfSGGEh3KqYivSPuFtNAVkaKcK24lCfE1yONdQV8yQs8TtEAvZsV5gGWFXmwG1NOtLNg",
            },
        },
    ],
};

// Function to remove specified attributes from an object or array
function removeAttributes(obj, ignore) {
    if (Array.isArray(obj)) {
        return obj.map((item) => removeAttributes(item, ignore));
    } else if (typeof obj === "object" && obj !== null) {
        return Object.keys(obj).reduce((acc, key) => {
            if (!ignore.includes(key)) {
                acc[key] = removeAttributes(obj[key], ignore);
            }
            return acc;
        }, {});
    }
    return obj; // Return as-is for primitive values
}

// Function to validate the presentation definition using PEX
function validatePEX(presentationDefinition) {
    try {
        const data = PEX.validateDefinition(presentationDefinition);
        console.log("Validation Result:", data);
    } catch (error) {
        console.error("Validation Error:", error);
    }
}

function runPEXQuery(
    presentationDefinition,
    VCsListProfile,
    ignoreAttributes = undefined
) {
    try {
        const pex = new PEX();
        if (Array.isArray(ignoreAttributes) && ignoreAttributes.length > 0) {
            presentationDefinition = removeAttributes(
                presentationDefinition,
                ignoreAttributes
            );
        }

        const {
            verifiableCredential,
            areRequiredCredentialsPresent,
            warnings,
            errors,
        } = pex.selectFrom(presentationDefinition, VCsListProfile);

        console.log("Errors:", errors);
        console.log("Warnings:", warnings);
        verifiableCredential.forEach((vc) => {
            console.log(`${vc.type[1]} Credential Subject:`, vc.credentialSubject);
        });
    } catch (error) {
        console.error("PEX Execution Error:", error);
    }
}

try {

    // Validate the base presentation definition
    validatePEX(input.presentationDefinition);

    //It validates the PEX and executes the query and return matched VCs
    runPEXQuery(input.presentationDefinition, input.VCsListProfile);

    //PEX Contains custom attribute
    const additionalAttributes = ["affinidiPurpose", "affinidiPurpose2"];
    runPEXQuery(input.pdWithCustomAttr, input.VCsListProfile, additionalAttributes);
} catch (e) {
    console.log("Execution Error:", e);
}

//console.log('errors', JSON.stringify(match))
//console.log('matches', match.matches)

//match.verifiableCredential.forEach(vc => console.log(vc.type[1], vc.credentialSubject));
