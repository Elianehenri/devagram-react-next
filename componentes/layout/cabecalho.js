import logoHorizontalImg from '../../public/imagens/logoHorizontal.svg';
import imagemLupa from '../../public/imagens/lupa.svg'
import Image from 'next/image';
import Navegacao from './navegacao';
import { useState } from 'react';
import ResultadoPesquisa from './resultadoPesquisa';

export default function Cabecalho() {
    const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
    const [termoPesquisado, setTermoPesquisado] = useState('');

    const aoPesquisar = async (e) => {
        setTermoPesquisado(e.target.value);
        setResultadoPesquisa([]);

        if (e.target.value.length < 3) {
            return;
        }

        try {
            const { data } = await usuarioService.pesquisar(termoPesquisado);
            setResultadoPesquisa(data);
        } catch (e) {
            alert('Erro ao pesquisar usuario. ' + e?.response?.data?.erro);
        }
    }


    const aoClicarResultadoPesquisa = (id) => {
        setResultadoPesquisa([]);
        setTermoPesquisado('');
        router.push(`/perfil/${id}`);
    }

     return (
        <header className={`cabecalhoPrincipal ${cabecalhoClassName}`}>
        <div className='conteudoCabecalhoPrincipal'>
            <div className='logoCabecalhoPrincipal'>
                <Image
                    onClick={redirecionarParaHome}
                    src={logoHorizontalImg}
                    alt='logo devagram'
                    layout='fill'
                />
            </div>

            <div className='barraPesquisa'>
                <div className='containerImagemLupa'>
                    <Image
                        src={imagemLupa}
                        alt='Icone lupa'
                        layout='fill'
                    />
                </div>

                <input
                    type='text'
                    placeholder='Pesquisar'
                    value={termoPesquisado}
                    onChange={aoPesquisar}
                />
            </div>

            <Navegacao className='desktop' />
        </div>

         {resultadoPesquisa.length > 0 && (
            <div className='resultadoPesquisaContainer'>
                {resultadoPesquisa.map(r => (
                    <ResultadoPesquisa
                        avatar={r.avatar}
                        nome={r.nome}
                        email={r.email}
                        key={r._id}
                        id={r._id}
                        onClick={aoClicarResultadoPesquisa}
                    />
                ))}
            </div>
        )} 
    </header>

     );
}
