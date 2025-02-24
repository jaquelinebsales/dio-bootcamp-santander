/*let ligado:boolean = false
let nome:string = "Jaqueline"
let idade:number = 17
let altura:number = 1.50

let nulo:null = null
let indefinido:undefined = undefined

//O void é usado para executar coisas que não retornam nada
let retorn:void
//o any aceita qualquer tipo de valor
let any:any = ''

let produto:object ={
    name: "Jaqueline",
    cidade:"maranguape",
    idade: 17,
}

class Character {
    protected name?: string;
    readonly stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Atack with ${this.stregth} points`)
    }
}

//Character: superclass
//Magician : subclass
class Magician extends Character{

    magicPoints: number;
    constructor(name: string, stregth: number, skill:number, magicPoints: number){
        super(name, stregth, skill)
        this.magicPoints = magicPoints;
    }
}

//generics


function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens)
}

const numArray = concatArray<number[]>([1,5],[3])
const stgArray = concatArray<string[]>(["Jaqueline"],["Cucas"])

//decorators

function ExibirNome(target: any){
    console.log(target)
}

@ExibirNome
class Funcionario{

}

@ExibirNome
class Quincas{

}
function apiVersion(version: string){
    return(target:any)=>{
        Object.assign(target.prototype,{
            __version: version
        })
    }
}


@apiVersion("1.10")*/
function minLength(length: number){
    return (target:any, key:string) => {
        let _value = target[key]

        const getter = () => _value
        const setter = (value:string) =>{
            if(value.length<length){
                throw new Error(`Tamanho menor do que ${length}`)
            }else{
                _value = value
            }
        }

        Object.defineProperty(target, key,{
            get: getter,
            set: setter,
        })
    }}

class Api{
    @minLength(3)
    name:string
    constructor(name:string){
        this.name = name
    }
}
/*
const api = new Api();
console.log(api.__version)*/
