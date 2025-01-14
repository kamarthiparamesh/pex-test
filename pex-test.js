
import { PEX } from '@sphereon/pex'

const input = {
  presentationDefinition: {
    "id": "vp_combined_email_user_profile_combined",
    "submission_requirements": [{ "rule": "pick", "min": 1, "from": "A" }],
    "input_descriptors": [
      {
        "id": "email_vc",
        "name": "Email VC",
        "purpose": "we can get vc of email schema",
        "group": ["A"],
        "constraints": {
          "fields": [
            {
              "path": ["$.credentialSchema.id"],
              "filter": {
                "type": "string",
                "pattern": "^https://schema.affinidi.com/EmailV1-0.json$"
              }
            }
          ]
        }
      },
      {
        "id": "profile_vc",
        "name": "profile VC type",
        "purpose": "Profile VC TEXXDD",
        "group": ["A"],
        "constraints": {
          "fields": [
            {
              "path": ["$.credentialSchema.id"],
              "filter": {
                "type": "string",
                "pattern": "^https://schema.affinidi.com/UserProfileV2-0.json$"
              }
            },
            {
              "path": ["$.credentialSubject.updatedAt"],
            }
          ]
        }
      },
    ]
  }
  ,
  VCs: [
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
  input.presentationDefinition,
  input.VCs,
)

console.log('errors', JSON.stringify(match))
console.log('matches', match.matches)

match.verifiableCredential.forEach(vc => console.log(vc.type[1], vc.credentialSubject));