import Head from 'next/head'
import { ReactElement, useCallback } from 'react'
import { CreateFactory } from '../utils/DragonBones'
import SkeleteonJson from '../assets/skeleton.json'
import TextureJson from '../assets/texture.json'

export default function Home(): ReactElement {
    const onClick = useCallback(() => {
        const factory = CreateFactory(SkeleteonJson, TextureJson, 'texture.png')
        const armature = factory.buildArmature('Dragon')!
        const container = document.getElementById('container') as HTMLDivElement
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
