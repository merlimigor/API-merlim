import logo from './logo.png';
import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';


function App() {

  const [showElement, setShowElement] = useState(false)

    const showOrHide = () => {
      if (showElement == false ) {
        setShowElement(true)
      } else {
        setShowElement(false)
      }
    }

    const [showElement2, setShowElement2] = useState(false)

    const showOrHide2 = () => {
      if (showElement2 == false ) {
        setShowElement2(true)
      } else {
        setShowElement2(false)
      }
    }

  const getProduto = async () => {

    try{
      const response = await axios.get(`http://ec2-18-229-156-216.sa-east-1.compute.amazonaws.com:5000/produto`)
      console.log(response.data)
      const dados = response.data        
      const nomeproduto = document.querySelector('.nome-produto')
      let lista = []
      dados.forEach((nome, index) => {
        console.log(nome.nome)
        lista += ` 
        <div className='nome-produtos'> 
          <ul><img className='img-produto' src='${nome.descricao}'><br>
            Nome: ${nome.nome}<br>
            Preço: R$ ${nome.preco}<br>
            ID:${nome._id}<br></ul>
            </div>
            <br>
            <br>
            `
      })
      nomeproduto.innerHTML = lista
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getProduto()
  })

  const apagarProduto = (id) => {
    id = apagado
    axios.delete(`http://ec2-18-229-156-216.sa-east-1.compute.amazonaws.com:5000/produto/${id}`)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
  }

  const [inputValue0, setInputValue0] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [inputValue5, setInputValue5] = useState('');
  const [inputValue6, setInputValue6] = useState('');
  const [inputValue7, setInputValue7] = useState('');
  function handleInputChange0(event) {
    setInputValue0(event.target.value);
  }
  function handleInputChange1(event) {
    setInputValue1(event.target.value);
  }
  function handleInputChange2(event) {
    setInputValue2(event.target.value);
  }
  function handleInputChange3(event) {
    setInputValue3(event.target.value);
  }
  function handleInputChange4(event) {
    setInputValue4(event.target.value);
  }
  function handleInputChange5(event) {
    setInputValue5(event.target.value);
  }
  function handleInputChange6(event) {
    setInputValue6(event.target.value);
  }
  function handleInputChange7(event) {
    setInputValue7(event.target.value);
  }
  let apagado = inputValue0
  console.log(apagado)
  let nomeProduto = inputValue1
  let precoProduto = inputValue2
  let descricaoProduto = inputValue3
  let idAtualizado = inputValue4
  let nomeAtualizado = inputValue5
  let precoAtualizado = inputValue6
  let descricaoAtualizado = inputValue7
  console.log(nomeProduto)
  console.log(precoProduto)
  console.log(descricaoProduto)
  console.log(idAtualizado)
  console.log(nomeAtualizado)
  console.log(precoAtualizado)
  console.log(descricaoAtualizado)
  
  const enviarProduto = () => {

    let novoProduto = {
      nome: nomeProduto,
      preco: precoProduto,
      descricao: descricaoProduto,
    }
    axios.post(`http://ec2-18-229-156-216.sa-east-1.compute.amazonaws.com:5000/produto`, novoProduto)
    .then(response => {
        console.log(response)
        console.log(response.data)
        alert(response.data.messge)
    })
    .catch(error => console.log(error))
  }

  const atualizarProduto = (id) => {
    id = idAtualizado
    let produtoAtualizado = {
      nome: nomeAtualizado,
      preco: precoAtualizado,
      descricao: descricaoAtualizado,
    }

    if(!id){
        alert('sem nome')
        return
    }

    axios.patch(`http://ec2-18-229-156-216.sa-east-1.compute.amazonaws.com:5000/produto/${id}`, produtoAtualizado)
    .then(response => {
      alert('Produto Atualizado!')
    console.log('Recurso atualizado com sucesso:', response.data);
    })
    .catch(error => {
    console.error('Ocorreu um erro ao atualizar o recurso:', error);
    });
}

  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className='image'></img>
      </header>
        <section className="s_hero">
        {showElement ?<div className="none">
                        <div className="dados">
                            <p>Adicionar</p>
                          <div className='incluir'>
                            <span>Nome</span>
                            <input className='nome' onChange={handleInputChange1} value={inputValue1} placeholder='digite o nome'></input>
                            <span>Preço</span>
                            <input className='preco' onChange={handleInputChange2} value={inputValue2} placeholder='digite o valor'></input>
                            <span>URLimagem</span>
                            <input className='urlImagem' onChange={handleInputChange3} value={inputValue3} placeholder='digite a url da imagem'></input>
                            <button className='btn-add' onClick={enviarProduto} >Adicionar</button>
                          </div>

                          <div className='borda'></div>

                              <p>Editar</p>
                          <div className='incluir'>
                               
                              <span>Id</span>
                              <input placeholder='digite o id do produto' onChange={handleInputChange4}></input>
                              <span>Nome</span>
                              <input className='nome2' placeholder='digite o nome' onChange={handleInputChange5}></input>
                              <span>Preço</span>
                              <input className='preco2' placeholder='digite o valor' onChange={handleInputChange6}></input>
                              <span>URLimagem</span>
                              <input className='urlImagem2' placeholder='digite a url da imagem' onChange={handleInputChange7}></input>
                              <button className='btn-alt' onClick={atualizarProduto}>Alterar</button>
   
                          </div>
                          
                          <div className='borda'></div>
                            <p>Deletar</p>
                          <div className="dell">
                            <span>Id</span>
                            <input placeholder='digite o id do produto' onChange={handleInputChange0} value={inputValue0}></input>
                            <button className='btn-dell'onClick={apagarProduto}>Deletar</button>
                          </div>
                        </div>
                      </div>  : null}
          <div className="lista">
            <div className='produtos'> 

              <img className='img-produto'></img>
              <div className='nome-produto'></div>
            </div>
          </div>
        </section>
         <button onClick={showOrHide}  className="add">+</button>
    </div>
  );
}

export default App;