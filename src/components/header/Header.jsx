import chapeuNatal from '../../assets/header/chapeuNatal.png'
import perfil from '../../assets/header/perfil.png'
import setinha from '../../assets/header/setinha.png'
import busca from '../../assets/header/lupa.png'
import iconeCasa from '../../assets/header/iconeCasa.png'
import iconeFitaFilmes from '../../assets/header/iconeFitaFilmes.png'
import iconeTv from '../../assets/header/iconeTv.png'
import iconeEstrela from '../../assets/header/iconeEstrela.png'
import iconeEngrenagem from '../../assets/header/iconeEngrenagem.png'
import logoNatalFlix from '../../assets/header/logoNatalFlix.png'
import s from './header.module.scss'

export default function Header() {
    return(
        <header className={s.header}>
            
            <section className= {s.container}>
                <section className={s.perfil}>
                    <img className= {s.chapeuNatal} src={chapeuNatal} alt="Um chapéu do papai noel" />
                    <img className= {s.fotoPerfil} src={perfil} alt="Uma imagem de perfil redondo de um personagem da série da personagem principal Vandinha" />
                    <img className= {s.setinha} src={setinha} alt="Icone de um seta pra baixo" />
                </section>
                <section className={s.busca}>
                    <img src={busca} alt="Icone de uma lupa" />
                </section>
            </section>

            <nav className= {s.nav}>
                <ul>

                    <li className= {s.icones}>
                        <a href="#">
                            <img className={s.imageIcones} src={iconeCasa} alt="Icone de uma casa" />
                            <p className= {s.texto}>Início</p>
                        </a>
                    </li>

                    <li className= {s.icones}>
                        <a href="#">
                            <img className={s.imageIcones} src={iconeFitaFilmes} alt="Icone de uma fita cassete" />
                            <p className= {s.texto}>Filmes</p>
                        </a>
                    </li>

                    <li className= {s.icones}>
                        <a href="#">
                            <img className={s.imageIcones} src={iconeTv} alt="Icone de uma mini tv com antena" />
                            <p className= {s.texto}>Séries</p>
                        </a>
                    </li>

                    <li className= {s.icones}>
                        <a href="#">
                            <img className={s.imageIcones} src={iconeEstrela} alt="Icone de uma estrela" />
                            <p className= {s.texto}> Minha Lista</p>  
                        </a>
                    </li>

                    <li className= {s.icones}>
                        <a href="#">
                            <img className={s.imageIcones} src={iconeEngrenagem} alt="" />
                            <p className= {s.texto}>Configurações</p>
                        </a>
                    </li>
                </ul>
            </nav>

            <section className= {s.imagemNatal}>
                <img src={logoNatalFlix} alt="" />
            </section>
        </header>
    )
}