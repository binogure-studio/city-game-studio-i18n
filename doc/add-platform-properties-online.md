## online Type

`object` ([Details](add-platform-properties-online.md))

# undefined Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                      |
| :------------------------ | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [compatible](#compatible) | `boolean` | Required | cannot be null | [Add a new platform](add-platform-properties-online-properties-compatible.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/online/properties/compatible") |
| [sell_ratio](#sell_ratio) | `number`  | Required | cannot be null | [Add a new platform](add-platform-properties-online-properties-sell_ratio.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/online/properties/sell_ratio") |

## compatible

True if the platform is online, false otherwise


`compatible`

-   is required
-   Type: `boolean`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-online-properties-compatible.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/online/properties/compatible")

### compatible Type

`boolean`

## sell_ratio

Sell ratio of the platform (never above 1)


`sell_ratio`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-online-properties-sell_ratio.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/online/properties/sell_ratio")

### sell_ratio Type

`number`

### sell_ratio Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`
