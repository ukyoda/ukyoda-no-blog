import { isRight, map, right } from 'fp-ts/lib/Either'
import * as t from 'io-ts'

const codec = t.type({
  id: t.string,
  name: t.string,
})

export type Tag = t.TypeOf<typeof codec>

export const isTag = (data: unknown): data is Tag => codec.is(data)

export const toTag = (data: unknown): Tag => {
  const result = codec.decode(data)
  if (isRight(result)) {
    return result.right
  }
  throw new Error('Type Error')
}
