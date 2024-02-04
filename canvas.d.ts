import { RootState as State } from '@react-three/fiber'
import { ColorRepresentation } from 'three'
type AugmentColor = {
  color: ColorRepresentation
}
declare module '@react-three/fiber' {
  type RootState = {
    color: ColorRepresentation
  }
}
