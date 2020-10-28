# Add a translation Schema

```txt
http://www.city-game-studio.com/add.translation.json
```

Add a translation


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [add-translation.schema.json](../out/add-translation.schema.json "open original schema") |

## Add a translation Type

`object` ([Add a translation](add-translation.md))

# Add a translation Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                   |
| :-------------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)         | `string` | Required | cannot be null | [Add a translation](add-translation-properties-name.md "http&#x3A;//www.city-game-studio.com/add.translation.json#/properties/name")         |
| [locale](#locale)     | `string` | Required | cannot be null | [Add a translation](add-translation-properties-locale.md "http&#x3A;//www.city-game-studio.com/add.translation.json#/properties/locale")     |
| [messages](#messages) | `object` | Required | cannot be null | [Add a translation](add-translation-properties-messages.md "http&#x3A;//www.city-game-studio.com/add.translation.json#/properties/messages") |

## name

Locale names (shown onto the main menu)


`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a translation](add-translation-properties-name.md "http&#x3A;//www.city-game-studio.com/add.translation.json#/properties/name")

### name Type

`string`

## locale

Locale code (en, es, fr, zh, ru, pt...)


`locale`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a translation](add-translation-properties-locale.md "http&#x3A;//www.city-game-studio.com/add.translation.json#/properties/locale")

### locale Type

`string`

## messages

KEY: VALUE. Example: LABEL_THEME_SCHOOL: School


`messages`

-   is required
-   Type: `object` ([Details](add-translation-properties-messages.md))
-   cannot be null
-   defined in: [Add a translation](add-translation-properties-messages.md "http&#x3A;//www.city-game-studio.com/add.translation.json#/properties/messages")

### messages Type

`object` ([Details](add-translation-properties-messages.md))
