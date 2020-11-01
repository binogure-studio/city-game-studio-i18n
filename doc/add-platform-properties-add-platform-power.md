## power Type

`object` ([(Add platform) Power](add-platform-properties-add-platform-power.md))

# (Add platform) Power Properties

| Property    | Type      | Required | Nullable       | Defined by                                                                                                                                                                   |
| :---------- | --------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [cpu](#cpu) | `integer` | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-power-properties-cpu.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/power/properties/cpu") |
| [gpu](#gpu) | `integer` | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-power-properties-gpu.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/power/properties/gpu") |

## cpu

Platform's CPU power


`cpu`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-add-platform-power-properties-cpu.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/power/properties/cpu")

### cpu Type

`integer`

### cpu Constraints

**maximum**: the value of this number must smaller than or equal to: `1000`

**minimum**: the value of this number must greater than or equal to: `2`

## gpu

Platform's GPU power


`gpu`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-add-platform-power-properties-gpu.md "http&#x3A;//www.city-game-studio.com/add.platform.json#/properties/power/properties/gpu")

### gpu Type

`integer`

### gpu Constraints

**maximum**: the value of this number must smaller than or equal to: `1000`

**minimum**: the value of this number must greater than or equal to: `0`
