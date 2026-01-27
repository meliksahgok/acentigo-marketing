'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleNetwork(props: any) {
    const ref = useRef<THREE.Points>(null!)

    // Generate random points on a sphere
    const [positions, colors] = useMemo(() => {
        const count = 5000 // Increased count
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)
        const colorProxy = new THREE.Color()

        for (let i = 0; i < count; i++) {
            // Random point on sphere surface (roughly)
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)
            const r = 1.3 + Math.random() * 1.5 // Wider radius spread

            const x = r * Math.sin(phi) * Math.cos(theta)
            const y = r * Math.sin(phi) * Math.sin(theta)
            const z = r * Math.cos(phi)

            positions[i * 3] = x
            positions[i * 3 + 1] = y
            positions[i * 3 + 2] = z

            // Colors: mix of brand orange (more frequent) and white
            const isBrand = Math.random() > 0.6
            colorProxy.set(isBrand ? '#F75700' : '#ffffff') // Brighter colors, no dark gray

            colors[i * 3] = colorProxy.r
            colors[i * 3 + 1] = colorProxy.g
            colors[i * 3 + 2] = colorProxy.b
        }

        return [positions, colors]
    }, [])

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 20
            ref.current.rotation.y -= delta / 30
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} colors={colors} stride={3} {...props}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.035} // Increased size significantly
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
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
