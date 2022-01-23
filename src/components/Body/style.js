import styled from 'styled-components'

export const Container = styled.div`
background: #EDEDED;
width: 700px;
height: 400px;
padding: 30px;
border: 0px solid black;
border-radius: 15px;
box-shadow: -2px 4px 15px grey;
margin: 45px auto ;

`;

export const Form = styled.div`
 max-width: 450px;
	height: 290px;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
  align-content: stretch;
  font-family: 'Roboto';
  
  
  div {
  flex: 1;
	margin: 5px;
	padding: 0 8px;
  font-weight: 500;

}

  
  input {
      height: 30px;
      border: 2px;
      margin: 5px 0;
      padding: 0 5px;
      border-radius: 4px;
      
  }
  
  #name {
    width: 420px;
  }
  #profession{
    width: 195px;
  }
  #telephone{
    width: 195px;
  }
  #ip{
    width: 270px;
  }
  #button-ip{
    width: 120px;
    height: 31px;
    background: #00D9D0;
    color: #0A1633;
    margin-top: 21px;
    
    border: 1px ;
    border-radius: 5px;
    text-align:center;
    cursor: pointer;
  }
  #button-ip:hover{
    background:#0A1633;
    color: white
  }

  #btn{
    
    width: 120px;
    height: 32px;
    background: #0A1633;
    color: white;
    margin: 30px 6px;
    border: 1px ;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
  }
  .btn-div{
    padding-left: 85px;
  }
    
  
`;




