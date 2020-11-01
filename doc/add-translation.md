## Add a translation Type

`object` ([Add a translation](add-translation.md))

# Add a translation Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                            |
| :-------------------- | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)         | `string` | Required | cannot be null | [Add a translation](add-translation-properties-name.md "http&#x3A;//www.city-game-studio.com/add.translation.json#/properties/name")                  |
| [locale](#locale)     | `string` | Required | cannot be null | [Add a translation](add-translation-properties-locale.md "http&#x3A;//www.city-game-studio.com/add.translation.json#/properties/locale")              |
| [messages](#messages) | `object` | Required | cannot be null | [Add a translation](add-translation-properties-translations-list.md "http&#x3A;//www.city-game-studio.com/add.translation.json#/properties/messages") |

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
-   Type: `object` ([Translations list](add-translation-properties-translations-list.md))
-   cannot be null
-   defined in: [Add a translation](add-translation-properties-translations-list.md "http&#x3A;//www.city-game-studio.com/add.translation.json#/properties/messages")

### messages Type

`object` ([Translations list](add-translation-properties-translations-list.md))
