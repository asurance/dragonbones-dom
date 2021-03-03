# dragonbones-dom

## 描述

使用div标签播放龙骨动画

## 注意
1. 不支持网格
2. 不支持颜色(只支持alpha)
3. 不支持混合模式(只支持normal模式)

## 示例
```typescript
const factory = new DomFactory()
factory.parseDragonBonesData(SkeleteonJson)
factory.parseTextureAtlasData(TextureJson, 'texture.png')
const armature = factory.buildArmature('Dragon')!
const container = document.getElementById('container') as HTMLDivElement
container.appendChild((armature.display))

armature.animation.play()
const clock = new WorldClock()
clock.add(armature)
setInterval(() => {
    clock.advanceTime(0.1)
}, 100)
```