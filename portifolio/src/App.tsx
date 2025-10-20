
function App() {

 const projetos = [
    {
      titulo: "Dashboard em Salesforce",
      desc: "Criação de relatórios e gráficos dinâmicos integrados via Apex.",
      img: "https://picsum.photos/400/250?1"
    },
    {
      titulo: "API REST em Node.js",
      desc: "API para gerenciamento de usuários com autenticação JWT.",
      img: "https://picsum.photos/400/250?2"
    },
    {
      titulo: "Portfólio 3D",
      desc: "Experiência interativa com objetos 3D integrados via Three.js.",
      img: "https://picsum.photos/400/250?3"
    },
        {
      titulo: "Dashboard em Salesforce",
      desc: "Criação de relatórios e gráficos dinâmicos integrados via Apex.",
      img: "https://picsum.photos/400/250?1"
    },
    {
      titulo: "API REST em Node.js",
      desc: "API para gerenciamento de usuários com autenticação JWT.",
      img: "https://picsum.photos/400/250?2"
    },
    {
      titulo: "Portfólio 3D",
      desc: "Experiência interativa com objetos 3D integrados via Three.js.",
      img: "https://picsum.photos/400/250?3"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    e.target.reset();
  };

  return (
    <>
     <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#hero">Wellington Rodrigues</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarNav" className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#sobre">Sobre</a></li>
              <li className="nav-item"><a className="nav-link" href="#projetos">Projetos</a></li>
              <li className="nav-item"><a className="nav-link" href="#contato">Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  
  <section id="hero" className="d-flex align-items-center justify-content-center flex-column text-center">
      <div className="container">
        <h1>Desenvolvedor Full Stack</h1>
        <p>Crio soluções digitais modernas e eficientes com foco em performance e design.</p>
        <a href="#projetos" className="btn btn-light btn-lg fw-semibold">Ver Projetos</a>
      </div>
    </section>

     <section id="sobre" className="py-5 mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Sobre mim</h2>
            <p className="text-muted">
              Sou apaixonado por tecnologia, programação e design. Tenho experiência com Salesforce, Apex,
              JavaScript e frameworks modernos. Busco sempre aprender e criar soluções simples para problemas complexos.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src="https://picsum.photos/400/300" className="rounded-4 shadow-sm img-fluid" alt="Foto de perfil" />
          </div>
        </div>
      </div>
    </section>

     <section id="projetos" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Projetos</h2>
        <div className="row g-4">
          {projetos.map((p, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img src={p.img} className="card-img-top" alt={p.titulo} />
                <div className="card-body">
                  <h5 className="card-title">{p.titulo}</h5>
                  <p className="card-text text-muted">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

       <footer className="mt-5">
      <p>© 2025 Wellington Rodrigues | <a href="#">LinkedIn</a> • <a href="#">GitHub</a></p>
    </footer>
    </>
  );

}

export default App
