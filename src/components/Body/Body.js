import React, { useState } from 'react'
import { Container, Form } from './style'
import {mask} from 'remask'

const Body = () => {
  
    /* FETCH */  
    function fetchIp() {
     fetch("https://ip-fast.com/api/ip/")
    .then(response => {
      return response.text();
    }).then(text => {
      console.log(text)
    }).catch(fetchIp(error) {
      console.log(error)
    });
    
  }
          
   /* MÁSCARAS */
   const [tele,setTele]= useState("")
   const [ip,setIp]= useState("")
   const maskTele = ev => {
     setTele(mask(ev.target.value, ['(99) 9 9999-9999']))
   }

  const maskIp = ev => {
    setIp(mask(ev.target.value, ['999.999.99.999']))
   }

  
   /* SALVAR DADOS */
  function salvar() {
    var arrayPessoas=[]
  if(JSON.parse(localStorage.getItem("dados")) != null){
      arrayPessoas.push(JSON.parse(localStorage.getItem("dados")));
  }
  var nome = document.getElementById("name").value;
  var profissao = document.getElementById("profession").value;
  var telefone = document.getElementById("telephone").value;
  var ip = document.getElementById("ip").value;
  
  
  var dados = {nome: nome, profissao: profissao, telefone: telefone, ip: ip};
  console.log(dados);
  arrayPessoas.push(dados);
  var pessoaJson = JSON.stringify(arrayPessoas);
  localStorage.setItem("dados", pessoaJson);
  }
  
  
  /* APAGAR DADOS */
  function apagar() {
    var arrayPessoas=[]
  if(JSON.parse(localStorage.removeItem("dados")) != null){
      arrayPessoas.push(JSON.parse(localStorage.removetItem("dados")));
  }
  var nome = document.getElementById("name").value="";
  var profissao = document.getElementById("profession").value;
  var telefone = document.getElementById("telephone").value;
  var ip = document.getElementById("ip").value;
  
  
  var dados = {nome: nome, profissao: profissao, telefone: telefone, ip: ip};
  console.log(dados);
  arrayPessoas.push(dados);
  var pessoaJson = JSON.stringify(arrayPessoas);
  localStorage.removeItem("dados", pessoaJson);
  }

    return (
        <Container>
          <Form>
          <div>
            <label id='label' htmlFor='title'>Nome</label> <br></br>
            <input id='name'  name='name' type="text"/>
          </div>

          <div>
            <label id='label' htmlFor='title'>Profissão</label> <br></br>
            <input id='profession'   name='profession' type="text"/>
          </div>

          <div>
            <label id='label' htmlFor='title'>Telefone</label> <br></br>
            <input id='telephone' onChange={maskTele}  value={tele} name='telephone' type="text"/>
          </div>

          <div>
            <label id='label' htmlFor='title'>Meu IP</label> <br></br>
            <input id='ip'onChange={maskIp} value={ip}  name='ip' type="text"/>
          </div>

          <div>
          <button id='button-ip'  >Encontrar IP</button>
          </div>

          <div className='btn-div'>
          <button id='btn' onClick={salvar} >Salvar</button>
          <button id='btn' type="reset" onClick={apagar} >Limpar</button>
          </div>
        </Form>
      </Container>
      
   
    
      
    )
}

export default Body
