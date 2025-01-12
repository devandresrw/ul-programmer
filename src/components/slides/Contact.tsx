import { useContactForm } from '@/hooks/useContactForm'


export const ContactSlide = () => {
  const { register, handleSubmit, errors, onSubmit } = useContactForm()
  return (
    <div className="flex justify-center items-center h-full
    p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 border-[1px]
        border-white border-opacity-50 py-4 w-full
        px-2 rounded-md"
      >
        <div className='flex flex-col'>
          <input
            id="name"
            type="text"
            {...register('name')}
            placeholder='[Nombre]'
            className='outline-none bg-transparent border-[1px] border-white border-opacity-50 rounded-md px-2 py-2'
          />
        </div>
        <div className='flex flex-col'>

          <input
            id='email'
            type="email"
            placeholder='[Email]'
            {...register('email')}
            className='outline-none bg-transparent border-[1px] border-white border-opacity-50 rounded-md px-2 py-2'

          />
        </div>
        <div className='flex flex-col'>
          <textarea
            id='message'
            placeholder='[Mensaje]'
            {...register('message')}
            className='outline-none bg-transparent border-[1px] border-white border-opacity-50 rounded-md px-2 py-2'
          />
        </div>
        <div className="">
          <button
            className='w-full border-[1px] border-white border-opacity-50 rounded-md px-2 py-2
            hover:bg-mbtnglass'

            type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}