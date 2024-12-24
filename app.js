let btn=document.querySelector('button')
url="https://pokeapi.co/api/v2/pokemon/"
btn.addEventListener('click',async ()=>{
    input=document.querySelector('input')
    querry=url+input.value
    data=await getdata(querry)
    if (data==1){
        console.log('not foud')
    }else{

        
        console.log(data)
        let image=data.sprites.front_default
        let base_Exp=data.base_experience
        let weight=data.weight
        let height=data.height
        let HP=data.stats[0].base_stat
        let attack=data.stats[1].base_stat
        let defence=data.stats[2].base_stat
        let name=data.name

        let h1 = document.querySelector("#name")
        h1.innerText = name

        let base = document.querySelector("#base_exp")
        base.innerText = `BASE EXP: ${base_Exp}`

        let hp = document.querySelector("#HP")
        hp.innerText =`HP: ${HP}`

        let ATk = document.querySelector("#Attack")
        ATk.innerText =`ATTACK: ${attack}`

        let DFN = document.querySelector("#Defence")
        DFN.innerText =` DEFENCE: ${defence}`

        let WGT = document.querySelector("#weight")
        WGT.innerText = `WEIGHT: ${weight}`

        let HGT=document.querySelector("#height")
        HGT.innerText = `HEIGHT:${height}`

        let pic=document.querySelector('img')
        pic.setAttribute('src',image)
        
        
    }
})


async function getdata(querry){
    try{
        let res=await  axios.get(querry)
        return res.data
    }catch{
        return 1
    }
}