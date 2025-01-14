
import { PEX } from '@sphereon/pex'

const input = {
  presentationDefinition: {
    "id": "vp_combined_email_user_profile_combined",
    "submission_requirements": [
      {
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
              "path": ["$.type"],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "Email"
                }
              }
            },
            {
              "path": ["$.credentialSubject.email"],
              "purpose": "Check if VC contains email field",
              "filter": {
                "type": "string"
              }
            },
            {
              "path": ["$.issuer"],
              "purpose": "Check if VC Issuer is Trusted",
              "filter": {
                "type": "string",
                "pattern": "^did:key:zQ3shtMGCU89kb2RMknNZcYGUcHW8P6Cq3CoQyvoDs7Qqh33N|^did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ"
              }
            }
          ]
        }
      },
      {
        "id": "mobile_vc",
        "name": "mobile VC",
        "purpose": "Check if VC data contains necessary fields",
        "group": ["A"],
        "constraints": {
          "fields": [
            {
              "path": ["$.type"],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "HITPhoneNumber"
                }
              }
            },
            {
              "path": ["$.credentialSubject.phoneNumber"],
              "purpose": "phone Number",
              "filter": {
                "type": "string"
              }
            }
          ]
        }
      },
      {
        "id": "givenname_vc",
        "name": "givenname VC",
        "purpose": "Check if VC data contains necessary fields",
        "group": ["A"],
        "constraints": {
          "fields": [
            {
              "path": ["$.type"],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "HITGivenName"
                }
              }
            },
            {
              "path": ["$.credentialSubject.givenName"],
              "purpose": "given Name",
              "filter": {
                "type": "string"
              }
            }
          ]
        }
      },
      {
        "id": "familyName",
        "name": "familyName VC",
        "purpose": "Check if VC data contains necessary fields",
        "group": ["A"],
        "constraints": {
          "fields": [
            {
              "path": ["$.type"],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "HITFamilyName"
                }
              }
            },
            {
              "path": ["$.credentialSubject.familyName"],
              "purpose": "family Name",
              "filter": {
                "type": "string"
              }
            }
          ]
        }
      },
      {
        "id": "middleName",
        "name": "middleName VC",
        "purpose": "Check if VC data contains necessary fields",
        "group": ["A"],
        "constraints": {
          "fields": [
            {
              "path": ["$.type"],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "HITMiddleName"
                }
              }
            },
            {
              "path": ["$.credentialSubject.middleName"],
              "purpose": "middleName",
              "filter": {
                "type": "string"
              }
            }
          ]
        }
      },
      {
        "id": "nickname",
        "name": "nickname",
        "purpose": "Check if VC data contains necessary fields",
        "group": ["A"],
        "constraints": {
          "fields": [
            {
              "path": ["$.type"],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "HITNickname"
                }
              }
            },
            {
              "path": ["$.credentialSubject.nickname"],
              "purpose": "nickname",
              "filter": {
                "type": "string"
              }
            }
          ]
        }
      },
      {
        "id": "birthdate",
        "name": "birthdate",
        "purpose": "Check if VC data contains necessary fields",
        "group": ["A"],
        "constraints": {
          "fields": [
            {
              "path": ["$.type"],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "HITBirthdate"
                }
              }
            },
            {
              "path": ["$.credentialSubject.birthdate"],
              "purpose": "birthdate",
              "filter": {
                "type": "string"
              }
            }
          ]
        }
      },
      {
        "id": "gender",
        "name": "gender",
        "purpose": "Check if VC data contains necessary fields",
        "group": ["A"],
        "constraints": {
          "fields": [
            {
              "path": ["$.type"],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "HITGender"
                }
              }
            },
            {
              "path": ["$.credentialSubject.gender"],
              "purpose": "gender",
              "filter": {
                "type": "string"
              }
            }
          ]
        }
      },
      {
        "id": "picture",
        "name": "picture",
        "purpose": "Check if VC data contains necessary fields",
        "group": ["A"],
        "constraints": {
          "fields": [
            {
              "path": ["$.type"],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "HITPicture"
                }
              }
            },
            {
              "path": ["$.credentialSubject.picture"],
              "purpose": "picture",
              "filter": {
                "type": "string"
              }
            }
          ]
        }
      },
      {
        "id": "address",
        "name": "address",
        "purpose": "Check if VC data contains necessary fields",
        "group": ["A"],
        "constraints": {
          "fields": [
            {
              "path": ["$.type"],
              "purpose": "Check if VC type is correct",
              "filter": {
                "type": "array",
                "contains": {
                  "type": "string",
                  "pattern": "HITAddress"
                }
              }
            },
            {
              "path": ["$.credentialSubject.formatted"]
            },
            {
              "path": ["$.credentialSubject.locality"]
            },
            {
              "path": ["$.credentialSubject.postalCode"]
            },
            {
              "path": ["$.credentialSubject.country"]
            }
          ]
        }
      }
    ]
  }
  ,
  VCs: [
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://schema.affinidi.com/EmailV1-0.jsonld"
      ],
      "id": "claimId:be4426939df49669",
      "type": [
        "VerifiableCredential",
        "Email"
      ],
      "holder": {
        "id": "did:key:zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE"
      },
      "issuanceDate": "2023-09-15T06:24:14.839Z",
      "issuer": "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ;elem:initial-state=eyJwcm90ZWN0ZWQiOiJleUp2Y0dWeVlYUnBiMjRpT2lKamNtVmhkR1VpTENKcmFXUWlPaUlqY0hKcGJXRnllU0lzSW1Gc1p5STZJa1ZUTWpVMlN5SjkiLCJwYXlsb2FkIjoiZXlKQVkyOXVkR1Y0ZENJNkltaDBkSEJ6T2k4dmR6TnBaQzV2Y21jdmMyVmpkWEpwZEhrdmRqSWlMQ0p3ZFdKc2FXTkxaWGtpT2x0N0ltbGtJam9pSTNCeWFXMWhjbmtpTENKMWMyRm5aU0k2SW5OcFoyNXBibWNpTENKMGVYQmxJam9pVTJWamNESTFObXN4Vm1WeWFXWnBZMkYwYVc5dVMyVjVNakF4T0NJc0luQjFZbXhwWTB0bGVVaGxlQ0k2SWpBeU5UQmtZbVZpWmpsaVpEYzRaRFJtWldFNU5tSmlaVGxsWVRneE9EVXlPVEEzWmpJek1XWTJNVEExWlRCaE5XTTBNRFUwWXpoaVpESTBabVZqTWpJMlppSjlMSHNpYVdRaU9pSWpjbVZqYjNabGNua2lMQ0oxYzJGblpTSTZJbkpsWTI5MlpYSjVJaXdpZEhsd1pTSTZJbE5sWTNBeU5UWnJNVlpsY21sbWFXTmhkR2x2Ymt0bGVUSXdNVGdpTENKd2RXSnNhV05MWlhsSVpYZ2lPaUl3TTJZNE1XSXhNamRqT0RSaE5tTm1aRFF5WXpjek5XTmhaalEyWWpJMFkyUXhNalJoTVRFMllqVmhOR1JoWVdZNFlUZzRZVGRpTkdVd1lUbGhNalZpWlRNaWZWMHNJbUYxZEdobGJuUnBZMkYwYVc5dUlqcGJJaU53Y21sdFlYSjVJbDBzSW1GemMyVnlkR2x2YmsxbGRHaHZaQ0k2V3lJamNISnBiV0Z5ZVNKZGZRIiwic2lnbmF0dXJlIjoiYnhvMHJyNDFMeFRCS2JfOWQ1UG4xeDBNYl8wc3VjRXRvQzFkejEyODFNNVprOEoxZDhxVTJDTlBlZmxxME42YlJ1YUNib19xa0E4V1dtd1pPcXFaOWcifQ",
      "credentialSubject": {
        "email": "paramesh.k@affinidi.com"
      },
      "credentialSchema": {
        "type": "JsonSchemaValidator2018",
        "id": "https://schema.affinidi.com/EmailV1-0.json"
      },
      "proof": {
        "type": "EcdsaSecp256k1Signature2019",
        "created": "2023-09-15T06:24:21Z",
        "verificationMethod": "did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ#primary",
        "proofPurpose": "assertionMethod",
        "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..-3x8s9Z4Q24pob61kXP-MI3CWj1BovH7MVKk-8Lnv11GT7M1vrOFcXHqDVoZiMrYtmrAJK1oYXO0S6FTiTlwiw"
      }
    },
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://schema.affinidi.io/HITGivenNameV1R1.jsonld"
      ],
      "id": "claimId:PNb4zAOkmlaHMu-P8iZK2",
      "type": [
        "VerifiableCredential",
        "HITGivenName"
      ],
      "holder": {
        "id": "did:key:zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE"
      },
      "credentialSubject": {
        "givenName": "Paramesh"
      },
      "credentialSchema": {
        "id": "https://schema.affinidi.io/HITGivenNameV1R1.json",
        "type": "JsonSchemaValidator2018"
      },
      "issuanceDate": "2023-11-22T04:24:24.348Z",
      "issuer": "did:key:zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE",
      "proof": {
        "type": "EcdsaSecp256k1Signature2019",
        "created": "2023-11-22T04:24:24Z",
        "verificationMethod": "did:key:zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE#zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE",
        "proofPurpose": "assertionMethod",
        "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..1-tLwQ8bueGf10TvEovQckkjhML_8NEEiQw33v2xg5AKnuNmaU4EsZ6tSrq-PQqhJMpLy5dme_leu0i6LGPZoA"
      }
    },
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://schema.affinidi.io/HITGenderV1R0.jsonld"
      ],
      "id": "claimId:6haYDeuEp_5TO-Z2rR6_X",
      "type": [
        "VerifiableCredential",
        "HITGender"
      ],
      "holder": {
        "id": "did:key:zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE"
      },
      "credentialSubject": {
        "gender": "male"
      },
      "credentialSchema": {
        "id": "https://schema.affinidi.io/HITGenderV1R0.json",
        "type": "JsonSchemaValidator2018"
      },
      "issuanceDate": "2023-11-22T04:24:24.348Z",
      "issuer": "did:key:zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE",
      "proof": {
        "type": "EcdsaSecp256k1Signature2019",
        "created": "2023-11-22T04:24:24Z",
        "verificationMethod": "did:key:zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE#zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE",
        "proofPurpose": "assertionMethod",
        "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..6TnnYqEGkChWVphzjLAjmmGowQMb4NlqPfvK6J7Sedx557PLAcB4JvkKj3nVjg73tDLnqOAfKjvewF8JjMqylw"
      }
    },
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://schema.affinidi.io/HITPhoneNumberV1R0.jsonld"
      ],
      "id": "claimId:8gO1KZzuvbOpOZ87O-Sap",
      "type": [
        "VerifiableCredential",
        "HITPhoneNumber"
      ],
      "holder": {
        "id": "did:key:zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE"
      },
      "credentialSubject": {
        "phoneNumber": "9980166067"
      },
      "credentialSchema": {
        "id": "https://schema.affinidi.io/HITPhoneNumberV1R0.json",
        "type": "JsonSchemaValidator2018"
      },
      "issuanceDate": "2023-11-22T04:24:24.349Z",
      "issuer": "did:key:zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE",
      "proof": {
        "type": "EcdsaSecp256k1Signature2019",
        "created": "2023-11-22T04:24:24Z",
        "verificationMethod": "did:key:zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE#zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE",
        "proofPurpose": "assertionMethod",
        "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..L3I9hl-BDaRWFY5zz59DYLtiILZKGkbJp5ATB4xbXtoOFBRNlh9_LlUcCJv7_70MS_fRnTFrI1_wg_41g8iT8Q"
      }
    },
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://schema.affinidi.io/HITContactsV1R0.jsonld"
      ],
      "id": "claimId:PP55t7zlKuRPLSR9PWQBu",
      "type": [
        "VerifiableCredential",
        "HITContacts"
      ],
      "holder": {
        "id": "did:key:zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE"
      },
      "credentialSubject": {
        "phoneNumber": "9980166067",
        "email": "paramesh.k@affinidi.com"
      },
      "credentialSchema": {
        "id": "https://schema.affinidi.io/HITContactsV1R0.json",
        "type": "JsonSchemaValidator2018"
      },
      "issuanceDate": "2023-11-22T04:24:24.349Z",
      "issuer": "did:key:zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE",
      "proof": {
        "type": "EcdsaSecp256k1Signature2019",
        "created": "2023-11-22T04:24:24Z",
        "verificationMethod": "did:key:zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE#zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE",
        "proofPurpose": "assertionMethod",
        "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..iRq8LBuDU4HtFO6Q4c91O7-3K0511H3em40T5kCGhXE5rFG1Af4keb4VZ9Nr-DuA2zk7vKipVUcbolb1pFtr3w"
      }
    },
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://schema.affinidi.io/HITIdentityV1R0.jsonld"
      ],
      "id": "claimId:O3nVpQq_oeT7c4LGFgho1",
      "type": [
        "VerifiableCredential",
        "HITIdentity"
      ],
      "holder": {
        "id": "did:key:zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE"
      },
      "credentialSubject": {
        "gender": "male"
      },
      "credentialSchema": {
        "id": "https://schema.affinidi.io/HITIdentityV1R0.json",
        "type": "JsonSchemaValidator2018"
      },
      "issuanceDate": "2023-11-22T04:24:24.349Z",
      "issuer": "did:key:zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE",
      "proof": {
        "type": "EcdsaSecp256k1Signature2019",
        "created": "2023-11-22T04:24:24Z",
        "verificationMethod": "did:key:zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE#zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE",
        "proofPurpose": "assertionMethod",
        "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..hBb_l6xg_heClfDOHS8s5TZ1ldfuwj20u6C2TsktXl1XfVRfzBvBOO0c1KguLboNHXd8ITSsizx8kAltoXT7Gg"
      }
    },
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://schema.affinidi.io/HITAddressV1R0.jsonld"
      ],
      "id": "claimId:O3nVpQq_oeT7c4LGFgho1",
      "type": [
        "VerifiableCredential",
        "HITAddress"
      ],
      "holder": {
        "id": "did:key:zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE"
      },
      "credentialSubject": {
        "formatted": "Green Glen Layout",
        "postalCode": "560103",
        "locality": "Bangalore",
        "country": "India"
    },
      "credentialSchema": {
        "id": "https://schema.affinidi.io/HITIdentityV1R0.json",
        "type": "JsonSchemaValidator2018"
      },
      "issuanceDate": "2023-11-22T04:24:24.349Z",
      "issuer": "did:key:zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE",
      "proof": {
        "type": "EcdsaSecp256k1Signature2019",
        "created": "2023-11-22T04:24:24Z",
        "verificationMethod": "did:key:zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE#zQ3shbmZmL5R7krQtrdsu9oMTu58ydZEMok23KzWNQw2NXPzE",
        "proofPurpose": "assertionMethod",
        "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..hBb_l6xg_heClfDOHS8s5TZ1ldfuwj20u6C2TsktXl1XfVRfzBvBOO0c1KguLboNHXd8ITSsizx8kAltoXT7Gg"
      }
    }
  ]
}

const pex = new PEX()
const match = pex.selectFrom(
  input.presentationDefinition,
  input.VCs,
)

console.log('errors', JSON.stringify(match))
console.log('matches', match.matches)

match.verifiableCredential.forEach(vc => console.log(vc.type[1], vc.credentialSubject));