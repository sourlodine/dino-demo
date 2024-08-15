import { Container, Sprite, TilingSprite, useTick } from '@pixi/react'
import React, { useState } from 'react'
import { GameState } from '../states/GameState'

interface Position {
    x: number
    y: number
    gameState: GameState
}

const BackgroundView = ({ x, y, gameState }: Position) => {
    const groundUrl = '/assets/ground.png'
    const cloudUrl = '/assets/cloud.png'

    const [tileCloudPosition, setTileCloudPosition] = useState({ x: 0, y: 0 })
    const [tileGroundPosition, setTileGroundPosition] = useState({ x: 0, y: 0 })

    useTick((delta) => {
        if (gameState == GameState.GameOver) {
            return
        }

        setTileCloudPosition({ x: tileCloudPosition.x - 1.5, y: 0 })
        setTileGroundPosition({ x: tileGroundPosition.x - 3, y: 0 })
    })

    return (
        <Container position={[x, y]}>
            <TilingSprite
                x={window.innerWidth / 2}
                y={20}
                anchor={0.5}
                image={groundUrl}
                width={window.innerWidth}
                height={44}
                tilePosition={tileGroundPosition}
                tileScale={{ x: 1, y: 1 }}
            />
            <TilingSprite
                x={window.innerWidth / 2}
                y={-30}
                anchor={0.5}
                image={cloudUrl}
                width={window.innerWidth}
                height={44}
                tilePosition={tileCloudPosition}
                tileScale={{ x: 1, y: 1 }}
            />
        </Container>
    )
}

export default BackgroundView
