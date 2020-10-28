# Platform Schema

```txt
http://example.com/add.platform.json
```

Add a new platform


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [add-platform.schema.json](../out/add-platform.schema.json "open original schema") |

## Platform Type

`object` ([Platform](add-platform.md))

# Platform Properties

| Property                                                            | Type      | Required | Nullable       | Defined by                                                                                                                                                     |
| :------------------------------------------------------------------ | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [generation](#generation)                                           | `integer` | Required | cannot be null | [Platform](add-platform-properties-generation.md "http&#x3A;//example.com/add.platform.json#/properties/generation")                                           |
| [power](#power)                                                     | `object`  | Required | cannot be null | [Platform](add-platform-properties-power.md "http&#x3A;//example.com/add.platform.json#/properties/power")                                                     |
| [online](#online)                                                   | `object`  | Required | cannot be null | [Platform](add-platform-properties-online.md "http&#x3A;//example.com/add.platform.json#/properties/online")                                                   |
| [type](#type)                                                       | `string`  | Required | cannot be null | [Platform](add-platform-properties-type.md "http&#x3A;//example.com/add.platform.json#/properties/type")                                                       |
| [fabriquant](#fabriquant)                                           | `string`  | Required | cannot be null | [Platform](add-platform-properties-fabriquant.md "http&#x3A;//example.com/add.platform.json#/properties/fabriquant")                                           |
| [total_amount_of_published_games](#total_amount_of_published_games) | `integer` | Required | cannot be null | [Platform](add-platform-properties-total_amount_of_published_games.md "http&#x3A;//example.com/add.platform.json#/properties/total_amount_of_published_games") |
| [id](#id)                                                           | `string`  | Required | cannot be null | [Platform](add-platform-properties-id.md "http&#x3A;//example.com/add.platform.json#/properties/id")                                                           |
| [name](#name)                                                       | `string`  | Required | cannot be null | [Platform](add-platform-properties-name.md "http&#x3A;//example.com/add.platform.json#/properties/name")                                                       |
| [duration](#duration)                                               | `object`  | Required | cannot be null | [Platform](add-platform-properties-duration.md "http&#x3A;//example.com/add.platform.json#/properties/duration")                                               |
| [total_unit_sold](#total_unit_sold)                                 | `integer` | Required | cannot be null | [Platform](add-platform-properties-total_unit_sold.md "http&#x3A;//example.com/add.platform.json#/properties/total_unit_sold")                                 |
| [cost](#cost)                                                       | `object`  | Required | cannot be null | [Platform](add-platform-properties-cost.md "http&#x3A;//example.com/add.platform.json#/properties/cost")                                                       |
| [age](#age)                                                         | `object`  | Required | cannot be null | [Platform](add-platform-properties-age.md "http&#x3A;//example.com/add.platform.json#/properties/age")                                                         |
| [texture](#texture)                                                 | `object`  | Required | cannot be null | [Platform](add-platform-properties-texture.md "http&#x3A;//example.com/add.platform.json#/properties/texture")                                                 |
| [genre](#genre)                                                     | `object`  | Required | cannot be null | [Platform](add-platform-properties-genre.md "http&#x3A;//example.com/add.platform.json#/properties/genre")                                                     |

## generation

Platform's generation


`generation`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Platform](add-platform-properties-generation.md "http&#x3A;//example.com/add.platform.json#/properties/generation")

### generation Type

`integer`

### generation Constraints

**maximum**: the value of this number must smaller than or equal to: `9`

**minimum**: the value of this number must greater than or equal to: `1`

## power




`power`

-   is required
-   Type: `object` ([Details](add-platform-properties-power.md))
-   cannot be null
-   defined in: [Platform](add-platform-properties-power.md "http&#x3A;//example.com/add.platform.json#/properties/power")

### power Type

`object` ([Details](add-platform-properties-power.md))

## online




`online`

-   is required
-   Type: `object` ([Details](add-platform-properties-online.md))
-   cannot be null
-   defined in: [Platform](add-platform-properties-online.md "http&#x3A;//example.com/add.platform.json#/properties/online")

### online Type

`object` ([Details](add-platform-properties-online.md))

## type

platform type (accessory, pc, os, home, handled)


`type`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Platform](add-platform-properties-type.md "http&#x3A;//example.com/add.platform.json#/properties/type")

### type Type

`string`

### type Constraints

**pattern**: the string must match the following regular expression: 

```regexp
(accessory|pc|os|home|handled)
```

[try pattern](https://regexr.com/?expression=(accessory%7Cpc%7Cos%7Chome%7Chandled) "try regular expression with regexr.com")

## fabriquant

Manufacturer's id


`fabriquant`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Platform](add-platform-properties-fabriquant.md "http&#x3A;//example.com/add.platform.json#/properties/fabriquant")

### fabriquant Type

`string`

## total_amount_of_published_games

Total number of published game


`total_amount_of_published_games`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Platform](add-platform-properties-total_amount_of_published_games.md "http&#x3A;//example.com/add.platform.json#/properties/total_amount_of_published_games")

### total_amount_of_published_games Type

`integer`

### total_amount_of_published_games Constraints

**minimum**: the value of this number must greater than or equal to: `25`

## id

Platform's id (UUID v4)


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Platform](add-platform-properties-id.md "http&#x3A;//example.com/add.platform.json#/properties/id")

### id Type

`string`

## name

Platform's name


`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Platform](add-platform-properties-name.md "http&#x3A;//example.com/add.platform.json#/properties/name")

### name Type

`string`

## duration




`duration`

-   is required
-   Type: `object` ([Details](add-platform-properties-duration.md))
-   cannot be null
-   defined in: [Platform](add-platform-properties-duration.md "http&#x3A;//example.com/add.platform.json#/properties/duration")

### duration Type

`object` ([Details](add-platform-properties-duration.md))

## total_unit_sold

Total number of unit sold (platform)


`total_unit_sold`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Platform](add-platform-properties-total_unit_sold.md "http&#x3A;//example.com/add.platform.json#/properties/total_unit_sold")

### total_unit_sold Type

`integer`

### total_unit_sold Constraints

**maximum**: the value of this number must smaller than or equal to: `9999999`

**minimum**: the value of this number must greater than or equal to: `50000`

## cost

Development and license costs


`cost`

-   is required
-   Type: `object` ([Details](add-platform-properties-cost.md))
-   cannot be null
-   defined in: [Platform](add-platform-properties-cost.md "http&#x3A;//example.com/add.platform.json#/properties/cost")

### cost Type

`object` ([Details](add-platform-properties-cost.md))

## age




`age`

-   is required
-   Type: `object` ([Details](add-platform-properties-age.md))
-   cannot be null
-   defined in: [Platform](add-platform-properties-age.md "http&#x3A;//example.com/add.platform.json#/properties/age")

### age Type

`object` ([Details](add-platform-properties-age.md))

## texture

Platform's textures


`texture`

-   is required
-   Type: `object` ([Details](add-platform-properties-texture.md))
-   cannot be null
-   defined in: [Platform](add-platform-properties-texture.md "http&#x3A;//example.com/add.platform.json#/properties/texture")

### texture Type

`object` ([Details](add-platform-properties-texture.md))

## genre

Platform/genre matches


`genre`

-   is required
-   Type: `object` ([Details](add-platform-properties-genre.md))
-   cannot be null
-   defined in: [Platform](add-platform-properties-genre.md "http&#x3A;//example.com/add.platform.json#/properties/genre")

### genre Type

`object` ([Details](add-platform-properties-genre.md))
