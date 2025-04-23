import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Presidente FC 2" },
    { name: "Novo MVP", content: "Welcome to Presidente FC" },
  ];
};

export default function Index() {
  return (
    <body>
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              Fantasy<span>Futebol</span>
            </div>
            <div className="user-info">
              <div className="user-avatar">TF</div>
              <div className="coins">C$ 100,00</div>
            </div>
          </div>
        </div>
      </header>

      <nav>
        <div className="container">
          <button className="hamburger">☰</button>
          <ul className="nav-links">
            <li>
              <a href="#" className="active">
                Escalar Time
              </a>
            </li>
            <li>
              <a href="#">Liga</a>
            </li>
            <li>
              <a href="#">Mercado</a>
            </li>
            <li>
              <a href="#">Pontuação</a>
            </li>
            <li>
              <a href="#">Estatísticas</a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container">
        <h1 className="page-title">Escale seu time</h1>

        <div className="stats-summary">
          <div className="stat-card">
            <h3>Pontuação</h3>
            <p>Última rodada: 65.2</p>
            <p>Total: 823.8</p>
          </div>
          <div className="stat-card">
            <h3>Patrimônio</h3>
            <p>C$ 100,00</p>
            <p>Valor do time: C$ 87,50</p>
          </div>
          <div className="stat-card">
            <h3>Próxima rodada</h3>
            <p>Rodada #12</p>
            <p>Fechamento: Sábado, 14:00</p>
          </div>
        </div>

        <div className="team-selection">
          <h2>Meu Time</h2>
          <p>Formação: 4-3-3</p>

          <div className="field">
            <div className="field-lines"></div>
            <div className="center-circle"></div>
            <div className="player-positions">
              <div className="position-row">
                <div className="player-spot filled">9</div>
                <div className="player-spot filled">11</div>
                <div className="player-spot filled">7</div>
              </div>
              <div className="position-row">
                <div className="player-spot filled">8</div>
                <div className="player-spot filled">5</div>
                <div className="player-spot filled">10</div>
              </div>
              <div className="position-row">
                <div className="player-spot filled">6</div>
                <div className="player-spot filled">4</div>
                <div className="player-spot filled">3</div>
                <div className="player-spot filled">2</div>
              </div>
              <div className="position-row">
                <div className="player-spot filled">1</div>
              </div>
            </div>
          </div>

          <button className="cta-button">Confirmar Escalação</button>
        </div>

        <div className="player-selection">
          <h2>Mercado de Jogadores</h2>

          <div className="filters">
            <div className="filter-item active">Todos</div>
            <div className="filter-item">Goleiros</div>
            <div className="filter-item">Zagueiros</div>
            <div className="filter-item">Laterais</div>
            <div className="filter-item">Meias</div>
            <div className="filter-item">Atacantes</div>
          </div>

          <div className="players-list">
            <div className="player-card">
              <div className="player-header">
                <span>Atacante</span>
                <span>GOL</span>
              </div>
              <div className="player-info">
                <div className="player-name">Pedro</div>
                <div className="player-team">Flamengo</div>
                <div className="player-stats">
                  <span className="player-price">C$ 15.5</span>
                  <span className="player-average">8.2</span>
                </div>
              </div>
            </div>

            <div className="player-card">
              <div className="player-header">
                <span>Meia</span>
                <span>PAL</span>
              </div>
              <div className="player-info">
                <div className="player-name">Raphael Veiga</div>
                <div className="player-team">Palmeiras</div>
                <div className="player-stats">
                  <span className="player-price">C$ 18.2</span>
                  <span className="player-average">7.8</span>
                </div>
              </div>
            </div>

            <div className="player-card">
              <div className="player-header">
                <span>Zagueiro</span>
                <span>CAM</span>
              </div>
              <div className="player-info">
                <div className="player-name">Junior Alonso</div>
                <div className="player-team">Atlético-MG</div>
                <div className="player-stats">
                  <span className="player-price">C$ 9.8</span>
                  <span className="player-average">6.5</span>
                </div>
              </div>
            </div>

            <div className="player-card">
              <div className="player-header">
                <span>Goleiro</span>
                <span>FLU</span>
              </div>
              <div className="player-info">
                <div className="player-name">Fábio</div>
                <div className="player-team">Fluminense</div>
                <div className="player-stats">
                  <span className="player-price">C$ 10.5</span>
                  <span className="player-average">7.1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h2>
                Fantasy<span>Futebol</span>
              </h2>
              <p>O melhor fantasy game de futebol brasileiro</p>
            </div>
            <div className="footer-links">
              <h3>Links Rápidos</h3>
              <ul>
                <li>
                  <a href="#">Regulamento</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
                <li>
                  <a href="#">Sobre nós</a>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Redes Sociais</h3>
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Fantasy Futebol. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </body>
  );
}
