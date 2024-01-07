# PhoneNumber


## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        | Example                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `agentId`                                                                                                                                                                                          | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | Unique agent id to associate with this phone number. Can be updated with [Update Phone Agent](/api/update-phone-agent).                                                                            | oBeDLoLOeuAbiuaMFXRtDOLriTJ5tSxD                                                                                                                                                                   |
| `areaCode`                                                                                                                                                                                         | *number*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | The area code of the number. This is a 3 digit integer.                                                                                                                                            | 415                                                                                                                                                                                                |
| `lastModificationTimestamp`                                                                                                                                                                        | *number*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | Last modification timestamp (milliseconds since epoch). Either the time of last update or creation if no updates available.                                                                        | 1703413636133                                                                                                                                                                                      |
| `phoneNumber`                                                                                                                                                                                      | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | Unique phone number you purchased in E.164 format. This number is set up to handle inbound phone calls, and can be used for outbound phone calls with [Create Phone Call](/api/create-phone-call). | +14159095857                                                                                                                                                                                       |
| `phoneNumberPretty`                                                                                                                                                                                | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | Unique phone number you purchased in pretty human readable format. Example: (415) 909-5857.                                                                                                        | (415) 909-5857                                                                                                                                                                                     |