"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Model from "./Model";

export default function Viewer() {
  const [activeModel, setActiveModel] = useState<"ORI" | "DEFORM">("ORI");
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full relative h-full flex flex-col gap-4">
      {/* Tabs */}
      <div className="absolute z-50 top-10 left-1/2 -translate-x-1/2">
        <Tabs
          defaultValue="ORI"
          onValueChange={(v) => {
            setActiveModel(v as "ORI" | "DEFORM");
            setLoading(true);
          }}
        >
          <TabsList className="w-fit">
            <TabsTrigger value="ORI">ORI</TabsTrigger>
            <TabsTrigger value="DEFORM">DEFORM</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Loader */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm z-40">
          <div className="text-white bg-black px-4 py-2 rounded-md">
            Loading model...
          </div>
        </div>
      )}

      <div className="flex-1">
        <Canvas camera={{ position: [2, 2, 3], fov: 45 }}>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />

          <OrbitControls />

          <Model name={activeModel} onLoaded={() => setLoading(false)} />
        </Canvas>
      </div>
    </div>
  );
}
