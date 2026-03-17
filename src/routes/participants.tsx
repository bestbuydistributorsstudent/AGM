import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/participants')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  
  <div className = "h-[100%] bg-black text-white">
    <p className='text-white px-2 text-xl'>Participants</p>
    
    <div className='grid mx-5 mt-2 border border-[#3B3B3B] rounded-xl '>
    <p className='m-1'>Shareholders</p>
    <hr className=" h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
    <div className="m-2">
      <p className='m-1'>Dean-Paul</p>
      <p className='m-1'>Regina --</p>
      <hr className=" h-0.5 border-t-0 bg-[#3B3B3B] dark:bg-white/10" />
      </div>
      <div className="m-2">
      <p className='m-1'>Dean-Paul</p>
      <p className='m-1'>Regina --</p>
          <hr className=" h-0.5 border-t-0 bg-[#3B3B3B] dark:bg-white/10" />
      </div>
      <div className="m-2">
      <p className='m-1'>Dean-Paul</p>
      <p className='m-1'>Regina --</p>
          <hr className=" h-0.5 border-t-0 bg-[#3B3B3B] dark:bg-white/10" />
      </div>
      <div className="m-2">
      <p className='m-1'>Dean-Paul</p>
      <p className='m-1'>Regina --</p>
      </div>
    </div>
    <div className='grid mx-5 mt-2 border border-[#3B3B3B] rounded-xl '>
    <p className='m-1'>Bestbuy Personnel</p>
    <hr className=" h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
    <div className="m-2">
      <p className='m-1'>Dean-Paul</p>
      <p className='m-1'>Regina --</p>
      <hr className=" h-0.5 border-t-0 bg-[#3B3B3B] dark:bg-white/10" />
      </div>
      <div className="m-2">
      <p className='m-1'>Dean-Paul</p>
      <p className='m-1'>Regina --</p>
          <hr className=" h-0.5 border-t-0 bg-[#3B3B3B] dark:bg-white/10" />
      </div>
      <div className="m-2">
      <p className='m-1'>Dean-Paul</p>
      <p className='m-1'>Regina --</p>
          <hr className=" h-0.5 border-t-0 bg-[#3B3B3B] dark:bg-white/10" />
      </div>
      <div className="m-2">
      <p className='m-1'>Dean-Paul</p>
      <p className='m-1'>Regina --</p>
      </div>
    </div>
    <div className='grid mx-5 mt-2 border border-[#3B3B3B] rounded-xl '>
    <p className='m-1'>Bestbuy Vendors</p>
    <hr className=" h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
    <div className="m-2">
      <p className='m-1'>Dean-Paul</p>
      <p className='m-1'>Regina --</p>
      <hr className=" h-0.5 border-t-0 bg-[#3B3B3B] dark:bg-white/10" />
      </div>
      <div className="m-2">
      <p className='m-1'>Dean-Paul</p>
      <p className='m-1'>Regina --</p>
          <hr className=" h-0.5 border-t-0 bg-[#3B3B3B] dark:bg-white/10" />
      </div>
      <div className="m-2">
      <p className='m-1'>Dean-Paul</p>
      <p className='m-1'>Regina --</p>
          <hr className=" h-0.5 border-t-0 bg-[#3B3B3B] dark:bg-white/10" />
      </div>
      <div className="m-2">
      <p className='m-1'>Dean-Paul</p>
      <p className='m-1'>Regina --</p>
      </div>
    </div>

  </div>

)
}
