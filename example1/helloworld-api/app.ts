import express from 'express';
import {Request, Response, json} from 'express';

var app = express();
app.get('/', json(), (req:Request, res:Response) => {
    res.status(200).json({text:"Hello world"})
    return
})
app.get('/hey', json(), (req:Request, res:Response) => {
    res.status(200).json({text:"Hey world"})
    return
})

//start
app.listen(3001, function () {
    console.log(`Example API listening on port 3001 !`)
});
 

 