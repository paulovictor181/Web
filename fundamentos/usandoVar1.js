{
    {
        {
            { var sera = 'Será??'
            console.log(sera)}
            
        }
    }
}
// Var possui escopo global e de função
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()

// Não pode ser impressa no console, pois está fora de escopo
console.log(local)