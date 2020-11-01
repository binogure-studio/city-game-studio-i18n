## cost Type

`object` ([Costs](add-platform-properties-costs.md))

# Costs Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                                                             |
| :------------------ | --------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [license](#license) | `integer` | Required | cannot be null | [Add a new platform](add-platform-properties-costs-properties-license.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/cost/properties/license") |
| [dev](#dev)         | `integer` | Required | cannot be null | [Add a new platform](add-platform-properties-costs-properties-dev.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/cost/properties/dev")         |

## license

License costs of the platform


`license`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-costs-properties-license.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/cost/properties/license")

### license Type

`integer`

### license Constraints

**maximum**: the value of this number must smaller than or equal to: `999999999`

**minimum**: the value of this number must greater than or equal to: `1`

## dev

Development costs of the platform


`dev`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-costs-properties-dev.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/cost/properties/dev")

### dev Type

`integer`

### dev Constraints

**maximum**: the value of this number must smaller than or equal to: `999999999`

**minimum**: the value of this number must greater than or equal to: `1500`
