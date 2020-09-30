var mongoose = require("./connect");
var musicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "El titulo es requerido"]
    },
    subtitle: {
        type: String,
        required: [true, "El subtitulo es requeridp"]
    },
    genero: Array,
    commentaries: [{ body: String, date: Date }],
    likes: [{_iduser: 
        {
            type: String,
            required: [true, "EL usuario es necesario"]
        }, 
        date: {
        type: Date,
        default: new Date()
    }}],
    Album: {
        type: String,
        required: [true, "El Album es necesario"]
    },
    year: Number,
    image: {
        type: String, 
        required: [true, "la ruta de la imagen es necesaria"]
    },
    pathfile: {
        type: String,
        required: [true, "la ruta de la canción es necesaria"]
    }
});
var MUSIC = mongoose.model("music", musicSchema);
module.exports = MUSIC;

