# Start-up de Desarrollo Web

## Descripción
Esta aplicación es una landing page moderna y responsiva para una start-up especializada en desarrollo web. La página está diseñada para mostrar los servicios, tecnologías y experiencia de la empresa de manera atractiva y profesional.

## Características
- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Totalmente Responsiva**: Se adapta perfectamente a todos los dispositivos
- **Navegación Intuitiva**: Menú fijo con scroll suave entre secciones
- **Secciones Destacadas**:
  - Hero con imagen de fondo y overlay
  - Sobre Nosotros
  - Servicios ofrecidos
  - Tecnologías utilizadas
  - Portafolio de clientes
  - Formulario de contacto

## Tecnologías Utilizadas
- React
- TypeScript
- Tailwind CSS
- Vite

## Estructura del Proyecto
La aplicación sigue una arquitectura modular y escalable:
src/
├── common/ # Componentes y utilidades comunes
│ ├── components/ # Componentes reutilizables
│ └── layout/ # Layouts de la aplicación
├── domain/ # Componentes específicos del dominio
│ ├── about/ # Sección Sobre Nosotros
│ ├── services/ # Sección de Servicios
│ ├── technologies/ # Sección de Tecnologías
│ ├── clients/ # Sección de Clientes
│ └── contact/ # Sección de Contacto
└── assets/ # Recursos estáticos
