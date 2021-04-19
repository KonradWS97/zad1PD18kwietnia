// Mając tablice persons 
// =["John Kowalczyk","Mariusz Zimowi","Janek Janek",
// "Ewa Koc","Mariusz Abramski"],
//  wyświetl wartości na ekranie, ale ze względu na 
//  RODO nie chcesz wyświetlać
//  nazwisk i imion osób. W tym celu zamiast nazwiska wyświetl **** ****.
let person =["John Kowalczyk","Mariusz Zimowi","Janek Janek","Ewa Koc","Mariusz Abramski"]
person.map(n=>{
    console.log(n)
    console.log(n.length)
    console.log(n.indexOf(' ') )
    let a =n.indexOf(' ')
    let dlugosc= n.length
    console.log(n.slice(0,a) )
    console.log(n.slice(0,a).length )
    console.log(n.slice(a+1,dlugosc) )
    console.log(n.slice(a+1,dlugosc).length )
    let dlImienia = n.slice(0,a).length
    let dlNazwiska = n.slice(a+1,dlugosc).length
    const x = "*"
    let wImienia = dlImienia * 'x'
    console.log(wImienia)
    let xdlImienia = x.repeat(dlImienia)
    let xdlNazwiska = x.repeat(dlNazwiska)
    console.log( `${xdlImienia}  ${xdlNazwiska}`)
    let xperson = person.push({
        name: xdlImienia,
        SecName: xdlNazwiska,
      })
      var text = document.createTextNode(xdlImienia +" ");
      var text1 = document.createTextNode(xdlNazwiska );
    // let xNameOfPersone = document.getElementById('name')
    var el = document.createElement("li");
    document.getElementById("name").appendChild(el);
    el.appendChild(text);          
    el.appendChild(text1);  

})