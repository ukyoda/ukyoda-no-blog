import { EffectCallback, useEffect } from 'react'

export const useMount = (effect: EffectCallback) => {
  useEffect(() => {
    return effect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
