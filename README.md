
![](./docs/public/og.png)

# @fanslar/es-toolkit &middot; [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE) [![NPM badge](https://img.shields.io/npm/v/@fanslar/es-toolkit?logo=npm)](https://www.npmjs.com/package/@fanslar/es-toolkit)

@fanslar/es-toolkit 是一个高性能、现代化的 JavaScript 工具库，拥有极小的体积和强类型支持。

- 提供丰富的实用函数，覆盖数组、对象、函数、Promise、集合等常用场景。
- 现代实现，支持 tree-shaking，极大减少打包体积。
- TypeScript 完全支持，类型安全，开发体验优秀。
- 兼容 lodash，可无缝迁移。
- 100% 单元测试覆盖，可靠稳定。

## 快速上手

```ts
import { chunk, debounce } from '@fanslar/es-toolkit'

const debouncedLog = debounce(msg => {
  console.log(msg)
}, 300)

debouncedLog('Hello, world!')

const arr = [1, 2, 3, 4, 5, 6]
const chunked = chunk(arr, 2)
console.log(chunked) // [[1,2],[3,4],[5,6]]
```

## 文档

详细 API 参考与使用说明请见 [docs](./docs)。

## 本地开发

```bash
pnpm i
pnpm dev
pnpm test
```

## License

MIT © fanslar
