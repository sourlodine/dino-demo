import { Container, Sprite, AnimatedSprite, useTick } from '@pixi/react'
import { Texture } from 'pixi.js'
import React, { useState, useEffect, useRef } from 'react'
import { GameState } from '../states/GameState'

interface Props {
    x: number
    y: number
    gameState: GameState
    player: React.RefObject<any>
}

const PlayerView = ({ x, y, gameState, player }: Props) => {
    const [frames, setFrames] = useState<Texture[]>([])
    const [yPosition, setYPosition] = useState(0)
    const [isJumping, setJump] = useState(false)
    const [isGrounded, setIsGround] = useState(true)

    const jumpForce = -100
    const dinoImagesDieUrl = '/assets/dinosaur_die.png'

    let fired: boolean

    document.onkeydown = function (e) {
        if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
            if (!fired) {
                fired = true

                if (!isJumping && isGrounded) {
                    setJump(true)
                    setIsGround(false)
                }
            }
        }
    }

    document.onkeyup = function () {
        fired = false
    }

    useTick((delta) => {
        if (gameState == GameState.GameOver) {
            return
        }

        if (isJumping && yPosition >= jumpForce) {
            let yPosJump = yPosition
            yPosJump -= 5 * delta
            setYPosition(yPosJump)
        } else if (isJumping && yPosition <= jumpForce) {
            setJump(false)
        } else if (!isJumping && yPosition <= 1) {
            let yPosDown = yPosition
            yPosDown += 5 * delta
            setYPosition(yPosDown)
        } else {
            setIsGround(true)
        }
    })

    useEffect(() => {
        const dinoImages = ['/assets/dinosaur.png', '/assets/dinosaur_left.png', '/assets/dinosaur_right.png']
        const textureArray: Texture[] = []

        for (let i = 0; i < dinoImages.length; i++) {
            textureArray.push(Texture.from(dinoImages[i]))
        }

        setFrames(textureArray)
    }, [])

    if (frames.length === 0) {
        return null
    }

    if (gameState == GameState.GameOver) {
        return (
            <Container position={[x, y]}>
                <Sprite ref={player} image={dinoImagesDieUrl} anchor={0.5} />
            </Container>
        )
    } else {
        return (
            <Container position={[x, y]}>
                <AnimatedSprite
                    ref={player}
                    y={yPosition}
                    anchor={0.5}
                    textures={frames}
                    isPlaying={true}
                    initialFrame={0}
                    animationSpeed={0.1}
                />
            </Container>
        )
    }
}

export default PlayerView
