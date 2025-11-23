"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Model from "./Model";

export default function Viewer() {
  const [activeModel, setActiveModel] = useState<"ORI" | "DEFORM">("ORI");

  return (
    <div className="w-full relative h-full flex flex-col gap-4">
      <div className="absolute z-50 top-10 left-1/2 -translate-x-1/2">
        {/* Tabs untuk memilih model */}
        <Tabs
          defaultValue="ORI"
          onValueChange={(v) => setActiveModel(v as "ORI" | "DEFORM")}
          className="w-full"
        >
          <TabsList className="w-fit select-none">
            <TabsTrigger value="ORI" className="hover:cursor-pointer">
              ORI
            </TabsTrigger>
            <TabsTrigger value="DEFORM" className="hover:cursor-pointer">
              DEFORM
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      {/* Canvas tidak berubah */}
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

          {/* Hanya model yang berubah */}
          <Model name={activeModel} />
        </Canvas>
      </div>
    </div>
  );
}
