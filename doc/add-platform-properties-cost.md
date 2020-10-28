# Untitled object in Platform Schema

```txt
http://example.com/add.platform.json#/properties/cost
```

Development and license costs


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [add-platform.schema.json\*](../out/add-platform.schema.json "open original schema") |

## cost Type

`object` ([Details](add-platform-properties-cost.md))

# undefined Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                                     |
| :------------------ | --------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| [license](#license) | `integer` | Required | cannot be null | [Platform](add-platform-properties-cost-properties-license.md "http&#x3A;//example.com/add.platform.json#/properties/cost/properties/license") |
| [dev](#dev)         | `integer` | Required | cannot be null | [Platform](add-platform-properties-cost-properties-dev.md "http&#x3A;//example.com/add.platform.json#/properties/cost/properties/dev")         |

## license

License costs of the platform


`license`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Platform](add-platform-properties-cost-properties-license.md "http&#x3A;//example.com/add.platform.json#/properties/cost/properties/license")

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
-   defined in: [Platform](add-platform-properties-cost-properties-dev.md "http&#x3A;//example.com/add.platform.json#/properties/cost/properties/dev")

### dev Type

`integer`

### dev Constraints

**maximum**: the value of this number must smaller than or equal to: `999999999`

**minimum**: the value of this number must greater than or equal to: `1500`
