# Manufacturer Schema

```txt
http://example.com/add.manufacturer.json
```

Add a manufacturer


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [add-manufacturer.schema.json](../out/add-manufacturer.schema.json "open original schema") |

## Manufacturer Type

`object` ([Manufacturer](add-manufacturer.md))

# Manufacturer Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                 |
| :------------------ | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)           | `string` | Required | cannot be null | [Manufacturer](add-manufacturer-properties-id.md "http&#x3A;//example.com/add.manufacturer.json#/properties/id")           |
| [company](#company) | `string` | Required | cannot be null | [Manufacturer](add-manufacturer-properties-company.md "http&#x3A;//example.com/add.manufacturer.json#/properties/company") |
| [name](#name)       | `string` | Required | cannot be null | [Manufacturer](add-manufacturer-properties-name.md "http&#x3A;//example.com/add.manufacturer.json#/properties/name")       |
| [avatar](#avatar)   | `image`  | Required | cannot be null | [Manufacturer](add-manufacturer-properties-avatar.md "http&#x3A;//example.com/add.manufacturer.json#/properties/avatar")   |

## id

UUID v4 (use <https://www.uuidgenerator.net/> to make one)


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Manufacturer](add-manufacturer-properties-id.md "http&#x3A;//example.com/add.manufacturer.json#/properties/id")

### id Type

`string`

## company

Manufacturer's name


`company`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Manufacturer](add-manufacturer-properties-company.md "http&#x3A;//example.com/add.manufacturer.json#/properties/company")

### company Type

`string`

## name

Manufacturer founder's name


`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Manufacturer](add-manufacturer-properties-name.md "http&#x3A;//example.com/add.manufacturer.json#/properties/name")

### name Type

`string`

## avatar

Founder's avatar


`avatar`

-   is required
-   Type: `image`
-   cannot be null
-   defined in: [Manufacturer](add-manufacturer-properties-avatar.md "http&#x3A;//example.com/add.manufacturer.json#/properties/avatar")

### avatar Type

`image`
