import express from "express"
import mysql from "mysql"
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express();

app.use(cors())
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"classdata"
})
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/api/student/view",(req,res)=>{
    const qry = "SELECT * FROM attendance";
    db.query(qry,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    });
});

//serach student
app.get("/api/student/search/:reg",(req,res)=>{
    const { reg } = req.params;
    const qry = "SELECT * FROM attendance where register =?";
    db.query(qry,reg,(error,result)=>{
        if(error){
            console.log(error);
        }
        res.send(result);
    })
})

//Add new student
app.post("/api/student/add",(req,res)=>{
    const {reg,name,iemail,pemail,mobile} = req.body;
    const qry = "INSERT INTO attendance(register,sname,iemail,pemail,mobile) VALUES(?,?,?,?,?)";
    db.query(qry,[reg,name,iemail,pemail,mobile],(error,result)=>{
        if(error){
            res.send(error);
            res.status(500);
        }
        res.send(result);
    });
});

//Delete Student
app.delete("/api/student/remove/:reg",(req,res)=>{
    const { reg } = req.params;
    const qry = "DELETE FROM attendance WHERE register = ?";
    db.query(qry,reg, (error,result)=>{
        if(error)
        {
            console.log(error);
        }
        res.send(result);
    });
});



app.put("/api/student/update/:reg",(req,res)=>{
    const { reg } = req.params;
    const {name,iemail,pemail,mobile} =req.body;
    const qry = "UPDATE attendance SET sname = ?,iemail=?,pemail=?,mobile=? WHERE register=?";
    db.query(qry,[name,iemail,pemail,mobile,reg],(error,result)=>{
        if(error){
            console.log(error);
        }
        res.send(result);
    })
})






app.listen(3000,()=>{
    console.log("Connected to server.");
})