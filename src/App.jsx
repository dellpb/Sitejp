import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Cabeçalho */}
      <header className="navbar">
        <div className="logo">DellCyber</div>
        <nav>
          <a href="#inicio">Início</a>
          <a href="#pontos">Pontos Turísticos</a>
          <a href="#gastronomia">Gastronomia</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="inicio">
        <h1>Bem-vindo a João Pessoa</h1>
        <p>A cidade onde o sol nasce primeiro nas Américas.</p>
        <a href="#pontos"><button className="btn-primary">Explorar Cidade</button></a>
      </section>

      {/* Seção de Pontos Turísticos */}
      <section className="cards-section" id="pontos">
        <h2>Principais Atrações</h2>
        <div className="cards-grid">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" alt="Farol do Cabo Branco" className="card-img" />
            <div className="card-body">
              <h3>Farol do Cabo Branco</h3>
              <p>Ponto mais oriental das Américas com vista panorâmica incrível.</p>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80" alt="Praia de Tambaú" className="card-img" />
            <div className="card-body">
              <h3>Praia de Tambaú</h3>
              <p>Uma das praias mais famosas da capital, repleta de quiosques e feiras.</p>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=600&q=80" alt="Pôr do Sol no Jacaré" className="card-img" />
            <div className="card-body">
              <h3>Pôr do Sol no Jacaré</h3>
              <p>Aprecie o famoso espetáculo ao som do Bolero de Ravel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Gastronomia */}
      <section className="cards-section" id="gastronomia">
        <h2>Gastronomia Local</h2>
        <div className="cards-grid">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" alt="Carne de Sol" className="card-img" />
            <div className="card-body">
              <h3>Carne de Sol com Macaxeira</h3>
              <p>Prato tradicionalíssimo servido com queijo coalho e manteiga de garrafa.</p>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80" alt="Peixada" className="card-img" />
            <div className="card-body">
              <h3>Peixada Parahybana</h3>
              <p>Peixe fresco preparado com leite de coco, legumes e pimentões selecionados.</p>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80" alt="Rubacão" className="card-img" />
            <div className="card-body">
              <h3>Rubacão</h3>
              <p>Combinação deliciosa de feijão de corda, arroz, queijo coalho e carne seca desfiada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="contact-section" id="contato">
        <h2>Entre em Contato</h2>
        <p>Tens alguma dúvida ou sugestão sobre o projeto? Envia-nos uma mensagem!</p>
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Seu Nome" required />
          <input type="email" placeholder="Seu E-mail" required />
          <textarea placeholder="Sua Mensagem" rows="4" required></textarea>
          <button type="submit" className="btn-primary">Enviar Mensagem</button>
        </form>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <p>Desenvolvido por <strong>DellCyber</strong></p>
        <p>Contato: <a href="mailto:delosmarlacerda98@gmail.com">delosmarlacerda98@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default App;