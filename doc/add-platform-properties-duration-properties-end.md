# Untitled object in Platform Schema

```txt
http://example.com/add.platform.json#/properties/duration/properties/end
```

Discontinuation date of the platform


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [add-platform.schema.json\*](../out/add-platform.schema.json "open original schema") |

## end Type

`object` ([Details](add-platform-properties-duration-properties-end.md))

# undefined Properties

| Property        | Type      | Required | Nullable       | Defined by                                                                                                                                                                       |
| :-------------- | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [year](#year)   | `integer` | Required | cannot be null | [Platform](add-platform-properties-duration-properties-end-properties-year.md "http&#x3A;//example.com/add.platform.json#/properties/duration/properties/end/properties/year")   |
| [month](#month) | `integer` | Required | cannot be null | [Platform](add-platform-properties-duration-properties-end-properties-month.md "http&#x3A;//example.com/add.platform.json#/properties/duration/properties/end/properties/month") |

## year

Year


`year`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Platform](add-platform-properties-duration-properties-end-properties-year.md "http&#x3A;//example.com/add.platform.json#/properties/duration/properties/end/properties/year")

### year Type

`integer`

### year Constraints

**maximum**: the value of this number must smaller than or equal to: `9999`

**minimum**: the value of this number must greater than or equal to: `1970`

## month

Month


`month`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Platform](add-platform-properties-duration-properties-end-properties-month.md "http&#x3A;//example.com/add.platform.json#/properties/duration/properties/end/properties/month")

### month Type

`integer`

### month Constraints

**maximum**: the value of this number must smaller than or equal to: `12`

**minimum**: the value of this number must greater than or equal to: `1`
