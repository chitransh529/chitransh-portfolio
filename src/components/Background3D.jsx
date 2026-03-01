import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

export default function Background3D() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none', background: 'transparent' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <ParticlesCore />
            </Canvas>
        </div>
    );
}

function ParticlesCore() {
    const points = useRef();
    const count = 3000;

    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 20; // x
            positions[i3 + 1] = (Math.random() - 0.5) * 20; // y
            positions[i3 + 2] = (Math.random() - 0.5) * 10; // z
        }

        return positions;
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (points.current) {
            points.current.rotation.y = time * 0.05;
            points.current.rotation.x = Math.sin(time * 0.1) * 0.05;
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#00f3ff" /* exact neon cyan from your css */
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}
