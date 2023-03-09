import { useState } from "react";
import "./styles.css";

/*
  4º
  fizemos Accordeon( { title, content } )

  pois queremos os dados direamente, sem passar por um title.title ou content.content
*/
export default function Accordeon({ title, content }) {
  /* 5º
    como useState é que sinaliza pro react que ele precisa mudar oq tem na tela
    colocamos todos os elementos e componentes para ter um state,
    esse state, vai simbolizar um switch( mais conhecido como curto circuito )
  */
  const [selected, setSelected] = useState(false);

  return (
    <div
      className="accordion"
      /* 6º 
        o curto circuito, vai ser ativado pelo onclick
        caso false ele passa a ser true ( ativei, troquei, dei um switch, ou, fez um switch)
        caso true, ele passa a ser false ( desativei, troqueie, dei um switch, ou apenas, switch)
      */
      onClick={() => {
        setSelected(!selected);
      }}
    >
      <h1 className="accordion-question">
        {title}
      </h1>

      {/* 7º
        estava sendo feito {{ condição ? style : style }} ao inves de { condição ? { style } : { style } }

        com base no item 6, então, essa propriedade, vai ser renderizada, conforme o estado(state) da variável selected
        */}

      <div className="answer-div">
        <p
          className="accordion-answer"
          style={
            // fitcontent para ele ficar no tamanho ideal do p, position relative para ele voltar com sua posição norm
            selected ? { visibility: "visible", height: 'fit-content', position: 'relative' } : { visibility: "collapse" }
          } 
        >
          {content}
        </p>
      </div>
    </div>
  );
}
