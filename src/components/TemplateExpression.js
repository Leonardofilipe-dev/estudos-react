const TemplateExpression = () =>{
    const nome = "Leonardo"

    const data = {
        age:26,
        job: "Programmer",

    }
 return(
    <div>
        <h1 className="meuNome">Olá, {nome}</h1>
        <p>Você atua como: {data.job}</p>
    </div>
 )
}

export default TemplateExpression