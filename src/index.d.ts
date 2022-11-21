declare module '*.vert' {
  const content: string
  export default content
}

declare module '*.frag' {
  const content: string
  export default content
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      //   orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
      meshRefractionMaterial: any
    }
  }
}
