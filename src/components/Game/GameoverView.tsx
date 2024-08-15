import { Container, Text, Sprite } from '@pixi/react'
import { TextStyle } from 'pixi.js'
import React, { useState, useEffect } from 'react'
import { GameState } from '../states/GameState'

interface Prop {
    x: number
    y: number
    gameState: GameState
    setState: React.Dispatch<React.SetStateAction<GameState>>
}

const GameoverView = ({ x, y, gameState, setState }: Prop) => {
    const buttonUrl = '/assets/restart-button.png'

    const [scale, setScales] = useState({ x: 1, y: 1 })

    if (gameState == GameState.GameOver) {
        return (
            <Container position={[x, y]}>
                <Text
                    text="G A M E  O V E R"
                    anchor={0.5}
                    style={
                        new TextStyle({
                            fontSize: 50,
                            fontFamily: 'PixelifySans-Regular',
                        })
                    }
                />
                <Sprite
                    image={buttonUrl}
                    anchor={0.5}
                    y={70}
                    width={70}
                    height={60}
                    interactive={true}
                    scale={scale}
                    pointerover={() => {
                        setScales({ x: 1.15, y: 1.15 })
                    }}
                    pointerout={() => {
                        setScales({ x: 1, y: 1 })
                    }}
                    pointerdown={() => {
                        console.log('restart')
                        setState(GameState.GamePlay)
                    }}
                />
            </Container>
        )
    }
}

export default GameoverView
