import './index.scss';

export default function CadastroUsu() {
    return (
        <main className='main-cadastro'>
            <section className='section-cadastro-1'>
                <div className='div-logo'>
                    <h1>
                        Logo
                    </h1>
                </div>
                <div className='div-melhor-rede'>
                    <p>A melhor rede de imóveis!</p>
                </div>

                <div className='div-bemvindo'>
                    <h1>
                        Bem-Vindos de volta!
                    </h1>
                </div>
                <div className='div-logar-p'>
                    <p>
                        Se já tiver uma conta, clique no <br/>botão para logar.
                    </p>
                </div>

                <div>
                    <button className='buttom-entrar'>
                        Entrar
                    </button>
                </div>
                <div>
                    <p>
                        Esqueci minha senha.
                    </p>
                </div>
            </section>

            <section className='section-cadastro-2'>
                <div className='div-crie-conta'>
                    <h1>
                        Crie sua conta
                    </h1>
                </div>
                <div className='div-inputs'>
                    <input type='text' placeholder="Nome"></input>
                    <input type='text' placeholder="Email"></input>
                    <input type='password' placeholder="Senha"></input>
                </div>

                <div className='div-button-cadastrar'>
                    <button className='button-cadastrar'>
                        Cadastrar
                    </button>
                </div>
            </section>
        </main>
    );
}