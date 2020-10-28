# Untitled object in Add a Concurrent Schema

```txt
http://www.city-game-studio.com/add.concurrent.json#/properties/engine
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [add-concurrent.schema.json\*](../out/add-concurrent.schema.json "open original schema") |

## engine Type

`object` ([Details](add-concurrent-properties-engine.md))

# undefined Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                                                      |
| :---------------------- | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [interval](#interval)   | `integer` | Required | cannot be null | [Add a Concurrent](add-concurrent-properties-engine-properties-interval.md "http&#x3A;//www.city-game-studio.com/add.concurrent.json#/properties/engine/properties/interval")   |
| [royalties](#royalties) | `array`   | Required | cannot be null | [Add a Concurrent](add-concurrent-properties-engine-properties-royalties.md "http&#x3A;//www.city-game-studio.com/add.concurrent.json#/properties/engine/properties/royalties") |

## interval

Interval between concurrent's engine update (week)


`interval`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a Concurrent](add-concurrent-properties-engine-properties-interval.md "http&#x3A;//www.city-game-studio.com/add.concurrent.json#/properties/engine/properties/interval")

### interval Type

`integer`

### interval Constraints

**maximum**: the value of this number must smaller than or equal to: `512`

**minimum**: the value of this number must greater than or equal to: `128`

## royalties

Range for the concurrent engine royalties


`royalties`

-   is required
-   Type: `integer[]`
-   cannot be null
-   defined in: [Add a Concurrent](add-concurrent-properties-engine-properties-royalties.md "http&#x3A;//www.city-game-studio.com/add.concurrent.json#/properties/engine/properties/royalties")

### royalties Type

`integer[]`

### royalties Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`
