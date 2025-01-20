import { ASCIIText} from '@/components/codes/TextAscci'
export default function FrontendPage() {
  return (
    <div className="">
  
<ASCIIText
  text='front-end'
  enableWaves={true}
  asciiFontSize={8}
  planeBaseHeight={9}
  textFontSize={3}
/>    
      <div className="">
        <div className="">
          <p>Front-end</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Vue.js</li>
            <li>Angular</li>
          </ul>
        </div>
        <div className="">
          <p>Descripción</p>
          <p>El front-end es la parte de la aplicación que interactúa con los usuarios. Es la parte de la aplicación que los usuarios ven y con la que interactúan. El front-end se compone de tres partes: la estructura (HTML), la presentación (CSS) y la interactividad (JavaScript).</p>
        </div>
      </div>
    </div>
  )
}