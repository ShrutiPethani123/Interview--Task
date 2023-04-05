const express = require('express')
const app = express()
const port = 5000


app.get('/task-1', (req, res) => {
    // console.log(req.query);
    num = req.query.number
    // console.log(num);


    let ans = " "
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            ans += 'FixBuz '
        } else if (i % 3 === 0) {
            ans += 'Fiz '
        } else if (i % 5 === 0) {
            ans += 'Buz '
        } else {
            ans += i + ' '
        }
    }
    console.log(ans);
    res.send(ans)
    
})

app.get('https://reqres.in/api/users',(req,res)=>{
    const user = res.data
    req.send(res)
})

app.listen(port, () => {
    console.log(`Server start at port ${port}`);
})