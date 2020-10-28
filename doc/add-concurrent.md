# Concurrent Schema

```txt
http://example.com/add.concurrent.json
```

Add a concurrent


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                             |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [add-concurrent.schema.json](../out/add-concurrent.schema.json "open original schema") |

## Concurrent Type

`object` ([Concurrent](add-concurrent.md))

# Concurrent Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                               |
| :---------------------- | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------- |
| [id](#id)               | `string` | Required | cannot be null | [Concurrent](add-concurrent-properties-id.md "http&#x3A;//example.com/add.concurrent.json#/properties/id")               |
| [name](#name)           | `string` | Required | cannot be null | [Concurrent](add-concurrent-properties-name.md "http&#x3A;//example.com/add.concurrent.json#/properties/name")           |
| [logo](#logo)           | `image`  | Required | cannot be null | [Concurrent](add-concurrent-properties-logo.md "http&#x3A;//example.com/add.concurrent.json#/properties/logo")           |
| [specialty](#specialty) | `string` | Required | cannot be null | [Concurrent](add-concurrent-properties-specialty.md "http&#x3A;//example.com/add.concurrent.json#/properties/specialty") |
| [engine](#engine)       | `object` | Required | cannot be null | [Concurrent](add-concurrent-properties-engine.md "http&#x3A;//example.com/add.concurrent.json#/properties/engine")       |

## id

Concurrent's id (Generate a uuid)


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Concurrent](add-concurrent-properties-id.md "http&#x3A;//example.com/add.concurrent.json#/properties/id")

### id Type

`string`

## name

Concurrent's name


`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Concurrent](add-concurrent-properties-name.md "http&#x3A;//example.com/add.concurrent.json#/properties/name")

### name Type

`string`

## logo

Concurrent logo's


`logo`

-   is required
-   Type: `image`
-   cannot be null
-   defined in: [Concurrent](add-concurrent-properties-logo.md "http&#x3A;//example.com/add.concurrent.json#/properties/logo")

### logo Type

`image`

## specialty

Conccurent specialty


`specialty`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Concurrent](add-concurrent-properties-specialty.md "http&#x3A;//example.com/add.concurrent.json#/properties/specialty")

### specialty Type

`string`

## engine




`engine`

-   is required
-   Type: `object` ([Details](add-concurrent-properties-engine.md))
-   cannot be null
-   defined in: [Concurrent](add-concurrent-properties-engine.md "http&#x3A;//example.com/add.concurrent.json#/properties/engine")

### engine Type

`object` ([Details](add-concurrent-properties-engine.md))
