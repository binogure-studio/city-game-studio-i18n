# Untitled number in Platform Schema

```txt
http://example.com/add.platform.json#/properties/online/properties/sell_ratio
```

Sell ratio of the platform (never above 1)


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [add-platform.schema.json\*](../out/add-platform.schema.json "open original schema") |

## sell_ratio Type

`number`

## sell_ratio Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`
