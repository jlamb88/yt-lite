import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from './'
import { fetchAPI } from '../utils/fetchAPI'
import { useParams} from 'react-router-dom'


//const Feed = () => {
function SearchFeed() {

    const [videos, setVideos] = useState(null)
    const { searchTerm } = useParams()

    useEffect(
        () => {
            fetchAPI(`search?part=snippet&q=${searchTerm}`)
                .then((data) => {
                    setVideos(data.items)
                })
        }, [searchTerm])

    return (
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
                <Typography variant='h4'
                    fontWeight="bold" mb={2}
                    sx={{ color: "white" }}>
                    Search Results for: <span style={{ color: '#F31503' }}> { searchTerm } videos</span>
                </Typography>
                <Box display='flex'>
                    <Box sx={{ mr: { sm: '100px'}}} />
                    {<Videos videos={videos} />}
                </Box>
        </Box>
        
    )
}

export default SearchFeed