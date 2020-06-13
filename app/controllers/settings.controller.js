const usersModel = require('../models/users.model');

module.exports = {
    saveSettings
}

async function saveSettings(base64, name, _id, pwdActual, pwdNueva) {

    console.log("/ " + name + " / " + _id + " / " + pwdActual + " / " + pwdNueva);
    
    const user = await usersModel.findById(_id);

    if (base64 != 0) {
        user.image = base64;
        // user.findOneAndUpdate(
        //     { _id: _id },
        //     { image: base64 }
        // );
    }
    if (name != "-") {
        user.name = name;
        // user.findOneAndUpdate(
        //     { _id: _id },
        //     { name: name }
        // );
    }
    if (pwdActual != 0) {
        if (pwdActual == user.password) {
            user.password = pwdNueva;
            // user.findOneAndUpdate(
            //     { _id : _id },
            //     { password: pwdNueva }
            //  );
        }
    }
    console.log("/nombreNuevo"+user.name + " / passwordNueva"+user.password );
    await user.save();

    console.log("_-------------------------");


}