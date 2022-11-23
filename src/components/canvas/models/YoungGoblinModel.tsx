import { YOUNG_GOBLIN_MODEL_GLTF } from '@/constants/paths'
import { Model } from '@/components/canvas/Model'

export const YoungGoblinModel = (props) => (
  <Model url={YOUNG_GOBLIN_MODEL_GLTF} animations={['course_chapeau']} {...props} />
)
