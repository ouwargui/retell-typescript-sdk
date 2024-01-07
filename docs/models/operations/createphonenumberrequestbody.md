# CreatePhoneNumberRequestBody


## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `agentId`                                                                                                               | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | Unique agent id to associate with this phone number. Can be updated with [Update Phone Agent](/api/update-phone-agent). | oBeDLoLOeuAbiuaMFXRtDOLriTJ5tSxD                                                                                        |
| `areaCode`                                                                                                              | *number*                                                                                                                | :heavy_minus_sign:                                                                                                      | The desired area code of the number. Must be valid US area code, which is a 3 digit integer.                            | 415                                                                                                                     |