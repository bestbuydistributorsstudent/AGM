import { createFileRoute } from '@tanstack/react-router'
// import pdf1 from './pdf-sample_0.pdf'
import webp1 from './test.webp'
export const Route = createFileRoute('/')({ component: App })

function App() {
  
  return (
    <main className="bg-black h-[100%]">
      <div className="page-wrap">
      <p className="p-1 text-white">General Agenda</p>
       <picture>
        <source srcSet={webp1} type='image/webp'/>
        <img src ={webp1} />
       </picture>
      </div>
    </main>
  )
}
