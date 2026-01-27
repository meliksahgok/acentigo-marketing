'use client'

import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei'

function LiquidMetal() {
    return (
        <group>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <Sphere args={[1, 100, 100]} scale={1.5}>
                    <MeshDistortMaterial
                        color="#e53d15"
                        attach="material"
                        distort={0.4}
                        speed={1.5}
                        roughness={0.2}
                        metalness={0.9}
                    />
                </Sphere>
            </Float>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
            <directionalLight position={[-10, -10, -5]} intensity={1} color="#e53d15" />
        </group>
    )
}

export default function LiquidMetalSection() {
    return (
        <div className="relative h-[400px] w-full max-w-md mx-auto">
            <Canvas
                camera={{ position: [0, 0, 4], fov: 60 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]}
            >
                <LiquidMetal />
            </Canvas>
        </div>
    )
}
