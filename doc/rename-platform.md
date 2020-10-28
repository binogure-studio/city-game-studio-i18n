# Platform Schema

```txt
http://example.com/rename.platform.json
```

Rename a platform


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [rename-platform.schema.json](../out/rename-platform.schema.json "open original schema") |

## Platform Type

`object` ([Platform](rename-platform.md))

# Platform Properties

| Property      | Type      | Required | Nullable       | Defined by                                                                                                     |
| :------------ | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------- |
| [name](#name) | `string`  | Required | cannot be null | [Platform](rename-platform-properties-name.md "http&#x3A;//example.com/rename.platform.json#/properties/name") |
| [id](#id)     | `integer` | Required | cannot be null | [Platform](rename-platform-properties-id.md "http&#x3A;//example.com/rename.platform.json#/properties/id")     |

## name

Platform's name


`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Platform](rename-platform-properties-name.md "http&#x3A;//example.com/rename.platform.json#/properties/name")

### name Type

`string`

## id

Platform to rename


`id`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Platform](rename-platform-properties-id.md "http&#x3A;//example.com/rename.platform.json#/properties/id")

### id Type

`integer`

### id Constraints

**minimum**: the value of this number must greater than or equal to: `1`
