import { WOLF_MODEL_GLTF } from '@/constants/paths'
import { Model } from '@/components/canvas/Model'

export const WolfModel = (props) => (
  <Model url={WOLF_MODEL_GLTF} animations={['course_loup', 'course_cavalier']} {...props} />
)
