# ListCallsRequest


## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `filterCriteria`                                                                                             | [operations.FilterCriteria](../../models/operations/filtercriteria.md)                                       | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `limit`                                                                                                      | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | Limit the number of calls returned.                                                                          |
| `sortOrder`                                                                                                  | [operations.SortOrder](../../models/operations/sortorder.md)                                                 | :heavy_minus_sign:                                                                                           | The calls will be sorted by `start_timestamp`, whether to return the calls in ascending or descending order. |