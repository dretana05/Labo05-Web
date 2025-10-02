import './App.css'

// Componente reutilizable que recibe props
function InfoCientificos({ nombre, profesion, premios, descubrimiento, foto }) {
  return (
    <div className="tarjeta">
      {/* Se coloca la imagen del científico */}
      <img src={foto} alt={nombre} className="foto" />

      {/* Nombre del cientifico */}
      <h2>{nombre}</h2>

      {/* Lista con información */}
      <ul>
        <li><strong>Profesión:</strong> {profesion}</li>
        <li><strong>Premios:</strong> {premios}</li>
        <li><strong>Descubrió:</strong> {descubrimiento}</li>
      </ul>
    </div>
  )
}

function App() {
  // Se crea un array de objetos: que cada científico tiene propiedades clave-valor
  const cientificos = [
    {
      id: 1,
      nombre: "Maria Skłodowska-Curie",
      profesion: "física y química",
      premios: "4 (Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci)",
      descubrimiento: "polonio (elemento químico)",
      foto: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Marie_Curie_c1920.jpg"
    },
    {
      id: 2,
      nombre: "Katsuko Saruhashi",
      profesion: "geoquímica",
      premios: "2 (Premio Miyake de geoquímica, Premio Tanaka)",
      descubrimiento: "un método para medir el dióxido de carbono en el agua de mar",
      foto: "https://upload.wikimedia.org/wikipedia/en/0/08/Katsuko_Saruhashi.jpg"
    }
  ]

  return (
    <div>
      {/* Título principal de la página */}
      <h1>Científicos Notables</h1>

      {/* Se recorre el array con .map() y se crea un componente por cada científico */}
      {cientificos.map((c) => (
        <InfoCientificos
          key={c.id}
          nombre={c.nombre}
          profesion={c.profesion}
          premios={c.premios}
          descubrimiento={c.descubrimiento}
          foto={c.foto}
        />
      ))}
    </div>
  )
}

export default App