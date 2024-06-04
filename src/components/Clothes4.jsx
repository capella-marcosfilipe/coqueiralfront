import React from 'react';
import "../styles/Clothes.css";
import coracaoImg from '../images/coracao.png';
import image1Img from '../images/roupa4.png';
import sacolaImg from '../images/sacolabranca 1.png';
import verdinBrechoImg from '../images/verdin brecho 2.png';

function Clothes1() {
  return (
    <div className="containerClothes1">
      <h1 className="titulo-lojaClothes1">CONJUNTO NACIONAL</h1>
      <div className="elementoClothes1">
        <h2 className='h2Clothes'>DESCRIÇÃO DO PRODUTO</h2>
        <h3 className='h3Clothes'>conjunto de tie dye artesanal, composto por uma vibrante t-shirt e uma estilosa bermuda, ambas exibindo as cores vivas da bandeira do Brasil. Feito com cuidado e paixão, cada peça deste conjunto reflete o conceito nacional em sua essência, celebrando a diversidade e a energia do país. O tie dye artesanal confere um toque único a cada peça, garantindo que você se destaque com estilo e originalidade por onde passar.</h3>
        <h2 className='h2Clothes'>ESPECIFICAÇÕES</h2>
        <h3 className='h3Clothes'>
        - PP (Extra Pequeno): Tamanho 34/36.<br />
        - P (Pequeno): Tamanhos 36 e 38. <br />
        - M (Médio): Tamanhos 40 e 42. <br />
        - G (Grande): Tamanhos 44 e 46. <br />
        - GG (Extra Grande): Tamanhos 48 e 50.</h3>
      </div>
      <div className="elemento com-imagemClothes1">
        <img src={image1Img} alt="foto conjunto nacional" />
      </div>
      <div className="elementoClothes1">
        <h2 className='valorClothes1'>Valor: R$ 115,00</h2>
        <h3 className='avistaClothes1'>à vista com 5% de desconto no boleto ou pix</h3>
        <div className="retanguloClothes1">
          <img className="imagem-sacolaClothes1" src={sacolaImg} alt="foto sacola" /> <p>IR PARA A LOJA</p>
          <img className="imagem-coracaoClothes1" src={coracaoImg} alt="icone favoritos" />
        </div>
        <div className="quadradoClothes1">
          <img className="imagem-marcaClothes1" src={verdinBrechoImg} alt="foto marca" /> <p>VERDIN BRECHÓ</p> 
          <div className="retaquadroClothes1">
            <p>+ SEGUIR</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clothes1;