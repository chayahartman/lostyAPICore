//שימוש במודול צד שלישי המאפשר יצירת שרת
//התקנו את המודול
//npm i express
//טעינת המודול

var myexpress=require('express')
//יצירת מופע מסוג אקפרס
var app=myexpress()
//רשימת משתמשים
var listUsers=[
    {name:"chaya",password:"12223242",mail:"chaya@gmail.com",phone:"0584215563"},
    {name:"mali",password:"12345678",mail:"mali@gmail.com",phone:"05332451678"},
    {name:"hadasa",password:"98765432",mail:"hadasa100@gmail.com",phone:"0544215563"},
    {name:"tami",password:"789542124",mail:"tammar@gmail.com",phone:"0533124563"},
    
]
//יצירת שרת
//פרמטר ראשון פורט להאזנה
// פרמטר שני פונקציה שתקרה בעת הרצה
app.listen(1234,()=>{
    console.log("runnnn!!!!!!!!!!!");
})
// request-בקשה יכיל את כל המידע על הקשה
// response-תגובה יכיל את כל המידע על התגובה
app.get('/',function(request,response){
//404-לא נימצא פונקציה בשם זה
// 405-שגיאה בסוג הפרמטרים
// 200-הצלחה
// 500-שגיאת שרת הצלחנו לאתר את הפונקציה אבל יש שגיאה בתוכן שלה
response.status(200,{'Content-Type':'text/html'})
//החזרת התגובה
response.send("<div>שלום וברכה לאתר שלנו!</div>")
// סגירת הקשר עם השרת
response.end()
})


//שליפת כל הרשימה
app.get('/getAll',(r,s)=>{
    s.status(200,{'Content-Type':'application/json'})
    s.send(listUsers)
    s.end()
})
// שליפה לפי שם וסיסמא

app.get('/getByNameAndPass/:myname/:mypas',(req,res)=>{
    let name=req.params.myname
    let pass=req.params.mypas
    res.status(200,{'Content-Type':'application/json'})
    res.send(listUsers.filter(h=>h.name==name && h.password==pass))
    res.end()
})