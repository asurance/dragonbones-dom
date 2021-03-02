import Head from 'next/head'
import { ReactElement, useCallback } from 'react'
import { CreateFactory } from '../utils/DragonBones'
import SkeleteonJson from '../assets/skeleton.json'
import TextureJson from '../assets/texture.json'
import dragonBones from '../dragonbones/dragonBones'

export default function Home(): ReactElement {
    const onClick = useCallback(() => {
        const factory = CreateFactory(SkeleteonJson, TextureJson, 'texture.png')
        const armature = factory.buildArmature('Dragon')!
        const container = document.getElementById('container') as HTMLDivElement
        (armature.display as HTMLDivElement).style.transform = 'translate(512px,376px)'
        armature.animation.play()
        const clock = new dragonBones.WorldClock()
        clock.add(armature)
        setInterval(() => {
            clock.advanceTime(0.1)
        }, 100)
        container.appendChild((armature.display))
    }, [])
    return (
        <div>
            <Head>
                <title>Dragonbones Dom</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <button onClick={onClick}>log</button>
            <div id="container" />
        </div>
    )
}
