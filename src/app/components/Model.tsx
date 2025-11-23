"use client";
import { useGLTF } from "@react-three/drei";

type ModelName = "DEFORM";

export default function Model({ name }: { name: ModelName }) {
  const paths: Record<ModelName, string> = {
    DEFORM: "/DEFORM_NEW.glb",
  };

  const gltf = useGLTF(paths[name]);

  return <primitive object={gltf.scene} scale={1} />;
}
