import { Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useState } from 'react';
import apiClient from '../services/api-client';

interface Game{
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[] 
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')
    useEffect(()=>{
        apiClient.get<FetchGamesResponse>('/games')
        .then(res =>setGames(res.data.results))
        .catch(err => setError(err.message))
    },[])

    // setGames(res.data.resultProperty)
  return (
    <>
    {error && <Text>{error}</Text>}
    {
        !error && (
            <ul>
            {
                games.map(game => <li key={game.id}>{game.name}</li>)
            }
            </ul>
        )
    }
    </>
  )
}

export default GameGrid