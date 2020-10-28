# Untitled string in Platform Schema

```txt
http://example.com/add.platform.json#/properties/age/properties/mature
```

Match the platform with the targetted consumers


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [add-platform.schema.json\*](../out/add-platform.schema.json "open original schema") |

## mature Type

`string`

## mature Constraints

**pattern**: the string must match the following regular expression: 

```regexp
(excellent|good|ok|poor)
```

[try pattern](https://regexr.com/?expression=(excellent%7Cgood%7Cok%7Cpoor) "try regular expression with regexr.com")
