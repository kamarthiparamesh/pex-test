
import { PEX } from '@sphereon/pex'

const input = {
    presentationDefinition1: {
        "id": "vp_personnel_profile_vc",
        "submission_requirements": [{
            "name": "Citizenship Information",
            "rule": "pick",
            "count": 3,
            "from": "A"
        }],
        "input_descriptors": [
            {
                "id": "personnel_profile_vc",
                "name": "Get personnel profile vc",
                "group": ["A"],
                "purpose": "To get Period Fitness Activity Summary type",
                "constraints": {
                    "fields": [
                        {
                            "path": [
                                "$.credentialSchema.id"
                            ],
                            "filter": {
                                "type": "string",
                                "pattern": "^https:\\/\\/schema\\.affinidi\\.com\\/RecentFitnessActivitySummaryV1-0\\.json$",
                            }
                        }
                    ]
                }
            },
            {
                "id": "recent_fitness_activity_summary_vc",
                "name": "Recent Fitness Activity Summary VC type",
                "purpose": "To get Recent Fitness Activity Summary type",
                "group": ["A"],
                "constraints": {
                    "fields": [
                        {
                            "path": [
                                "$.credentialSchema.id"
                            ],
                            "filter": {
                                "type": "string",
                                "pattern": "^https:\\/\\/schema\\.affinidi\\.com\\/PersonalProfileV1-0\\.json$",
                            }
                        }
                    ]
                }
            },
            {
                "id": "recent_fitness_activity_summary_vc",
                "name": "Recent Fitness Activity Summary VC type",
                "purpose": "To get Recent Fitness Activity Summary type",
                "group": ["A"],
                "constraints": {
                    "fields": [
                        {
                            "path": [
                                "$.credentialSchema.id"
                            ],
                            "filter": {
                                "type": "string",
                                "pattern": "^https:\\/\\/schema\\.affinidi\\.com\\/PersonalProfileV2-0\\.json$",
                            }
                        }
                    ]
                }
            }
        ]
    },
    "presentationDefinition1": {
        "id": "vp_personnel_profile_vc",
        "input_descriptors": [{
            "id": "recent_fitness_activity_summary_vc",
            "name": "Recent Fitness Activity Summary VC type",
            "purpose": "To get Recent Fitness Activity Summary type",
            "constraints": {
                "fields": [{
                    "path": ["$.credentialSchema.id"],
                    "filter": {
                        "type": "string",
                        "pattern": "^https:\\/\\/schema\\.affinidi\\.com\\/RecentFitnessActivitySummaryV1-1\\.json$"
                    }
                }]
            }
        }]
    },
    "presentationDefinition2": {
        "id": "vp_combined",
        "submission_requirements": [
            {
                "rule": "pick",
                "max": 1,
                "from": "A"
            },
            {
                "rule": "pick",
                "max": 1,
                "from": "B"
            }
        ],
        "input_descriptors": [
            {
                "id": "recent_fitness_activity_summary_vc",
                "name": "Recent Fitness Activity Summary VC type",
                "purpose": "To get Recent Fitness Activity Summary type",
                "group": [
                    "A"
                ],
                "constraints": {
                    "fields": [
                        {
                            "path": [
                                "$.credentialSchema.id"
                            ],
                            "filter": {
                                "type": "string",
                                "pattern": "^https:\\/\\/schema\\.affinidi\\.com\\/RecentFitnessActivitySummaryV1-0\\.json$"
                            }
                        }
                    ]
                }
            },
            {
                "id": "personal_profile_vc",
                "name": "Personal Profile VC type",
                "purpose": "To get Personal Profile type",
                "group": [
                    "B"
                ],
                "constraints": {
                    "fields": [
                        {
                            "path": [
                                "$.credentialSchema.id"
                            ],
                            "filter": {
                                "type": "string",
                                "pattern": "^https:\\/\\/schema\\.affinidi\\.com\\/PersonalProfileV1-0\\.json$"
                            }
                        }
                    ]
                }
            }
        ]
    },
    "presentationDefinition3": {
        "id": "vp_combined",
        "submission_requirements": [
            {
                "rule": "pick",
                "max": 1,
                "from": "A"
            },
            {
                "rule": "pick",
                "max": 1,
                "from": "B"
            }
        ],
        "input_descriptors": [
            {
                id: "email_vc",
                name: "Email VC type",
                purpose: "Check if VC type is correct",
                "group": [
                    "A"
                ],
                constraints: {
                    fields: [
                        {
                            path: ["$.type"],
                            filter: {
                                type: "array",
                                pattern: "Email",
                            },
                        },
                    ],
                },
            },
            {
                id: "email_vc_data",
                name: "Email VC data",
                purpose: "Check if data contains necessary fields",
                "group": [
                    "A"
                ],
                constraints: {
                    fields: [
                        {
                            path: ["$.credentialSubject.email"],
                            purpose: "Email address",
                            filter: {
                                type: "string",
                            },
                        },
                    ],
                },
            },
            {
                id: "profile_vc",
                name: "profile VC type",
                purpose: "Check if VC type is correct",
                "group": [
                    "B"
                ],
                constraints: {
                    fields: [
                        {
                            path: ["$.type"],
                            filter: {
                                type: "array",
                                pattern: "Person1",
                            },
                        },
                    ],
                },
            }
        ]
    },
    "presentationDefinition1": {
        id: "vp_token_with_profile_vc",
        input_descriptors: [
            {
                id: "profile_vc",
                name: "profile VC type",
                purpose: "Check if VC type is correct",
                constraints: {
                    fields: [
                        {
                            path: ["$.type"],
                            filter: {
                                type: "array",
                                pattern: "Person1",
                            },
                        },
                    ],
                },
            },
        ],
    },
    presentationDefinition: {
        id: "vp_combined_email_user_profile_combined",
        submission_requirements: [
            { rule: "pick", count: 1, from: "A" },
            { rule: "pick", max: 1, from: "B" },
        ],
        input_descriptors: [
            {
                id: "email_vc",
                name: "Email VC type",
                purpose: "Check if VC type is correct",
                group: ["A"],
                constraints: {
                    fields: [
                        {
                            path: ["$.credentialSchema.id"],
                            filter: {
                                type: "string",
                                pattern: "^https://schema.affinidi.com/EmailV1-0.json$",
                            },
                        },
                    ],
                },
            },
            {
                id: "user_profile_vc",
                name: "User Profile VC type",
                purpose: "To get user profile type",
                group: ["B"],
                constraints: {
                    fields: [
                        {
                            path: ["$.credentialSchema.id"],
                            filter: {
                                type: "string",
                                pattern: "^https://schema.affinidi.com/UserProfileV2-0.json$",
                            },
                        },
                    ],
                },
            },
            {
                id: "email",
                name: "Email",
                purpose: "To get email for ID Mapping",
                constraints: { fields: [{ path: ["$.credentialSubject.email"] }] },
            },
            {
                id: "given_name",
                name: "Given name",
                purpose: "To get given name for ID Mapping",
                constraints: {
                    fields: [{ path: ["$.credentialSubject.givenName"] }],
                },
            },
            {
                id: "family_name",
                name: "Family name",
                purpose: "To get family name for ID Mapping",
                constraints: {
                    fields: [{ path: ["$.credentialSubject.familyName"] }],
                },
            },
            {
                id: "middle_name",
                name: "Middle name",
                purpose: "To get middle name for ID Mapping",
                constraints: {
                    fields: [{ path: ["$.credentialSubject.middleName"] }],
                },
            },
            {
                id: "nickname",
                name: "Nickname",
                purpose: "To get nickname for ID Mapping",
                constraints: {
                    fields: [{ path: ["$.credentialSubject.nickname"] }],
                },
            },
            {
                id: "picture",
                name: "Picture",
                purpose: "To get picture for ID Mapping",
                constraints: {
                    fields: [{ path: ["$.credentialSubject.picture"] }],
                },
            },
            {
                id: "updated_at",
                name: "UpdatedAt",
                purpose: "To get updatedAt for ID Mapping",
                constraints: {
                    fields: [{ path: ["$.credentialSubject.updatedAt"] }],
                },
            },
            {
                id: "type",
                name: "Type",
                purpose: "To get type for ID Mapping",
                constraints: { fields: [{ path: ["$.type"] }] },
            },
        ],
    },
    
    presentationDefinitionTest: {
        "id": "vp_combined_email_user_profile_combined",
        "submission_requirements": [
          {
            "name": "Personal Information",
            "purpose": "We need your personal information to fill the application",
            "rule": "pick",
            "min": 1,
            "from": "A"
          }
        ],
      
        "input_descriptors": [
          {
            "id": "email_vc",
            "name": "Email VC",
            "purpose": "Check if VC data contains necessary fields",
            "group": ["A"],
            "constraints": {
              "fields": [
                {
                  "path": [
                    "$.type"
                  ],
                  "purpose": "Check if VC type is correct",
                  "filter": {
                    "type": "array",
                    "contains": {
                      "type": "string",
                      "pattern": "PersonalProfile"
                    }
                  }
                }
              ]
            }
          }   
        ]
      },
    VCsList1: [
        {
            "@context": [
                "https://www.w3.org/2018/credentials/v1",
                "https://schema.affinidi.com/PersonalProfileV1-0.jsonld"
            ],
            "type": [
                "VerifiableCredential",
                "PersonalProfile"
            ],
            "issuer": "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ;elem:initial-state=eyJwcm90ZWN0ZWQiOiJleUp2Y0dWeVlYUnBiMjRpT2lKamNtVmhkR1VpTENKcmFXUWlPaUlqY0hKcGJXRnllU0lzSW1Gc1p5STZJa1ZUTWpVMlN5SjkiLCJwYXlsb2FkIjoiZXlKQVkyOXVkR1Y0ZENJNkltaDBkSEJ6T2k4dmR6TnBaQzV2Y21jdmMyVmpkWEpwZEhrdmRqSWlMQ0p3ZFdKc2FXTkxaWGtpT2x0N0ltbGtJam9pSTNCeWFXMWhjbmtpTENKMWMyRm5aU0k2SW5OcFoyNXBibWNpTENKMGVYQmxJam9pVTJWamNESTFObXN4Vm1WeWFXWnBZMkYwYVc5dVMyVjVNakF4T0NJc0luQjFZbXhwWTB0bGVVaGxlQ0k2SWpBeU5UQmtZbVZpWmpsaVpEYzRaRFJtWldFNU5tSmlaVGxsWVRneE9EVXlPVEEzWmpJek1XWTJNVEExWlRCaE5XTTBNRFUwWXpoaVpESTBabVZqTWpJMlppSjlMSHNpYVdRaU9pSWpjbVZqYjNabGNua2lMQ0oxYzJGblpTSTZJbkpsWTI5MlpYSjVJaXdpZEhsd1pTSTZJbE5sWTNBeU5UWnJNVlpsY21sbWFXTmhkR2x2Ymt0bGVUSXdNVGdpTENKd2RXSnNhV05MWlhsSVpYZ2lPaUl3TTJZNE1XSXhNamRqT0RSaE5tTm1aRFF5WXpjek5XTmhaalEyWWpJMFkyUXhNalJoTVRFMllqVmhOR1JoWVdZNFlUZzRZVGRpTkdVd1lUbGhNalZpWlRNaWZWMHNJbUYxZEdobGJuUnBZMkYwYVc5dUlqcGJJaU53Y21sdFlYSjVJbDBzSW1GemMyVnlkR2x2YmsxbGRHaHZaQ0k2V3lJamNISnBiV0Z5ZVNKZGZRIiwic2lnbmF0dXJlIjoiYnhvMHJyNDFMeFRCS2JfOWQ1UG4xeDBNYl8wc3VjRXRvQzFkejEyODFNNVprOEoxZDhxVTJDTlBlZmxxME42YlJ1YUNib19xa0E4V1dtd1pPcXFaOWcifQ",
            "issuanceDate": "2023-07-03T05:25:59.618184",
            "expirationDate": "2026-07-03T05:25:59.618175",
            "credentialSchema": {
                "id": "https://schema.affinidi.com/PersonalProfileV1-0.json",
                "type": "PersonalProfile"
            },
            "credentialSubject": [
                {
                    "firstName": "Paramesh Kamarthi",
                    "email": "kamarthiparamesh@gmail.com",
                    "picture": "https://avatars.githubusercontent.com/u/46393683?v=4"
                }
            ],
            "id": "claimId:b0b07938-9b53-4afc-a97c-3866a1445fa0",
            "holder": {
                "id": "did:elem:eid1tez3df_nms8tpacwgynqq-bngaemytch0s5jqsqppg"
            },
            "proof": {
                "type": "EcdsaSecp256k1Signature2019",
                "created": "2023-07-03T16:31:33Z",
                "verificationMethod": "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ#primary",
                "proofPurpose": "assertionMethod",
                "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..j23ByaFB6boS-jWcfcpHM8O5FAJPMo4H55WD40IYnYtdAqcyWwE0cvgBhienSc9dqtZ9PYTHMJt-pUu2WglfLQ"
            }
        },
        {
            "@context": [
                "https://www.w3.org/2018/credentials/v1",
                "https://schema.affinidi.com/PersonalProfileV1-0.jsonld"
            ],
            "type": [
                "VerifiableCredential",
                "PersonalProfile"
            ],
            "issuer": "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ;elem:initial-state=eyJwcm90ZWN0ZWQiOiJleUp2Y0dWeVlYUnBiMjRpT2lKamNtVmhkR1VpTENKcmFXUWlPaUlqY0hKcGJXRnllU0lzSW1Gc1p5STZJa1ZUTWpVMlN5SjkiLCJwYXlsb2FkIjoiZXlKQVkyOXVkR1Y0ZENJNkltaDBkSEJ6T2k4dmR6TnBaQzV2Y21jdmMyVmpkWEpwZEhrdmRqSWlMQ0p3ZFdKc2FXTkxaWGtpT2x0N0ltbGtJam9pSTNCeWFXMWhjbmtpTENKMWMyRm5aU0k2SW5OcFoyNXBibWNpTENKMGVYQmxJam9pVTJWamNESTFObXN4Vm1WeWFXWnBZMkYwYVc5dVMyVjVNakF4T0NJc0luQjFZbXhwWTB0bGVVaGxlQ0k2SWpBeU5UQmtZbVZpWmpsaVpEYzRaRFJtWldFNU5tSmlaVGxsWVRneE9EVXlPVEEzWmpJek1XWTJNVEExWlRCaE5XTTBNRFUwWXpoaVpESTBabVZqTWpJMlppSjlMSHNpYVdRaU9pSWpjbVZqYjNabGNua2lMQ0oxYzJGblpTSTZJbkpsWTI5MlpYSjVJaXdpZEhsd1pTSTZJbE5sWTNBeU5UWnJNVlpsY21sbWFXTmhkR2x2Ymt0bGVUSXdNVGdpTENKd2RXSnNhV05MWlhsSVpYZ2lPaUl3TTJZNE1XSXhNamRqT0RSaE5tTm1aRFF5WXpjek5XTmhaalEyWWpJMFkyUXhNalJoTVRFMllqVmhOR1JoWVdZNFlUZzRZVGRpTkdVd1lUbGhNalZpWlRNaWZWMHNJbUYxZEdobGJuUnBZMkYwYVc5dUlqcGJJaU53Y21sdFlYSjVJbDBzSW1GemMyVnlkR2x2YmsxbGRHaHZaQ0k2V3lJamNISnBiV0Z5ZVNKZGZRIiwic2lnbmF0dXJlIjoiYnhvMHJyNDFMeFRCS2JfOWQ1UG4xeDBNYl8wc3VjRXRvQzFkejEyODFNNVprOEoxZDhxVTJDTlBlZmxxME42YlJ1YUNib19xa0E4V1dtd1pPcXFaOWcifQ",
            "issuanceDate": "2023-07-03T05:25:59.618184",
            "expirationDate": "2026-07-03T05:25:59.618175",
            "credentialSchema": {
                "id": "https://schema.affinidi.com/PersonalProfileV1-0.json",
                "type": "PersonalProfile"
            },
            "credentialSubject": [
                {
                    "firstName": "Sanjay Kumar",
                    "email": "kamarthiparamesh@gmail.com",
                    "picture": "https://avatars.githubusercontent.com/u/46393683?v=4"
                }
            ],
            "id": "claimId:b0b07938-gjkgdksj-4afc-a97c-3866a1445fa0",
            "holder": {
                "id": "did:elem:eid1tez3df_nms8tpacwgynqq-bngaemytch0s5jqsqppg"
            },
            "proof": {
                "type": "EcdsaSecp256k1Signature2019",
                "created": "2023-07-03T16:31:33Z",
                "verificationMethod": "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ#primary",
                "proofPurpose": "assertionMethod",
                "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..j23ByaFB6boS-jWcfcpHM8O5FAJPMo4H55WD40IYnYtdAqcyWwE0cvgBhienSc9dqtZ9PYTHMJt-pUu2WglfLQ"
            }
        },
        {
            "@context": [
                "https://www.w3.org/2018/credentials/v1",
                "https://schema.affinidi.com/RecentFitnessActivitySummaryV1-0.jsonld"
            ],
            "type": [
                "VerifiableCredential",
                "RecentFitnessActivitySummary"
            ],
            "issuer": "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ;elem:initial-state=eyJwcm90ZWN0ZWQiOiJleUp2Y0dWeVlYUnBiMjRpT2lKamNtVmhkR1VpTENKcmFXUWlPaUlqY0hKcGJXRnllU0lzSW1Gc1p5STZJa1ZUTWpVMlN5SjkiLCJwYXlsb2FkIjoiZXlKQVkyOXVkR1Y0ZENJNkltaDBkSEJ6T2k4dmR6TnBaQzV2Y21jdmMyVmpkWEpwZEhrdmRqSWlMQ0p3ZFdKc2FXTkxaWGtpT2x0N0ltbGtJam9pSTNCeWFXMWhjbmtpTENKMWMyRm5aU0k2SW5OcFoyNXBibWNpTENKMGVYQmxJam9pVTJWamNESTFObXN4Vm1WeWFXWnBZMkYwYVc5dVMyVjVNakF4T0NJc0luQjFZbXhwWTB0bGVVaGxlQ0k2SWpBeU5UQmtZbVZpWmpsaVpEYzRaRFJtWldFNU5tSmlaVGxsWVRneE9EVXlPVEEzWmpJek1XWTJNVEExWlRCaE5XTTBNRFUwWXpoaVpESTBabVZqTWpJMlppSjlMSHNpYVdRaU9pSWpjbVZqYjNabGNua2lMQ0oxYzJGblpTSTZJbkpsWTI5MlpYSjVJaXdpZEhsd1pTSTZJbE5sWTNBeU5UWnJNVlpsY21sbWFXTmhkR2x2Ymt0bGVUSXdNVGdpTENKd2RXSnNhV05MWlhsSVpYZ2lPaUl3TTJZNE1XSXhNamRqT0RSaE5tTm1aRFF5WXpjek5XTmhaalEyWWpJMFkyUXhNalJoTVRFMllqVmhOR1JoWVdZNFlUZzRZVGRpTkdVd1lUbGhNalZpWlRNaWZWMHNJbUYxZEdobGJuUnBZMkYwYVc5dUlqcGJJaU53Y21sdFlYSjVJbDBzSW1GemMyVnlkR2x2YmsxbGRHaHZaQ0k2V3lJamNISnBiV0Z5ZVNKZGZRIiwic2lnbmF0dXJlIjoiYnhvMHJyNDFMeFRCS2JfOWQ1UG4xeDBNYl8wc3VjRXRvQzFkejEyODFNNVprOEoxZDhxVTJDTlBlZmxxME42YlJ1YUNib19xa0E4V1dtd1pPcXFaOWcifQ",
            "issuanceDate": "2023-06-30T06:31:38.344397",
            "expirationDate": "2026-06-30T06:31:38.344387",
            "credentialSchema": {
                "id": "https://schema.affinidi.com/RecentFitnessActivitySummaryV1-0.json",
                "type": "RecentFitnessActivitySummary"
            },
            "credentialSubject": {
                "periodStart": "2023-06-20T20:30:00Z",
                "periodEnd": "2023-06-20T20:30:00Z",
                "aggregatedActivityTime": 40353
            },
            "id": "claimId:c6038cb3-38bf-4e4e-89c3-5dac50f44d75",
            "holder": {
                "id": "did:elem:eid1tez3df_nms8tpacwgynqq-bngaemytch0s5jqsqppg"
            },
            "proof": {
                "type": "EcdsaSecp256k1Signature2019",
                "created": "2023-07-03T16:31:34Z",
                "verificationMethod": "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ#primary",
                "proofPurpose": "assertionMethod",
                "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..H9zt1O685oINorTF8kUiSYwO7H4rMYo8JpJlBV8-Z7ZJcfmTWJBBKZNSAOziMHtzw3L96cYB-f9rvWkG11dXaA"
            }
        },
        {
            "@context": [
                "https://www.w3.org/2018/credentials/v1",
                "https://schema.affinidi.com/PersonalProfileV2-0.jsonld"
            ],
            "type": [
                "VerifiableCredential",
                "RecentFitnessActivitySummary"
            ],
            "issuer": "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ;elem:initial-state=eyJwcm90ZWN0ZWQiOiJleUp2Y0dWeVlYUnBiMjRpT2lKamNtVmhkR1VpTENKcmFXUWlPaUlqY0hKcGJXRnllU0lzSW1Gc1p5STZJa1ZUTWpVMlN5SjkiLCJwYXlsb2FkIjoiZXlKQVkyOXVkR1Y0ZENJNkltaDBkSEJ6T2k4dmR6TnBaQzV2Y21jdmMyVmpkWEpwZEhrdmRqSWlMQ0p3ZFdKc2FXTkxaWGtpT2x0N0ltbGtJam9pSTNCeWFXMWhjbmtpTENKMWMyRm5aU0k2SW5OcFoyNXBibWNpTENKMGVYQmxJam9pVTJWamNESTFObXN4Vm1WeWFXWnBZMkYwYVc5dVMyVjVNakF4T0NJc0luQjFZbXhwWTB0bGVVaGxlQ0k2SWpBeU5UQmtZbVZpWmpsaVpEYzRaRFJtWldFNU5tSmlaVGxsWVRneE9EVXlPVEEzWmpJek1XWTJNVEExWlRCaE5XTTBNRFUwWXpoaVpESTBabVZqTWpJMlppSjlMSHNpYVdRaU9pSWpjbVZqYjNabGNua2lMQ0oxYzJGblpTSTZJbkpsWTI5MlpYSjVJaXdpZEhsd1pTSTZJbE5sWTNBeU5UWnJNVlpsY21sbWFXTmhkR2x2Ymt0bGVUSXdNVGdpTENKd2RXSnNhV05MWlhsSVpYZ2lPaUl3TTJZNE1XSXhNamRqT0RSaE5tTm1aRFF5WXpjek5XTmhaalEyWWpJMFkyUXhNalJoTVRFMllqVmhOR1JoWVdZNFlUZzRZVGRpTkdVd1lUbGhNalZpWlRNaWZWMHNJbUYxZEdobGJuUnBZMkYwYVc5dUlqcGJJaU53Y21sdFlYSjVJbDBzSW1GemMyVnlkR2x2YmsxbGRHaHZaQ0k2V3lJamNISnBiV0Z5ZVNKZGZRIiwic2lnbmF0dXJlIjoiYnhvMHJyNDFMeFRCS2JfOWQ1UG4xeDBNYl8wc3VjRXRvQzFkejEyODFNNVprOEoxZDhxVTJDTlBlZmxxME42YlJ1YUNib19xa0E4V1dtd1pPcXFaOWcifQ",
            "issuanceDate": "2023-06-30T06:31:38.344397",
            "expirationDate": "2026-06-30T06:31:38.344387",
            "credentialSchema": {
                "id": "https://schema.affinidi.com/PersonalProfileV2-0.json",
                "type": "RecentFitnessActivitySummary"
            },
            "credentialSubject": {
                "periodStart": "2023-06-20T20:30:00Z",
                "periodEnd": "2023-06-20T20:30:00Z",
                "aggregatedActivityTime": 40353
            },
            "id": "claimId:c6038cb3-38bf-4e4e-89c3-5dac50f44d75",
            "holder": {
                "id": "did:elem:eid1tez3df_nms8tpacwgynqq-bngaemytch0s5jqsqppg"
            },
            "proof": {
                "type": "EcdsaSecp256k1Signature2019",
                "created": "2023-07-03T16:31:34Z",
                "verificationMethod": "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ#primary",
                "proofPurpose": "assertionMethod",
                "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..H9zt1O685oINorTF8kUiSYwO7H4rMYo8JpJlBV8-Z7ZJcfmTWJBBKZNSAOziMHtzw3L96cYB-f9rvWkG11dXaA"
            }
        }
    ],
    VCsList2: [
        {
            "@context": [
                "https://www.w3.org/2018/credentials/v1",
                "https://schema.affinidi.com/EmailV1-0.jsonld"
            ],
            "id": "claimId:5674a42e493acbd1",
            "type": [
                "VerifiableCredential",
                "Email"
            ],
            "holder": {
                "id": "did:elem:EiDtqCfec4Yt9DeAkNp5WHYsLXS0a_QsYPwa2S-b195HkA;elem:initial-state=eyJwcm90ZWN0ZWQiOiJleUp2Y0dWeVlYUnBiMjRpT2lKamNtVmhkR1VpTENKcmFXUWlPaUlqY0hKcGJXRnllU0lzSW1Gc1p5STZJa1ZUTWpVMlN5SjkiLCJwYXlsb2FkIjoiZXlKQVkyOXVkR1Y0ZENJNkltaDBkSEJ6T2k4dmR6TnBaQzV2Y21jdmMyVmpkWEpwZEhrdmRqSWlMQ0p3ZFdKc2FXTkxaWGtpT2x0N0ltbGtJam9pSTNCeWFXMWhjbmtpTENKMWMyRm5aU0k2SW5OcFoyNXBibWNpTENKMGVYQmxJam9pVTJWamNESTFObXN4Vm1WeWFXWnBZMkYwYVc5dVMyVjVNakF4T0NJc0luQjFZbXhwWTB0bGVVaGxlQ0k2SWpBeVltUmlPV0ppTkRGbU0yWmtaV0UwTWpkbU56VmxOREpoTm1JME4yTXhaRFExWkRRMk9ERXhZalprWWpkaE16VXdNV0ZqTVdKaU5EazJNV1UzWXpjd1lTSjlMSHNpYVdRaU9pSWpjbVZqYjNabGNua2lMQ0oxYzJGblpTSTZJbkpsWTI5MlpYSjVJaXdpZEhsd1pTSTZJbE5sWTNBeU5UWnJNVlpsY21sbWFXTmhkR2x2Ymt0bGVUSXdNVGdpTENKd2RXSnNhV05MWlhsSVpYZ2lPaUl3TTJVMVlUUTVPVE0yTlRZMllXUmtaall3TkRoaU0yRTBObVU0TUdFd1pUZzNZbVptTlRJM05URXpZekkwT1dFd1pqY3haRGsyTVdKaFpHTXhNakJqWW1VaWZWMHNJbUYxZEdobGJuUnBZMkYwYVc5dUlqcGJJaU53Y21sdFlYSjVJbDBzSW1GemMyVnlkR2x2YmsxbGRHaHZaQ0k2V3lJamNISnBiV0Z5ZVNKZGZRIiwic2lnbmF0dXJlIjoieUJtc3hHVUdReVlYYm81bURoUE1EX1h5Q3AyYkFPRzhNSTJxNmtmdnNWWWFiLXpRaG1KVU9tM0ppSUlJQ3ZONGRkcC1NUUJXQ2IzdWlmaHR6N2VoV2cifQ"
            },
            "credentialSubject": {
                "email": "paramesh.k@affinidi.com"
            },
            "credentialSchema": {
                "id": "https://schema.affinidi.com/EmailV1-0.json",
                "type": "JsonSchemaValidator2018"
            },
            "issuanceDate": "2023-07-13T07:00:09.298Z",
            "issuer": "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ;elem:initial-state=eyJwcm90ZWN0ZWQiOiJleUp2Y0dWeVlYUnBiMjRpT2lKamNtVmhkR1VpTENKcmFXUWlPaUlqY0hKcGJXRnllU0lzSW1Gc1p5STZJa1ZUTWpVMlN5SjkiLCJwYXlsb2FkIjoiZXlKQVkyOXVkR1Y0ZENJNkltaDBkSEJ6T2k4dmR6TnBaQzV2Y21jdmMyVmpkWEpwZEhrdmRqSWlMQ0p3ZFdKc2FXTkxaWGtpT2x0N0ltbGtJam9pSTNCeWFXMWhjbmtpTENKMWMyRm5aU0k2SW5OcFoyNXBibWNpTENKMGVYQmxJam9pVTJWamNESTFObXN4Vm1WeWFXWnBZMkYwYVc5dVMyVjVNakF4T0NJc0luQjFZbXhwWTB0bGVVaGxlQ0k2SWpBeU5UQmtZbVZpWmpsaVpEYzRaRFJtWldFNU5tSmlaVGxsWVRneE9EVXlPVEEzWmpJek1XWTJNVEExWlRCaE5XTTBNRFUwWXpoaVpESTBabVZqTWpJMlppSjlMSHNpYVdRaU9pSWpjbVZqYjNabGNua2lMQ0oxYzJGblpTSTZJbkpsWTI5MlpYSjVJaXdpZEhsd1pTSTZJbE5sWTNBeU5UWnJNVlpsY21sbWFXTmhkR2x2Ymt0bGVUSXdNVGdpTENKd2RXSnNhV05MWlhsSVpYZ2lPaUl3TTJZNE1XSXhNamRqT0RSaE5tTm1aRFF5WXpjek5XTmhaalEyWWpJMFkyUXhNalJoTVRFMllqVmhOR1JoWVdZNFlUZzRZVGRpTkdVd1lUbGhNalZpWlRNaWZWMHNJbUYxZEdobGJuUnBZMkYwYVc5dUlqcGJJaU53Y21sdFlYSjVJbDBzSW1GemMyVnlkR2x2YmsxbGRHaHZaQ0k2V3lJamNISnBiV0Z5ZVNKZGZRIiwic2lnbmF0dXJlIjoiYnhvMHJyNDFMeFRCS2JfOWQ1UG4xeDBNYl8wc3VjRXRvQzFkejEyODFNNVprOEoxZDhxVTJDTlBlZmxxME42YlJ1YUNib19xa0E4V1dtd1pPcXFaOWcifQ",
            "proof": {
                "type": "EcdsaSecp256k1Signature2019",
                "created": "2023-07-13T07:00:17Z",
                "verificationMethod": "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ#primary",
                "proofPurpose": "assertionMethod",
                "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..y3qkdWxJZ9fvQyuXmrb-1Kyyoq1haL-K7KQY6lNbqZAqxmnOe06jHiiiW_pyAOXau-8foyPsoE3c8efmKQUbEA"
            }
        },
        {
            "@context": [
                "https://www.w3.org/2018/credentials/v1",
                "https://schema.affinidi.com/Person1V1-0.jsonld"
            ],
            "id": "claimId:Y49jL7OU1BrsjZNkx8RMg",
            "type": [
                "VerifiableCredential",
                "Person1"
            ],
            "holder": {
                "id": "did:elem:EiDtqCfec4Yt9DeAkNp5WHYsLXS0a_QsYPwa2S-b195HkA;elem:initial-state=eyJwcm90ZWN0ZWQiOiJleUp2Y0dWeVlYUnBiMjRpT2lKamNtVmhkR1VpTENKcmFXUWlPaUlqY0hKcGJXRnllU0lzSW1Gc1p5STZJa1ZUTWpVMlN5SjkiLCJwYXlsb2FkIjoiZXlKQVkyOXVkR1Y0ZENJNkltaDBkSEJ6T2k4dmR6TnBaQzV2Y21jdmMyVmpkWEpwZEhrdmRqSWlMQ0p3ZFdKc2FXTkxaWGtpT2x0N0ltbGtJam9pSTNCeWFXMWhjbmtpTENKMWMyRm5aU0k2SW5OcFoyNXBibWNpTENKMGVYQmxJam9pVTJWamNESTFObXN4Vm1WeWFXWnBZMkYwYVc5dVMyVjVNakF4T0NJc0luQjFZbXhwWTB0bGVVaGxlQ0k2SWpBeVltUmlPV0ppTkRGbU0yWmtaV0UwTWpkbU56VmxOREpoTm1JME4yTXhaRFExWkRRMk9ERXhZalprWWpkaE16VXdNV0ZqTVdKaU5EazJNV1UzWXpjd1lTSjlMSHNpYVdRaU9pSWpjbVZqYjNabGNua2lMQ0oxYzJGblpTSTZJbkpsWTI5MlpYSjVJaXdpZEhsd1pTSTZJbE5sWTNBeU5UWnJNVlpsY21sbWFXTmhkR2x2Ymt0bGVUSXdNVGdpTENKd2RXSnNhV05MWlhsSVpYZ2lPaUl3TTJVMVlUUTVPVE0yTlRZMllXUmtaall3TkRoaU0yRTBObVU0TUdFd1pUZzNZbVptTlRJM05URXpZekkwT1dFd1pqY3haRGsyTVdKaFpHTXhNakJqWW1VaWZWMHNJbUYxZEdobGJuUnBZMkYwYVc5dUlqcGJJaU53Y21sdFlYSjVJbDBzSW1GemMyVnlkR2x2YmsxbGRHaHZaQ0k2V3lJamNISnBiV0Z5ZVNKZGZRIiwic2lnbmF0dXJlIjoieUJtc3hHVUdReVlYYm81bURoUE1EX1h5Q3AyYkFPRzhNSTJxNmtmdnNWWWFiLXpRaG1KVU9tM0ppSUlJQ3ZONGRkcC1NUUJXQ2IzdWlmaHR6N2VoV2cifQ"
            },
            "credentialSubject": {
                "firstname": "ParameshX",
                "lastname": "KamarthiX",
                "dateofbirth": "1983-08-24"
            },
            "credentialSchema": {
                "id": "https://schema.affinidi.com/Person1V1-0.json",
                "type": "JsonSchemaValidator2018"
            },
            "issuanceDate": "2023-07-14T04:24:47.473Z",
            "issuer": "did:elem:EiDtqCfec4Yt9DeAkNp5WHYsLXS0a_QsYPwa2S-b195HkA;elem:initial-state=eyJwcm90ZWN0ZWQiOiJleUp2Y0dWeVlYUnBiMjRpT2lKamNtVmhkR1VpTENKcmFXUWlPaUlqY0hKcGJXRnllU0lzSW1Gc1p5STZJa1ZUTWpVMlN5SjkiLCJwYXlsb2FkIjoiZXlKQVkyOXVkR1Y0ZENJNkltaDBkSEJ6T2k4dmR6TnBaQzV2Y21jdmMyVmpkWEpwZEhrdmRqSWlMQ0p3ZFdKc2FXTkxaWGtpT2x0N0ltbGtJam9pSTNCeWFXMWhjbmtpTENKMWMyRm5aU0k2SW5OcFoyNXBibWNpTENKMGVYQmxJam9pVTJWamNESTFObXN4Vm1WeWFXWnBZMkYwYVc5dVMyVjVNakF4T0NJc0luQjFZbXhwWTB0bGVVaGxlQ0k2SWpBeVltUmlPV0ppTkRGbU0yWmtaV0UwTWpkbU56VmxOREpoTm1JME4yTXhaRFExWkRRMk9ERXhZalprWWpkaE16VXdNV0ZqTVdKaU5EazJNV1UzWXpjd1lTSjlMSHNpYVdRaU9pSWpjbVZqYjNabGNua2lMQ0oxYzJGblpTSTZJbkpsWTI5MlpYSjVJaXdpZEhsd1pTSTZJbE5sWTNBeU5UWnJNVlpsY21sbWFXTmhkR2x2Ymt0bGVUSXdNVGdpTENKd2RXSnNhV05MWlhsSVpYZ2lPaUl3TTJVMVlUUTVPVE0yTlRZMllXUmtaall3TkRoaU0yRTBObVU0TUdFd1pUZzNZbVptTlRJM05URXpZekkwT1dFd1pqY3haRGsyTVdKaFpHTXhNakJqWW1VaWZWMHNJbUYxZEdobGJuUnBZMkYwYVc5dUlqcGJJaU53Y21sdFlYSjVJbDBzSW1GemMyVnlkR2x2YmsxbGRHaHZaQ0k2V3lJamNISnBiV0Z5ZVNKZGZRIiwic2lnbmF0dXJlIjoieUJtc3hHVUdReVlYYm81bURoUE1EX1h5Q3AyYkFPRzhNSTJxNmtmdnNWWWFiLXpRaG1KVU9tM0ppSUlJQ3ZONGRkcC1NUUJXQ2IzdWlmaHR6N2VoV2cifQ",
            "proof": {
                "type": "EcdsaSecp256k1Signature2019",
                "created": "2023-07-14T04:24:47Z",
                "verificationMethod": "did:elem:EiDtqCfec4Yt9DeAkNp5WHYsLXS0a_QsYPwa2S-b195HkA#primary",
                "proofPurpose": "assertionMethod",
                "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..sTLAP8QsURI-HqCY4GVC8cX-wbCxkuUlHMFC6KqVJAMPzgLT7PYvexvCX36xguTfPyhKQu9d7l6pDjEv0m4nzw"
            }
        }
    ],
    VCsList: [
        {
            "@context": ["https://www.w3.org/2018/credentials/v1", "https://schema.affinidi.com/EmailV1-0.jsonld"],
            "id": "claimId:cc87f27c1120c639",
            "type": ["VerifiableCredential", "Email"],
            "holder": {
                "id": "did:elem:EiAj_r-lhxVqd2NOFt0QhpdTx1JH4iAF_HqIktYwDqKMEg;elem:initial-state=eyJwcm90ZWN0ZWQiOiJleUp2Y0dWeVlYUnBiMjRpT2lKamNtVmhkR1VpTENKcmFXUWlPaUlqY0hKcGJXRnllU0lzSW1Gc1p5STZJa1ZUTWpVMlN5SjkiLCJwYXlsb2FkIjoiZXlKQVkyOXVkR1Y0ZENJNkltaDBkSEJ6T2k4dmR6TnBaQzV2Y21jdmMyVmpkWEpwZEhrdmRqSWlMQ0p3ZFdKc2FXTkxaWGtpT2x0N0ltbGtJam9pSTNCeWFXMWhjbmtpTENKMWMyRm5aU0k2SW5OcFoyNXBibWNpTENKMGVYQmxJam9pVTJWamNESTFObXN4Vm1WeWFXWnBZMkYwYVc5dVMyVjVNakF4T0NJc0luQjFZbXhwWTB0bGVVaGxlQ0k2SWpBeVlXSTJaRE13TlRRek5Ua3dNMlExT1RWak9UVTRZelkxTWpsalpUa3haV0pqTTJWbFpERTROMlF4WTJFeVpEWmhObUpoTm1Vek5qUXhNMkkxTWpZeU55SjlMSHNpYVdRaU9pSWpjbVZqYjNabGNua2lMQ0oxYzJGblpTSTZJbkpsWTI5MlpYSjVJaXdpZEhsd1pTSTZJbE5sWTNBeU5UWnJNVlpsY21sbWFXTmhkR2x2Ymt0bGVUSXdNVGdpTENKd2RXSnNhV05MWlhsSVpYZ2lPaUl3TTJJek9UUm1NVFV5WXpnMlpEZzNaR1l3T1dReU16Z3haREF6TXpSaFpEUTVNVE15TTJWbE1EQXdZelkwTURKbU56bGtOemcwWXpKbFpETTJNMlprWWpNaWZWMHNJbUYxZEdobGJuUnBZMkYwYVc5dUlqcGJJaU53Y21sdFlYSjVJbDBzSW1GemMyVnlkR2x2YmsxbGRHaHZaQ0k2V3lJamNISnBiV0Z5ZVNKZGZRIiwic2lnbmF0dXJlIjoiUS1KVUtSZWQ5aS1BdFc0cGdZeUo3R0VpRzBIc2lpdS0zTC1fNnJlUDNjNGZSQzdIaWVDSGRBTGEwV3BDakhBZjdLWFJFR3JFYjA1UVdnY3I4cFdLalEifQ"
            },
            "credentialSubject": {
                "email": "paramesh.k@affinidi.com"
            },
            "credentialSchema": {
                "id": "https://schema.affinidi.com/EmailV1-0.json",
                "type": "JsonSchemaValidator2018"
            },
            "issuanceDate": "2023-08-04T04:26:25.359Z",
            "issuer": "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ;elem:initial-state=eyJwcm90ZWN0ZWQiOiJleUp2Y0dWeVlYUnBiMjRpT2lKamNtVmhkR1VpTENKcmFXUWlPaUlqY0hKcGJXRnllU0lzSW1Gc1p5STZJa1ZUTWpVMlN5SjkiLCJwYXlsb2FkIjoiZXlKQVkyOXVkR1Y0ZENJNkltaDBkSEJ6T2k4dmR6TnBaQzV2Y21jdmMyVmpkWEpwZEhrdmRqSWlMQ0p3ZFdKc2FXTkxaWGtpT2x0N0ltbGtJam9pSTNCeWFXMWhjbmtpTENKMWMyRm5aU0k2SW5OcFoyNXBibWNpTENKMGVYQmxJam9pVTJWamNESTFObXN4Vm1WeWFXWnBZMkYwYVc5dVMyVjVNakF4T0NJc0luQjFZbXhwWTB0bGVVaGxlQ0k2SWpBeU5UQmtZbVZpWmpsaVpEYzRaRFJtWldFNU5tSmlaVGxsWVRneE9EVXlPVEEzWmpJek1XWTJNVEExWlRCaE5XTTBNRFUwWXpoaVpESTBabVZqTWpJMlppSjlMSHNpYVdRaU9pSWpjbVZqYjNabGNua2lMQ0oxYzJGblpTSTZJbkpsWTI5MlpYSjVJaXdpZEhsd1pTSTZJbE5sWTNBeU5UWnJNVlpsY21sbWFXTmhkR2x2Ymt0bGVUSXdNVGdpTENKd2RXSnNhV05MWlhsSVpYZ2lPaUl3TTJZNE1XSXhNamRqT0RSaE5tTm1aRFF5WXpjek5XTmhaalEyWWpJMFkyUXhNalJoTVRFMllqVmhOR1JoWVdZNFlUZzRZVGRpTkdVd1lUbGhNalZpWlRNaWZWMHNJbUYxZEdobGJuUnBZMkYwYVc5dUlqcGJJaU53Y21sdFlYSjVJbDBzSW1GemMyVnlkR2x2YmsxbGRHaHZaQ0k2V3lJamNISnBiV0Z5ZVNKZGZRIiwic2lnbmF0dXJlIjoiYnhvMHJyNDFMeFRCS2JfOWQ1UG4xeDBNYl8wc3VjRXRvQzFkejEyODFNNVprOEoxZDhxVTJDTlBlZmxxME42YlJ1YUNib19xa0E4V1dtd1pPcXFaOWcifQ",
            "proof": {
                "type": "EcdsaSecp256k1Signature2019",
                "created": "2023-08-04T04:26:29Z",
                "verificationMethod": "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ#primary",
                "proofPurpose": "assertionMethod",
                "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..w-OaTfzV67xXfc667WMfSGGEh3KqYivSPuFtNAVkaKcK24lCfE1yONdQV8yQs8TtEAvZsV5gGWFXmwG1NOtLNg"
            }
        }, {
            "@context": ["https://www.w3.org/2018/credentials/v1", "https://schema.affinidi.com/UserProfileV2-0.jsonld"],
            "id": "claimId:wxEcXKWfmAL2ha1PVJCpe",
            "type": ["VerifiableCredential", "UserProfile"],
            "holder": {
                "id": "did:elem:EiAj_r-lhxVqd2NOFt0QhpdTx1JH4iAF_HqIktYwDqKMEg;elem:initial-state=eyJwcm90ZWN0ZWQiOiJleUp2Y0dWeVlYUnBiMjRpT2lKamNtVmhkR1VpTENKcmFXUWlPaUlqY0hKcGJXRnllU0lzSW1Gc1p5STZJa1ZUTWpVMlN5SjkiLCJwYXlsb2FkIjoiZXlKQVkyOXVkR1Y0ZENJNkltaDBkSEJ6T2k4dmR6TnBaQzV2Y21jdmMyVmpkWEpwZEhrdmRqSWlMQ0p3ZFdKc2FXTkxaWGtpT2x0N0ltbGtJam9pSTNCeWFXMWhjbmtpTENKMWMyRm5aU0k2SW5OcFoyNXBibWNpTENKMGVYQmxJam9pVTJWamNESTFObXN4Vm1WeWFXWnBZMkYwYVc5dVMyVjVNakF4T0NJc0luQjFZbXhwWTB0bGVVaGxlQ0k2SWpBeVlXSTJaRE13TlRRek5Ua3dNMlExT1RWak9UVTRZelkxTWpsalpUa3haV0pqTTJWbFpERTROMlF4WTJFeVpEWmhObUpoTm1Vek5qUXhNMkkxTWpZeU55SjlMSHNpYVdRaU9pSWpjbVZqYjNabGNua2lMQ0oxYzJGblpTSTZJbkpsWTI5MlpYSjVJaXdpZEhsd1pTSTZJbE5sWTNBeU5UWnJNVlpsY21sbWFXTmhkR2x2Ymt0bGVUSXdNVGdpTENKd2RXSnNhV05MWlhsSVpYZ2lPaUl3TTJJek9UUm1NVFV5WXpnMlpEZzNaR1l3T1dReU16Z3haREF6TXpSaFpEUTVNVE15TTJWbE1EQXdZelkwTURKbU56bGtOemcwWXpKbFpETTJNMlprWWpNaWZWMHNJbUYxZEdobGJuUnBZMkYwYVc5dUlqcGJJaU53Y21sdFlYSjVJbDBzSW1GemMyVnlkR2x2YmsxbGRHaHZaQ0k2V3lJamNISnBiV0Z5ZVNKZGZRIiwic2lnbmF0dXJlIjoiUS1KVUtSZWQ5aS1BdFc0cGdZeUo3R0VpRzBIc2lpdS0zTC1fNnJlUDNjNGZSQzdIaWVDSGRBTGEwV3BDakhBZjdLWFJFR3JFYjA1UVdnY3I4cFdLalEifQ"
            },
            "credentialSubject": {
                "givenName": "Paramesh",
                "updatedAt": 1691123937632,
                "address": {}
            },
            "credentialSchema": {
                "id": "https://schema.affinidi.com/UserProfileV2-0.json",
                "type": "JsonSchemaValidator2018"
            },
            "issuanceDate": "2023-08-04T04:38:57.658Z",
            "issuer": "did:elem:EiAj_r-lhxVqd2NOFt0QhpdTx1JH4iAF_HqIktYwDqKMEg;elem:initial-state=eyJwcm90ZWN0ZWQiOiJleUp2Y0dWeVlYUnBiMjRpT2lKamNtVmhkR1VpTENKcmFXUWlPaUlqY0hKcGJXRnllU0lzSW1Gc1p5STZJa1ZUTWpVMlN5SjkiLCJwYXlsb2FkIjoiZXlKQVkyOXVkR1Y0ZENJNkltaDBkSEJ6T2k4dmR6TnBaQzV2Y21jdmMyVmpkWEpwZEhrdmRqSWlMQ0p3ZFdKc2FXTkxaWGtpT2x0N0ltbGtJam9pSTNCeWFXMWhjbmtpTENKMWMyRm5aU0k2SW5OcFoyNXBibWNpTENKMGVYQmxJam9pVTJWamNESTFObXN4Vm1WeWFXWnBZMkYwYVc5dVMyVjVNakF4T0NJc0luQjFZbXhwWTB0bGVVaGxlQ0k2SWpBeVlXSTJaRE13TlRRek5Ua3dNMlExT1RWak9UVTRZelkxTWpsalpUa3haV0pqTTJWbFpERTROMlF4WTJFeVpEWmhObUpoTm1Vek5qUXhNMkkxTWpZeU55SjlMSHNpYVdRaU9pSWpjbVZqYjNabGNua2lMQ0oxYzJGblpTSTZJbkpsWTI5MlpYSjVJaXdpZEhsd1pTSTZJbE5sWTNBeU5UWnJNVlpsY21sbWFXTmhkR2x2Ymt0bGVUSXdNVGdpTENKd2RXSnNhV05MWlhsSVpYZ2lPaUl3TTJJek9UUm1NVFV5WXpnMlpEZzNaR1l3T1dReU16Z3haREF6TXpSaFpEUTVNVE15TTJWbE1EQXdZelkwTURKbU56bGtOemcwWXpKbFpETTJNMlprWWpNaWZWMHNJbUYxZEdobGJuUnBZMkYwYVc5dUlqcGJJaU53Y21sdFlYSjVJbDBzSW1GemMyVnlkR2x2YmsxbGRHaHZaQ0k2V3lJamNISnBiV0Z5ZVNKZGZRIiwic2lnbmF0dXJlIjoiUS1KVUtSZWQ5aS1BdFc0cGdZeUo3R0VpRzBIc2lpdS0zTC1fNnJlUDNjNGZSQzdIaWVDSGRBTGEwV3BDakhBZjdLWFJFR3JFYjA1UVdnY3I4cFdLalEifQ",
            "proof": {
                "type": "EcdsaSecp256k1Signature2019",
                "created": "2023-08-04T04:38:57Z",
                "verificationMethod": "did:elem:EiAj_r-lhxVqd2NOFt0QhpdTx1JH4iAF_HqIktYwDqKMEg#primary",
                "proofPurpose": "assertionMethod",
                "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..J6mgQOb8l8zzIRKpWuQgso0Uo2pwjrWBv14KrSX4cpBvnDl9mF5omibM153qUVJ1zoO3kunoCCtN7mqstSEEUA"
            }
        }
    ]
}

const pex = new PEX()
const match = pex.selectFrom(
    input.presentationDefinitionTest,
    input.VCsList1,
)


console.log('errors', JSON.stringify(match.errors))
//console.log('matches', match.matches)

match.verifiableCredential.forEach( vc=> console.log(vc.type[1], vc.credentialSubject));