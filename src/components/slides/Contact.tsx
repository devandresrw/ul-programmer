import { useContactForm } from '@/hooks/useContactForm'


export const ContactSlide = () => {
  const { register, handleSubmit, errors, onSubmit } = useContactForm()
  return (
    <div className="flex flex-col justify-center items-center h-full
    px-4 py-1 gap-2 md:px-10 md:gap-10 lg:gap-2 lg:px-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 border-[1px]
        border-white border-opacity-50 py-4 w-full
        px-2 rounded-md lg:py-2 lg:w-80"
      >
        <div className='flex flex-col'>
          <input
            id="name"
            type="text"
            {...register('name')}
            placeholder='[Nombre]'
            className='outline-none bg-transparent border-[1px] border-white 
            border-opacity-50 rounded-md px-2 py-2
            lg:h-8'
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className='flex flex-col'>

          <input
            id='email'
            type="email"
            placeholder='[Email]'
            {...register('email')}
            className='outline-none bg-transparent border-[1px] border-white 
            border-opacity-50 rounded-md px-2 py-2 lg:h-8'

          />
        </div>
        <div className='flex flex-col'>
          <textarea
            id='message'
            placeholder='[Mensaje]'
            {...register('message')}
            className='outline-none bg-transparent border-[1px]
             border-white border-opacity-50 rounded-md px-2 py-2
             lg:h-12'
          />
          {errors.message && <span>{errors.message.message}</span>}
        </div>
        <div className="">
          <button
            className='w-full border-[1px] border-white border-opacity-50 
            rounded-md px-2 py-2
            hover:bg-mbtnglass lg:h-8 flex items-center justify-center'
            type='submit'>Submit</button>
        </div>
      </form>
      
    </div>
  )
}