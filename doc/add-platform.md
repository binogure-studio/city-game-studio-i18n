## Add a new platform Type

`object` ([Add a new platform](add-platform.md))

# Add a new platform Properties

| Property                                                            | Type      | Required | Nullable       | Defined by                                                                                                                                                                            |
| :------------------------------------------------------------------ | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [generation](#generation)                                           | `integer` | Required | cannot be null | [Add a new platform](add-platform-properties-generation.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/generation")                                           |
| [power](#power)                                                     | `object`  | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-power.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/power")                                        |
| [online](#online)                                                   | `object`  | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-online.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/online")                                      |
| [type](#type)                                                       | `string`  | Required | cannot be null | [Add a new platform](add-platform-properties-type.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/type")                                                       |
| [fabriquant](#fabriquant)                                           | `string`  | Required | cannot be null | [Add a new platform](add-platform-properties-fabriquant.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/fabriquant")                                           |
| [total_amount_of_published_games](#total_amount_of_published_games) | `integer` | Required | cannot be null | [Add a new platform](add-platform-properties-total_amount_of_published_games.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/total_amount_of_published_games") |
| [id](#id)                                                           | `string`  | Required | cannot be null | [Add a new platform](add-platform-properties-id.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/id")                                                           |
| [name](#name)                                                       | `string`  | Required | cannot be null | [Add a new platform](add-platform-properties-name.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/name")                                                       |
| [duration](#duration)                                               | `object`  | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-lifecycle.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/duration")                                 |
| [total_unit_sold](#total_unit_sold)                                 | `integer` | Required | cannot be null | [Add a new platform](add-platform-properties-total_unit_sold.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/total_unit_sold")                                 |
| [cost](#cost)                                                       | `object`  | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-costs.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/cost")                                         |
| [age](#age)                                                         | `object`  | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-target-audience.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/age")                                |
| [texture](#texture)                                                 | `object`  | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-textures.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/texture")                                   |
| [genre](#genre)                                                     | `object`  | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-genre.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/genre")                                        |

## generation

Platform's generation (Please use: <https://en.wikipedia.org/wiki/Home_video_game_console> )


`generation`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-generation.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/generation")

### generation Type

`integer`

### generation Constraints

**maximum**: the value of this number must smaller than or equal to: `9`

**minimum**: the value of this number must greater than or equal to: `1`

## power




`power`

-   is required
-   Type: `object` ([Add platform: Power](add-platform-properties-add-platform-power.md))
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-add-platform-power.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/power")

### power Type

`object` ([Add platform: Power](add-platform-properties-add-platform-power.md))

## online




`online`

-   is required
-   Type: `object` ([Add platform: Online](add-platform-properties-add-platform-online.md))
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-add-platform-online.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/online")

### online Type

`object` ([Add platform: Online](add-platform-properties-add-platform-online.md))

## type

platform type (accessory, pc, os, home, handled)


`type`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-type.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/type")

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
-   defined in: [Add a new platform](add-platform-properties-fabriquant.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/fabriquant")

### fabriquant Type

`string`

## total_amount_of_published_games

Total number of published game


`total_amount_of_published_games`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-total_amount_of_published_games.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/total_amount_of_published_games")

### total_amount_of_published_games Type

`integer`

### total_amount_of_published_games Constraints

**minimum**: the value of this number must greater than or equal to: `25`

## id

UUID v4 (use <https://www.uuidgenerator.net/> to generate one)


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-id.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/id")

### id Type

`string`

## name

Platform's name


`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-name.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/name")

### name Type

`string`

## duration




`duration`

-   is required
-   Type: `object` ([Add platform: Lifecycle](add-platform-properties-add-platform-lifecycle.md))
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-add-platform-lifecycle.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/duration")

### duration Type

`object` ([Add platform: Lifecycle](add-platform-properties-add-platform-lifecycle.md))

## total_unit_sold

Total number of unit sold (platform)


`total_unit_sold`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-total_unit_sold.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/total_unit_sold")

### total_unit_sold Type

`integer`

### total_unit_sold Constraints

**maximum**: the value of this number must smaller than or equal to: `9999999`

**minimum**: the value of this number must greater than or equal to: `50000`

## cost

Development and license costs


`cost`

-   is required
-   Type: `object` ([Add platform: Costs](add-platform-properties-add-platform-costs.md))
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-add-platform-costs.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/cost")

### cost Type

`object` ([Add platform: Costs](add-platform-properties-add-platform-costs.md))

## age




`age`

-   is required
-   Type: `object` ([Add platform: Target audience](add-platform-properties-add-platform-target-audience.md))
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-add-platform-target-audience.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/age")

### age Type

`object` ([Add platform: Target audience](add-platform-properties-add-platform-target-audience.md))

## texture

Platform's textures


`texture`

-   is required
-   Type: `object` ([Add platform: Textures](add-platform-properties-add-platform-textures.md))
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-add-platform-textures.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/texture")

### texture Type

`object` ([Add platform: Textures](add-platform-properties-add-platform-textures.md))

## genre

Platform/genre matches


`genre`

-   is required
-   Type: `object` ([Add platform: Genre](add-platform-properties-add-platform-genre.md))
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-add-platform-genre.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/genre")

### genre Type

`object` ([Add platform: Genre](add-platform-properties-add-platform-genre.md))
