const cors = require('cors');
const mysql = require('mysql')
const bcrypt = require('bcrypt');
const express = require('express')


const app = express();
app.use(express.json())
app.use(cors());

// CONNECT TO THE MYSQL DATABASE
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'weblogin'
})

// CHECK IF THERE IS CONNECTION TO THE DATABASE
db.connect((err)=>{
    if (err){
        console.log('error connecting to database')
    }
    else{
        console.log('DataBase Successfully Connected')
    }
})
// SIGNUP USERS
app.post('/signup', async(req, res)=>{
    const sql = 'INSERT INTO users (email, password) VALUES(?, ?)';
    const {email, password} = req.body;

    try{
        const hashPassword = await bcrypt.hash(password, 10);

        const values = [email, hashPassword];

        db.query(sql, values, (err, response)=>{
            if (err) {
                return res.status(500).json({ err: 'Error in Database' });
            } else {
                return res.status(200).json('Signup Successful');
            } 
        } )


    }catch(error){console.error(error)}

})

// LOGIN USERS
app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM users WHERE email = ?';

    const { email, password } = req.body;

    db.query(sql, [email], async (err, results) => {
        if (err) {
            console.log('Error:', err);
            return res.status(500).json({ err: 'An error occurred' });
        }

        if (results.length === 0) {
            return res.status(404).json({ err: 'User not found' });
        }

        const user = results[0];

        try {
            const hashedPassMatch = await bcrypt.compare(password, user.password);

            if (hashedPassMatch) {
                return res.status(200).json('Login Successful');
            } else {
                return res.status(401).json({ err: 'Invalid password' });
            }
        } catch (bcryptError) {
            console.log('Bcrypt error:', bcryptError);
            return res.status(500).json({ err: 'An error occurred' });
        }
    });
});


app.get('/', (req, res)=>{
    return res.json('Backend is Connected Successfully')
})

app.listen(8081, ()=>{
    console.log('server connected')
});