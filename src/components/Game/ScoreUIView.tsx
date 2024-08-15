import { Container, Text, useTick } from '@pixi/react'
import { TextStyle } from 'pixi.js'
import React, { useEffect, useState } from 'react'
import { GameState } from '../states/GameState'

interface Props {
    x: number
    y: number
    gameState: GameState
}

const ScoreUIView = ({ x, y, gameState }: Props) => {
    const [score, setScore] = useState<number>(0)

    useEffect(() => {
        if (gameState == GameState.GamePlay) {
            if (score != 0) {
                setScore(0)
            }
        }
    }, [gameState])

    useTick((delta) => {
        if (gameState == GameState.GameOver) {
            return
        }
        let currentScore = score
        currentScore += 0.3 * delta

        setScore(currentScore)
    })

    return (
        <Container position={[x, y]} anchor={0.5}>
            <Text
                text={String(score.toFixed(0)).padStart(6, '0')}
                style={
                    new TextStyle({
                        fontSize: 20,
                        fontFamily: 'PixelifySans-Regular',
                    })
                }
            />
        </Container>
    )
}

export default ScoreUIView
