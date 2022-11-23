import { OLD_GOBLIN_MODEL_GLTF } from '@/constants/paths'
import { Model } from '@/components/canvas/Model'

export const OldGoblinModel = (props) => (
  <Model url={OLD_GOBLIN_MODEL_GLTF} animations={['course_vieux']} {...props} />
)
