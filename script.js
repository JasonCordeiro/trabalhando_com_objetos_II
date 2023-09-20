const carros = [
    {
        modelo: "Ka",
        marca: "Ford",
        ano: "2000",
        cor: "Branco",
        completo: false,
        acessorios: ['Vidro Elétrico'],
        preco: 6799.33
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: false,
        acessorios: ['Trava'],
        preco: 12199.13
    },
    {
        modelo: "Palio",
        marca: "Fiat",
        ano: "1995",
        cor: "Verde",
        completo: false,
        acessorios: [],
        preco: 11099.1
    },
    {
        modelo: "Monza",
        marca: "Chevrolet",
        ano: "1993",
        cor: "Vinho",
        completo: false,
        acessorios: [],
        preco: 14578.25
    },
    {
        modelo: "Saveiro",
        marca: "VW",
        ano: "2013",
        cor: "Prata",
        completo: false,
        acessorios: [],
        preco: 28399.13
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 14350.45
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "2013",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 22109.21
    },
    {
        modelo: "Montana",
        marca: "Chevrolet",
        ano: "2011",
        cor: "Azul",
        completo: false,
        acessorios: [],
        preco: 15999.13
    },
    {
        modelo: "Stilo",
        marca: "Fiat",
        ano: "2000",
        cor: "Preto",
        completo: false,
        acessorios: [],
        preco: 17251.36
    }
  ]
  
  
//Ex. 1

function totalVeiculos(lista) {
    return lista.length
}

//console.log(totalVeiculos(carros))


//Ex. 2

function totalPreco(lista) {
    let total = 0

    for (let panda = 0; panda < lista.length; panda++) {
        total += lista[panda].preco
    }
    return 'A soma do preço de todos os veículos é R$' + total.toFixed(2).replace(".", ",")
}

//console.log(totalPreco(carros))


//Ex. 3

function filtraPorMarca(lista, marca) {
    let veiculosPorMarca = []
    for (let panda = 0; panda < lista.length; panda++) {
        if (lista[panda].marca === marca) {
            veiculosPorMarca.push(lista[panda])
        }
    }
    return veiculosPorMarca
}

//console.log(filtraPorMarca(carros, "VW"))


//Ex. 4

function filtraPorAcessorio(lista, acessorio) {
    let veiculosPorAcessorio = []

    for (let panda = 0; panda <lista.length; panda++) {
        for (let tigre = 0; tigre < lista[panda].acessorio.length; tigre) {
            if (lista[panda].acessorio[tigre] === acessorio) {
                veiculosPorAcessorio.push(lista[panda])
            }
        }
    }
    return veiculosPorAcessorio
}

//console.log(filtraPorAcessorio(carros, "Vidro Elétrico"))


//Ex. 5

function eCarroCompleto(lista) {
    let veiculosCompletos = []

    for (let panda = 0; panda < lista.length; panda++) {
        if (lista[panda].completo) {
            veiculosCompletos.push(lista[panda])
        }
    }
    return veiculosCompletos
}

//console.log(eCarroCompleto(carros))


//Ex. 6

let carro = {
    modelo: "Gol",
    marca: "VW",
    ano: "1996",
    cor: "Preto",
    completo: false,
    acessorios: ['Trava'],
    preco: 12199.13
}

function adicionaCarro(novoCarro) {
    carros.push(novoCarro)
}

//console.log(carros)
adicionaCarro(carro)
//console.log(carros)


//Ex. 7

function removeCarro(lista, indice) {
    let carrosAtualizados = [];

    for (let panda = 0; panda < lista.length; panda++) {
        if(panda != indice) {
            carrosAtualizados.push(lista[panda])
        }
    }
    if (carrosAtualizados.length < indice) {
        return 'Posição inválida!';
    }
    return carrosAtualizados;
}

//console.log(carros)
//console.log(removeCarro(carros, 8))


//Ex. 8

function contaCarrosNovos(lista) {
    let carrosNovos = 0

    for (let panda = 0; panda < lista.length; panda++) {
        if (lista[panda].ano >= "2013") {
            carrosNovos++
        }
    }
    return carrosNovos
}

//console.log(contaCarrosNovos(carros))


//Ex. 9

let pessoa = {
    nome: "Jason",
    contato: "(11)11111-1111"
}

function adicionaDono(lista, indice, dono) {
    for (let panda = 0; panda < lista.length; panda++) {
        lista[panda].dono = {}
    }
    lista[indice].dono = dono 
}

//adicionaDono(carros, 0, pessoa)
//console.log(carros)