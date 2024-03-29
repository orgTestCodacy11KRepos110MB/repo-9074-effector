---
title: createGate
description: Creates a gate to consume data from view
lang: en-US
---

# createGate

## `createGate(config?: {defaultState?, domain?, name?})` {#createGate-config}

Creates a [_`Gate`_](/api/effector-solid/Gate.md), if `defaultState` is defined, [Gate.state](/api/effector-solid/Gate.md#state) will be created with passed value

### Arguments {#createGate-config-arguments}

`config` (_Object_): Optional configuration object

- `defaultState?`: Optional default state for [Gate.state](/api/effector-solid/Gate.md#state)
- `domain?` ([_Domain_]/apieffector/Domain.md)): Optional domain which will be used to create gate units ([Gate.open](/api/effector-solid/Gate.md#open) event, [Gate.state](/api/effector-solid/Gate.md#state) store and so on)
- `name?` (_string_): Optional name which will be used as name of created solid component

### Returns {#createGate-config-returns}

[_Gate_](/api/effector-solid/Gate.md)

## `createGate(name?)` {#createGate-name}

Creates a [_`Gate`_](/api/effector-solid/Gate.md)

### Arguments {#createGate-name-arguments}

1. `name`? (_string_): Optional name which will be used as name of created solid component

### Returns {#createGate-name-returns}

[_Gate_](/api/effector-solid/Gate.md)

#### Example

```js
import {createGate} from 'effector-solid'
import {render} from 'solid-js/web'

const Gate = createGate('gate with props')

const App = () => (
  <section>
    <Gate foo="bar" />
  </section>
)

Gate.state.watch(state => {
  console.log('current state', state)
})
// => current state {}

const unmount = render(() => <App />, document.getElementById('root'))
// => current state {foo: 'bar'}

unmount()
// => current state {}
```
