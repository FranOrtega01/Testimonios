import './App.scss';
import {Testimonio} from './Components/Testimonio/Testimonio'

function App() {

  const testimonios = [
    {
      id: 1,
      name: 'Shawn Wang',
      img: 'Shawn',
      city: 'Singapur',
      job: 'Ingeniero de Software',
      company: 'Amazon',
      test: '"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."'
    },
    {
      id: 2,
      name: 'Sarah Chima',
      img: 'Sarah',
      city: 'Nigeria',
      job: 'Ingeniera de Software',
      company: 'ChatDesk',
      test: '"freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."'
    },
    {
    id: 3,
    name: 'Emma Bostian',
    img: 'Emma',
    city: 'Suecia',
    job: 'Ingeniera de Software',
    company: 'Spotify',
    test: '"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."'
  }
  
]

  return (
    <>
    <div className="app">
      <div className="mainCont">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {testimonios.map(test => <Testimonio key={`${test.id}-${test.name}`} name={test.name} img={test.img} city={test.city} job={test.job} test={test.test} />)}
      </div>
    </div>
    </>
  );
}

export default App;
