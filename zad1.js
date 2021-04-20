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
    let imie=n.slice(0,a)
    let naz=n.slice(a+1,dlugosc)
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
      var text1 = document.createTextNode(xdlNazwiska +"   ");
      var textXXX =xdlImienia +" "+ xdlNazwiska 
      var textzImionami = n.slice(0,a) 
      var textzNazw = n.slice(a+1,dlugosc)
    // let xNameOfPersone = document.getElementById('name')
    var el = document.createElement("li");
    var el2 = document.createElement("li");
    let przyciskPokarz=document.createElement('button')
    document.getElementById("name").appendChild(el);
    el.appendChild(text);          
    el.appendChild(text1); 
    el.appendChild(przyciskPokarz) 
    przyciskPokarz.innerHTML= "  Pokarz "
    przyciskPokarz.addEventListener('click', function(){
        // el.style.display="none"
        el.innerText=" "
        el.innerText= textzImionami + " " + textzNazw
        let przyciskX=document.createElement('button')
        el.appendChild(przyciskX)
        przyciskX.innerHTML= " Powrót do X "
            przyciskX.addEventListener('click', function(){
                el.innerText=" "
                el.innerText= textXXX+ "  "
                el.appendChild(przyciskPokarz)                 
         })

    })
})