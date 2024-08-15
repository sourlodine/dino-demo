import { Container, Sprite, Text, useTick } from '@pixi/react'
import { TextStyle } from 'pixi.js'
import React, { useEffect, useRef, useState } from 'react'
import { GameState } from '../states/GameState'

interface Props {
    x: number
    y: number
    gameState: GameState
    width: number
    player: React.RefObject<any>
    setState: React.Dispatch<React.SetStateAction<GameState>>
}

const ObstacleSpawnView = ({ x, y, gameState, width, player, setState }: Props) => {
    const obstacleURL = '/assets/obstacle_single.png'
    const [position, setPosition] = useState<number>(0)
    const obstacle = useRef<any>()

    useEffect(() => {
        if (gameState == GameState.GamePlay) {
            if (position != 10) {
                setPosition(10)
            }
        }
    }, [gameState])
    useTick((delta) => {
        if (gameState == GameState.GameOver) {
            return
        }
        if (reactsIntersect()) {
            setState(GameState.GameOver)
        }
        if (position <= -width - 100) {
            setPosition(0)
            return
        }
        //  console.log(position)
        let positionCurrent = position
        positionCurrent -= 3
        setPosition(positionCurrent)
    })

    function reactsIntersect() {
        let playerBound = player.current?.getBounds()
        let obstacleBound = obstacle.current?.getBounds()

        return (
            playerBound.x + playerBound.width > obstacleBound.x &&
            playerBound.x < obstacleBound.x + obstacleBound.width / 2 &&
            playerBound.y + playerBound.height > obstacleBound.y &&
            playerBound.y < obstacleBound.y + obstacleBound.height
        )
    }

    return (
        <Container position={[x, y]} anchor={0.5}>
            <Sprite ref={obstacle} x={position} image={obstacleURL} anchor={0.5} scale={0.8} />
        </Container>
    )
}

export default ObstacleSpawnView
