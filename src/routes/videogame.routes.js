const express = require('express');
const router = express.Router();

const Videogame = require('../models/videogames');

router.get('/', async (req, res) => {

    const videojuegos = await Videogame.find();
    res.json(videojuegos);

});

router.get('/:id', async (req, res) => {
    const cvideogame = await Videogame.findById(req.params.id)
    res.json(cvideogame);
})

router.post('/', async (req, res) => {
    const {name,developers,caratula,banner,description,platform,price,video,category} = req.body;
    const vidojuego = new Videogame({name,developers,caratula,banner,description,platform,price,video,category});
    await vidojuego.save();
    res.json({status: 'success save videogame'});
})

router.put('/:id', async (req, res) => {
    const {name,developers,caratula,banner,description,platform,price,video,category} = req.body;
    const newvideogame = {name,developers,caratula,banner,description,platform,price,video,category};
    await Videogame.findByIdAndUpdate(req.params.id, newvideogame)
    res.json({status: 'success update videogame'});
})

router.delete('/:id', async (req, res) => {
    await Videogame.findByIdAndRemove(req.params.id);
    res.json({status: 'success delete videogame'});
})

module.exports = router;