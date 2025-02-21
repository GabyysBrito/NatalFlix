import s from  '../main/main.module.scss'
import imageGrandePrograma from '../../assets/main/imageGrandePrograma.png'
import tituloPrograma from '../../assets/main/tituloPrograma.png'
import iconePlay from '../../assets/main/iconePlay.png'
import iconeFavoritos from '../../assets/main/iconeFavoritos.png'
import imagemPequenaPrograma1 from '../../assets/main/imagemPequenaPrograma1.png'
import imagemPequenaPrograma2 from '../../assets/main/imagemPequenaPrograma2.png'
import imagemPequenaPrograma3 from '../../assets/main/imagemPequenaPrograma3.png'
import imagemPequenaPrograma4 from '../../assets/main/imagemPequenaPrograma4.png'
import imagemPequenaPrograma5 from '../../assets/main/imagemPequenaPrograma5.png'

export default function Main() {

    const assistindoProgramas = [
        {
            imagemAssistir: imagemPequenaPrograma1,
            textoAlt: 'Imagem de um programa com duas pessoas uma mulher com roupa vermelha em um lugar com neve e um homem com roupa de medieval'
        },
        {
            imagemAssistir: imagemPequenaPrograma2,
            textoAlt: 'Imagem de um programa com um menino de boca aberta chocado'
        },
        {
            imagemAssistir: imagemPequenaPrograma3,
            textoAlt: 'Imagem de um programa do grinch com uma roupa do papai noel'
        },
        {
            imagemAssistir: imagemPequenaPrograma4,
            textoAlt: 'Imagem de um programa mostrando um trem'
        },
        {
            imagemAssistir: imagemPequenaPrograma5,
            textoAlt: 'Imagem de um programa mostrando duas pessoas um homem e uma mulher '
        }
    ]

    return(
        <main className= {s.main}>
            
            <section className={s.programa}>
                <section className= {s.tituloPrograma}>

                    <section className={s.textoPrograma}>
                        <img className = {s.tituloGrande} src={tituloPrograma} alt="Descrição do título do programa para assistir" />
                        <p> 1h 37min | Aventura, Animação, Família</p>
                        <p>Jack Frost, um garoto que controla o inverno, se junta ao seleto time dos Guardiões Imortais para impedir Breu, o bicho-papão, de transformar todos os sonhos das crianças em pesadelo e usar seus poderes maquiavélicos para governar o mundo.</p>
                    </section>

                    <section className= {s.botoes}>
                        <div className={s.botaoAssistir}>
                            <img src={iconePlay} alt="icone de botão de play para assistir o programa" />
                            <p>Assistir</p>
                        </div>

                        <div className={s.botaoFavoritos}>
                            <img src={iconeFavoritos} alt="icone de botão de uma estrela para favoritar o programa" />
                            <p>Adicionar Aos Favoritos</p>
                        </div>

                    </section>
                </section>

                <section className= {s.fundoPrograma}>
                    <img src={imageGrandePrograma} alt="Uma imagem grande com uma foto do programa para poder assistir" />
                </section>
            </section>

            <section className= {s.continuarAssistindo}>
                <p>Continuar Assistindo</p>

                <section className={s.acompanharProgramas}>
                {
                    assistindoProgramas.map( (item) => (
                        <section className= {s.programas}>
                            <img src={item.imagemAssistir} alt={item.textoAlt} />
                            <div className={s.borda}></div>
                        </section>
                    ))
                }
                </section>

                <p>Filmes De Terror No Natal</p>
            </section>
        </main>
    )
}