
const { PEX } = require('@sphereon/pex')

const input = {
  presentationDefinition: {
    "id": "vp_combined_email_user_profile_combined",
    "submission_requirements": [{ "rule": "pick", "min": 1, "from": "A" }],
    "input_descriptors": [
      {
        "id": "customer_data",
        "name": "Email VC",
        "purpose": "we can get vc of email schema",
        "group": ["A"],
        "constraints": {
          "fields": [
            {
              "path": ["$.company"],
              "filter": {
                "type": "string",
                "pattern": "^affinidi$"
              }
            }
          ]
        }
      }
    ]
  }
  ,
  VCs: [
    {
      "name": "paramesh",
      "company": "affinidi",
      "phone": "1223"
    },
    {
      "name": "grajesh",
      "company": "meta",
      "phone": "345"
    },{
      "name": "Sanjay",
      "company": "affinidi",
      "phone": "abc1233"
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

match.verifiableCredential.forEach(vc => console.log(vc));