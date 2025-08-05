// global.d.ts
import { Object3DNode } from '@react-three/fiber';
import { MeshLineMaterial, MeshLineGeometry } from 'meshline';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
      meshLineMaterial: Object3DNode<MeshLineMaterial, typeof MeshLineMaterial>;
    }
  }
}

export {};
