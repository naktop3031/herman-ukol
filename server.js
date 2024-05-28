const express = require('express')
const fs = require('fs')
const path = require('path')
const server = express()
const PORT = 3000
const cors = require('cors')
const exifr = require('exifr')

server.use(cors())
server.use(express.static('public')) // Serve static files from 'public' directory

server.get('/api', (req, res) => {
    res.json({ message: 'Hello from the server!' })
})

server.get('/', (req, res) => {
    res.json({ message: 'Aplikace se spouští spuštěním souboru index.html.' })
})

server.get('/api/images', async (req, res) => {
    const imageDir = path.join(__dirname, 'public/content') // Adjust the path if necessary
    fs.readdir(imageDir, async (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory')
        }

        const imageNames = files.filter(file => /\.(jpg|jpeg)$/.test(file))
        const imagePromises = imageNames.map(async (imageName) => {
            let {latitude, longitude} = await exifr.gps(`public/content/${imageName}`)
            return { name: imageName, coordinates: { latitude, longitude } }
        })

        try {
            const images = await Promise.all(imagePromises)
            res.json(images)
        } catch (error) {
            res.status(500).send('Error processing images')
        }
    })
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
