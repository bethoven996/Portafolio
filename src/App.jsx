import { useState } from 'react'
import { perfil, hero, proyectos, stack, formacion, extra } from './data.js'

const Arrow = () => <span className="arrow" aria-hidden>↗</span>

function Card({ children, className = '', ...rest }) {
  return <section className={`card ${className}`} {...rest}>{children}</section>
}

function Label({ children }) {
  return <h2 className="label">{children}</h2>
}

function Perfil() {
  return (
    <Card className="perfil">
      <h1 className="nombre">
        {perfil.nombre.map((n) => <span key={n}>{n}</span>)}
      </h1>
      <p className="rol">
        {perfil.rol} <span className="slash">/</span> {perfil.ubicacion}
      </p>
      <p className="bio">
        {perfil.bio.map((b, i) =>
          b.strong ? <strong key={i}>{b.t}</strong> : <span key={i}>{b.t}</span>
        )}
      </p>
    </Card>
  )
}

function Contacto() {
  const [copiado, setCopiado] = useState(false)
  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(perfil.email)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 1800)
    } catch {
      window.location.href = `mailto:${perfil.email}`
    }
  }

  return (
    <Card className="contacto" id="contacto">
      <Label>CONTACTO</Label>
      <p className="mini">EMAIL — {copiado ? '¡COPIADO!' : 'CLICK PARA COPIAR'}</p>
      <button className="email" onClick={copiar}>{perfil.email}</button>

      <div className="links">
        <a href={perfil.linkedin} target="_blank" rel="noreferrer">LINKEDIN <Arrow /></a>
        <a href={perfil.github} target="_blank" rel="noreferrer">GITHUB <Arrow /></a>
        {perfil.cv && <a href={perfil.cv} target="_blank" rel="noreferrer">CV <Arrow /></a>}
      </div>

      <p className="mini estado-label">ESTADO</p>
      <p className="estado"><span className="dot" />{perfil.estado}</p>
      <p className="busco">{perfil.busco}</p>
    </Card>
  )
}

function Hero() {
  return (
    <Card className="hero">
      <h2 className="hero-titulo">{hero.titulo}</h2>
      <a className="cta" href={`mailto:${perfil.email}`}>{hero.cta} <Arrow /></a>
    </Card>
  )
}

function Proyectos() {
  return (
    <Card className="proyectos" id="proyectos">
      <Label>PROYECTOS <span className="count">{String(proyectos.length).padStart(2, '0')}</span></Label>
      <ul>
        {proyectos.map((p) => (
          <li key={p.nombre}>
            <a
              className="proyecto"
              href={p.link || undefined}
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-head">
                <span className="p-tag">
                  {p.tag}
                  {p.live && <em className="live"> · LIVE</em>}
                </span>
                <h3>{p.nombre}</h3>
              </div>
              <div className="p-body">
                <p>{p.desc}</p>
                <div className="chips">
                  {p.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
              </div>
              <Arrow />
            </a>
          </li>
        ))}
      </ul>
    </Card>
  )
}

function Stack() {
  return (
    <Card className="stack">
      <Label>STACK</Label>
      <div className="chips big">
        {stack.map((s) => <span key={s}>{s}</span>)}
      </div>
    </Card>
  )
}

function Formacion() {
  return (
    <Card className="formacion">
      <Label>FORMACIÓN</Label>
      {formacion.map((f) => (
        <div key={f.titulo} className="f-item">
          <h3>{f.titulo}</h3>
          <p>{f.lugar} <span className="slash">/</span> {f.detalle}</p>
        </div>
      ))}
    </Card>
  )
}

function Extra() {
  return (
    <Card className="extra">
      <Label>FUERA DEL CÓDIGO</Label>
      <div className="extra-grid">
        {extra.map((e) => (
          <div key={e.k}>
            <span className="mini">{e.k}</span>
            <p>{e.v}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default function App() {
  return (
    <main className="grid">
      <div className="col-left">
        <Perfil />
        <Contacto />
      </div>
      <div className="col-right">
        <Hero />
        <Proyectos />
      </div>
      <div className="row-bottom">
        <Stack />
        <Formacion />
        <Extra />
      </div>
      <footer>© {new Date().getFullYear()} {perfil.nombre.join(' ')} — Hecho con React + Vite</footer>
    </main>
  )
}
