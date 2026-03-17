import { createFileRoute } from '@tanstack/react-router'
import pdf1 from './test.pdf'
export const Route = createFileRoute('/trade')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
        <main className="bg-black h-[100%]">
      <div className="page-wrap">
      <p className="p-1 text-white">General Agenda</p>
      <iframe src={pdf1} className='h-screen w-[100%]'></iframe>
      </div>
    </main>
  ) 
}
