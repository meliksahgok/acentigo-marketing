'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Starfield(props: any) {
    const ref = useRef<THREE.Points>(null!)

    const positions = useMemo(() => {
        const count = 3000
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            // Spread stars in a cylinder shape moving towards camera
            const x = (Math.random() - 0.5) * 15
            const y = (Math.random() - 0.5) * 15
            const z = Math.random() * 20 - 10 // z between -10 and 10

            positions[i * 3] = x
            positions[i * 3 + 1] = y
            positions[i * 3 + 2] = z
        }

        return positions
    }, [])

    useFrame((state, delta) => {
        if (ref.current) {
            const posArray = ref.current.geometry.attributes.position.array as Float32Array

            for (let i = 0; i < posArray.length; i += 3) {
                // Move stars towards camera (positive z direction)
                posArray[i + 2] += delta * 0.5 // Speed

                // Reset star when it passes the camera
                if (posArray[i + 2] > 10) {
                    posArray[i + 2] = -10
                    posArray[i] = (Math.random() - 0.5) * 15
                    posArray[i + 1] = (Math.random() - 0.5) * 15
                }
            }

            ref.current.geometry.attributes.position.needsUpdate = true
        }
    })

    return (
        <Points ref={ref} positions={positions} stride={3} {...props}>
            <PointMaterial
                transparent
                color="#e53d15"
                size={0.08}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.9}
            />
        </Points>
    )
}

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]}
            >
                <Starfield />
            </Canvas>
        </div>
    )
}
