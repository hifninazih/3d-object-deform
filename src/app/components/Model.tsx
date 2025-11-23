"use client";
import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

type ModelName = "DEFORM" | "ORI";

export default function Model({
  name,
  onLoaded,
}: {
  name: ModelName;
  onLoaded?: () => void;
}) {
  const paths: Record<ModelName, string> = {
    DEFORM: "/DEFORM_NEW.glb",
    ORI: "/ORI_NEW.glb",
  };

  const gltf = useGLTF(paths[name]);

  useEffect(() => {
    if (gltf) onLoaded?.(); // panggil setelah model benar-benar siap
  }, [gltf, onLoaded]);

  return <primitive object={gltf.scene} scale={0.5} />;
}
