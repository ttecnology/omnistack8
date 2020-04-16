//BOAS PRÁTICAS O CONTROLLER NÃO PODE TER MAIS DO QUE OS 5 MÉTODOS FUNDAMENTAIS
//QUE SÃO: INDEX, SHOW, STORE, UPDATE, DELETE
const Dev = require('../models/Dev');

module.exports = {
    async store(req,res){

        const {devId} = req.params;
        const {user} = req.headers;

        const loggedDev = await Dev.findById(user);
        const targertDev = await Dev.findById(devId);

        if(!targertDev){
            return res.status(400).json({
                error: 'Dev not exists'
            });
        }

        loggedDev.dislikes.push(targertDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
};