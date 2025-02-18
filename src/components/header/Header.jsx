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
            
            <section className={s.perfil}>
                <img className= {s.chapeuNatal} src={chapeuNatal} alt="" />
                <img className= {s.perfil} src={perfil} alt="" />
                <img src={setinha} alt="" />
            </section>

            <section className={s.busca}>
                <img src={busca} alt="" />
            </section>

            <nav className= {s.nav}>
                <ul>
                    <li>
                        <a href="#">
                        <img src={iconeCasa} alt="" />
                        <p>Início</p>
                        </a>
                    </li>

                    <li>
                        <a href="#"><img src={iconeFitaFilmes} alt="" />
                        <p>Filmes</p>
                        </a>
                    </li>

                    <li>
                        <a href="#"><img src={iconeTv} alt="" />
                        <p>Séries</p>
                        </a>
                    </li>

                    <li>
                        <a href="#"><img src={iconeEstrela} alt="" />
                        <p>Minha Lista</p>  
                        </a>
                    </li>

                    <li>
                        <a href="#"><img src={iconeEngrenagem} alt="" />
                        <p>Configurações</p>
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