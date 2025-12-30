# escapeRegExp (Lodash compatibility)

::: warning Use `escapeRegExp` from `@fanslar/es-toolkit`

This `escapeRegExp` function operates slower due to handling non-string input values.

Instead, use the faster and more modern [escapeRegExp](../../string/escapeRegExp.md) from `@fanslar/es-toolkit`.

:::

Escapes regular expression special characters in a string.

```typescript
const result = escapeRegExp(str)
```

## Usage

### `escapeRegExp(str)`

Escapes regular expression special characters `^`, `$`, `\`, `.`, `*`, `+`, `?`, `(`, `)`, `[`, `]`, `{`, `}`, `|` in a string. This is useful when you want to treat a string literally when dynamically creating regular expressions.

```typescript
import { escapeRegExp } from '@fanslar/es-toolkit/compat'

escapeRegExp('[es-toolkit](https://fanslar.github.io/es-toolkit/)')
// '\\[es-toolkit\\]\(https://fanslar.github.io/es-toolkit/\\)'

escapeRegExp('$^{}.+*?()[]|\\')
// '\\$\\^\\{\\}\\.\\+\\*\\?\\(\\)\\[\\]\\|\\\\'
```

Non-string values are also converted to strings before processing.

```typescript
import { escapeRegExp } from '@fanslar/es-toolkit/compat'

escapeRegExp(123) // '123'
escapeRegExp(null) // ''
escapeRegExp(undefined) // ''
```

#### Parameters

- `str` (`string`, optional): The string to escape regular expression special characters.

#### Returns

(`string`): Returns the string with regular expression special characters escaped.
