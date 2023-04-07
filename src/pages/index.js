import { Inter } from 'next/font/google';
import Avatar from '../../componentes/avatar';
import {UploadImagem} from '../../componentes/uploadImagem';
import { useState, useRef } from 'react'
import Botao from '../../componentes/botao';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [imagem, setImagem] = useState(null);
  const referenciaInput = useRef(null);

  return (
     
    <>
      <h1>Projeto Devagram em React!</h1>
      <button onClick={() => referenciaInput?.current?.click()}>abrir seletor de arquivos</button>

      <UploadImagem
        setImagem={setImagem}
        imagemPreview={imagem?.preview}
        aoSetarAReferencia={(ref) => referenciaInput.current = ref}
      />

      <div style={{width: 200}}>
        <Avatar />
        <Botao texto={'Login'} cor='invertido' manipularClique={() => console.log('botao clicado')} />
      </div>
    </>
  )
}
