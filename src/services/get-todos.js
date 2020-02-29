const pool=require('../db');

const getTodos= async (req, res) => {
    const limit=parseINt(req.query.limit) || 25;
    const offset=parseInt(req.query.offset) || 0;


    const poolPRomise = pool.promise();

    try {
const [result]= await poolPRomise.query("SELECT id, title, description, responsible, is_complete as isComplete FROM todo ORDER BY id DESC LIMIT ? OFFSET ?",[limit, offset]);
res.send(result)   
}

    

    catch(e){

        res.send("error");

    }

}

module.exports=getTodos;