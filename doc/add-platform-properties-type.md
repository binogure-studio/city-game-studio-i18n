# Untitled string in Add a new platform Schema

```txt
http://www.city-game-studio.com/add.platform.json#/properties/type
```

platform type (accessory, pc, os, home, handled)


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [add-platform.schema.json\*](../out/add-platform.schema.json "open original schema") |

## type Type

`string`

## type Constraints

**pattern**: the string must match the following regular expression: 

```regexp
(accessory|pc|os|home|handled)
```

[try pattern](https://regexr.com/?expression=(accessory%7Cpc%7Cos%7Chome%7Chandled) "try regular expression with regexr.com")
