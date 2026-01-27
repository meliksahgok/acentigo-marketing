'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleNetwork(props: any) {
    const ref = useRef<THREE.Points>(null!)

    // Generate random points on a sphere
    const [positions, colors] = useMemo(() => {
        const count = 2000
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)
        const colorProxy = new THREE.Color()

        for (let i = 0; i < count; i++) {
            // Random point on sphere surface (roughly)
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)
            const r = 1.5 + Math.random() * 0.5 // Radius between 1.5 and 2.0

            const x = r * Math.sin(phi) * Math.cos(theta)
            const y = r * Math.sin(phi) * Math.sin(theta)
            const z = r * Math.cos(phi)

            positions[i * 3] = x
            positions[i * 3 + 1] = y
            positions[i * 3 + 2] = z

            // Colors: mix of brand orange and white/gray
            const isBrand = Math.random() > 0.8
            colorProxy.set(isBrand ? '#F75700' : (Math.random() > 0.5 ? '#ffffff' : '#4a4a4a'))

            colors[i * 3] = colorProxy.r
            colors[i * 3 + 1] = colorProxy.g
            colors[i * 3 + 2] = colorProxy.b
        }

        return [positions, colors]
    }, [])

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15
            ref.current.rotation.y -= delta / 20
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} colors={colors} stride={3} {...props}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 3], fov: 60 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]}
            >
                <ParticleNetwork />
            </Canvas>
        </div>
    )
}
