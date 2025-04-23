import "./App.css";
import ThemeSwitch from "./components/ThemeSwitch";
import { useTheme } from "./config/ThmeContext";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <header>
        <img src="./logo.png" alt="logo" srcSet="./logo.png" width="200px" />
        <h1>POLÍTICAS DE PRIVACIDAD DE FITLEVEL</h1>
        <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
      </header>
      <main>
        <p>
          <strong>Última actualización:</strong> 22 de abril de 2025
        </p>

        <h2>1. INTRODUCCIÓN</h2>
        <p>
          Bienvenido a FitLevel, la aplicación móvil diseñada para ayudarte a
          alcanzar tus objetivos de salud y fitness mediante el conteo de
          calorías a través de fotografías de alimentos. En FitLevel
          ("nosotros", "nuestro", "la aplicación"), valoramos tu privacidad y
          nos comprometemos a proteger tus datos personales.
        </p>
        <p>
          Estas Políticas de Privacidad explican cómo recopilamos, utilizamos,
          procesamos, compartimos y protegemos tu información cuando utilizas
          nuestra aplicación, incluyendo el procesamiento de fotografías para el
          conteo de calorías y el seguimiento de tu progreso para la pérdida de
          peso o el aumento muscular.
        </p>
        <p>
          Por favor, lee detenidamente estas políticas para comprender nuestras
          prácticas con respecto a tus datos personales.
        </p>

        <h2>2. INFORMACIÓN QUE RECOPILAMOS</h2>

        <h3>2.1 Información proporcionada por ti</h3>
        <ul>
          <li>
            <strong>Información de registro:</strong> Nombre, dirección de
            correo electrónico, contraseña, fecha de nacimiento y género.
          </li>
          <li>
            <strong>Información de perfil:</strong> Altura, peso, objetivos de
            fitness (pérdida de peso o aumento muscular), nivel de actividad
            física.
          </li>
          <li>
            <strong>Fotografías de alimentos:</strong> Imágenes que subes para
            el análisis y conteo de calorías.
          </li>
          <li>
            <strong>Registros de actividad:</strong> Datos sobre ejercicios,
            entrenamientos y actividad física que decides compartir.
          </li>
          <li>
            <strong>Comunicaciones:</strong> El contenido de tus mensajes,
            preguntas o comentarios que nos envías directamente.
          </li>
        </ul>

        <h3>2.2 Información recopilada automáticamente</h3>
        <ul>
          <li>
            <strong>Datos de uso:</strong> Interacciones con la aplicación,
            frecuencia de uso, funciones utilizadas, tiempo de uso.
          </li>
          <li>
            <strong>Información del dispositivo:</strong> Tipo de dispositivo,
            sistema operativo, identificador único del dispositivo, dirección
            IP.
          </li>
          <li>
            <strong>Datos de ubicación:</strong> Con tu consentimiento, podemos
            acceder a tu ubicación aproximada o precisa.
          </li>
          <li>
            <strong>Datos del sensor:</strong> Si proporcionas permiso, podemos
            recopilar datos de sensores de tu dispositivo como acelerómetro y
            giroscopio para rastrear actividad física.
          </li>
        </ul>

        <h3>2.3 Información de salud y bienestar</h3>
        <ul>
          <li>Peso y medidas corporales</li>
          <li>Ingesta calórica</li>
          <li>Objetivos de nutrición</li>
          <li>Progreso físico</li>
          <li>Métricas de fitness</li>
        </ul>

        <h2>3. Cómo utilizamos tu información</h2>
        <p>Utilizamos la información que recopilamos para:</p>
        <ul>
          <li>Proporcionar y mejorar nuestros servicios</li>
          <li>Personalización según tus objetivos</li>
          <li>Seguimiento de progreso</li>
          <li>Comunicación y notificaciones</li>
          <li>Soporte al cliente</li>
          <li>Mejora del producto</li>
          <li>Seguridad</li>
        </ul>

        <h2>4. Tecnología de análisis de imágenes</h2>
        <p>
          FitLevel utiliza tecnología de reconocimiento de imágenes e IA para:
        </p>
        <ul>
          <li>Identificar alimentos en fotografías</li>
          <li>Estimar porciones y cantidades</li>
          <li>Calcular calorías y macronutrientes</li>
        </ul>
        <p>Las imágenes pueden almacenarse para:</p>
        <ul>
          <li>Mejorar precisión de los algoritmos</li>
          <li>Revisión del historial</li>
          <li>Análisis de tendencias alimenticias</li>
        </ul>

        <h2>5. Compartir tu información</h2>
        <p>
          No vendemos tu información personal. Podemos compartirla en las
          siguientes circunstancias:
        </p>
        <h3>5.1 Proveedores de servicios</h3>
        <ul>
          <li>Almacenamiento en la nube</li>
          <li>Reconocimiento de alimentos</li>
          <li>Análisis de uso</li>
          <li>Plataformas de comunicación</li>
        </ul>
        <h3>5.2 Con tu consentimiento</h3>
        <p>Cuando decides compartir tus logros en redes sociales.</p>
        <h3>5.3 Por razones legales</h3>
        <ul>
          <li>Cumplir con la ley</li>
          <li>Proteger derechos, propiedad y seguridad</li>
          <li>Detectar y prevenir fraude</li>
        </ul>

        <h2>6. Seguridad de datos</h2>
        <p>Implementamos medidas de seguridad como:</p>
        <ul>
          <li>Cifrado de datos</li>
          <li>Controles de acceso</li>
          <li>Monitoreo de seguridad</li>
          <li>Formación del personal</li>
        </ul>
        <p>No podemos garantizar seguridad absoluta.</p>

        <h2>7. Retención de datos</h2>
        <p>
          Conservamos tus datos mientras tu cuenta esté activa o según sea
          necesario. Algunos datos pueden retenerse por más tiempo en ciertos
          casos legales o de seguridad.
        </p>

        <h2>8. Tus derechos</h2>
        <p>Dependiendo de tu ubicación, puedes ejercer derechos como:</p>
        <ul>
          <li>Acceso</li>
          <li>Rectificación</li>
          <li>Eliminación</li>
          <li>Restricción</li>
          <li>Portabilidad</li>
          <li>Objeción</li>
          <li>Retiro del consentimiento</li>
        </ul>

        <p>
          Contáctanos en{" "}
          <a href="mailto:privacidad@fitlevel.com">privacidad@fitlevel.com</a>{" "}
          para ejercer tus derechos.
        </p>

        <h2>9. Transferencias internacionales de datos</h2>
        <p>
          Podemos procesar tus datos en otros países. Aplicamos garantías para
          proteger tu información.
        </p>

        <h2>10. Menores de edad</h2>
        <p>
          FitLevel no está dirigido a menores de 16 años. Si crees que un menor
          nos ha proporcionado datos, contáctanos para eliminarlos.
        </p>

        <h2>11. Cambios en estas políticas</h2>
        <p>
          Podemos actualizar estas políticas. Notificaremos cualquier cambio
          importante.
        </p>

        <h2>12. Cookies y tecnologías similares</h2>
        <p>
          Usamos cookies y tecnologías similares para mejorar tu experiencia.
        </p>

        <h2>13. Contáctanos</h2>
        <p>
          Correo electrónico:{" "}
          <a href="mailto:privacidad@fitlevel.com">privacidad@fitlevel.com</a>
          <br />
          Dirección postal: Calle 2b # 75d-30 Medellín
          <br />
          Formulario de contacto: Disponible en la sección "Ayuda" de la
          aplicación
        </p>

        <h2>14. Autoridad de protección de datos</h2>
        <p>
          Si resides en el EEE, Reino Unido o Suiza, puedes presentar una
          reclamación ante tu autoridad local si no abordamos tus inquietudes
          adecuadamente.
        </p>

        <p>
          Al utilizar FitLevel, reconoces que has leído y comprendido estas
          Políticas de Privacidad.
        </p>
      </main>
    </div>
  );
};

export default App;
