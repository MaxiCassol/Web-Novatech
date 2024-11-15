import style from "./testimonies.module.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Sánchez",
      position: "Director de Operaciones, TechSolutions",
      quote:
        "El equipo nos ayudó a implementar una solución IoT que transformó nuestra operación. Desde la fase de planificación hasta la implementación final, demostraron una gran habilidad técnica y atención al detalle.",
    },
    {
      name: "Laura Gómez",
      position: "CEO, EduSmart",
      quote:
        "Gracias a sus servicios de desarrollo de aplicaciones, logramos lanzar nuestra plataforma educativa a tiempo y con una calidad excepcional. Los comentarios de nuestros usuarios han sido muy positivos, y la colaboración fue excelente.",
    },
    {
      name: "Ana Martínez",
      position: "Gerente de Proyectos, FinCorp",
      quote:
        "Contratamos su auditoría de seguridad y nos impresionó la profundidad y precisión del análisis. Nos sentimos más seguros en nuestra infraestructura, y sin duda contaremos con ellos para futuros proyectos.",
    },
  ];

  return (
    <section className={style.testimonialsSection}>
      <h2 className={style.title}>What Our Clients Say</h2>
      <div className={style.testimonialsContainer}>
        {testimonials.map((testimonial, index) => (
          <div className={style.testimonialCard} key={index}>
            <p className={style.quote}>"{testimonial.quote}"</p>
            <h4 className={style.name}>{testimonial.name}</h4>
            <span className={style.position}>{testimonial.position}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
