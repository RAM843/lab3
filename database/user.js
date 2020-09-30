var mongoose = require("./connect");
var USERSCHEMA = new mongoose.Schema({
    nick: {
        type: String,
        required: [true, "El nickname es necesario"]
    },
    age: {
        type: Number,
        required: [true, "La edad es necesaria"]
    },
    email: {
        type: String,
        required: [true, "El email es necesario"],
        validate: {
            validator: (value) => {
                return /^[\w\.]+@[\w\.]+\.\w{3,3}$/.test(value);
            },
            message: props => `${props.value} no es valido`
        }
        
    },
    password: {
        type: String,
        required: [true, "El password es necesario"],
        min: [6, "El password debe tener un minimo de 6 caracteres"],
        validate: {
           validator: (value) => {
               if (!/[A-Z]+/.test(value)) {
                   return false
               }
               if (!/[\$\^\@\&\(\)\{\}\#]+/.test(value)) {
                   return false
               }
               return true;
           },
           message: props => `${props.value} El password necesata 1 mayuscula y un caracter especial`
        }
    },
    roles: {
        type: Array,
        default: []
    },
    playlist: {
        type: Array,
        default: []
    },
    create: {
        type: Date,
        default: new Date()
    }
});
var USER = mongoose.model("user", USERSCHEMA);
module.exports = USER;