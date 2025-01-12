import { useContactForm } from '@/hooks/useContactForm'


export const ContactSlide = () => {
  const { register, handleSubmit, errors, onSubmit } = useContactForm()

  return (
    <div className="flex justify-center items-center h-full
    p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 border-[1px]
        border-white border-opacity-50 p-2 w-full
        rounded-md"
      >
        <div className='flex flex-col items-center gap-1'>
          <label htmlFor='name'>[Nombre:]</label>
          <input
            id="name"
            type="text"
            {...register('name')}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='email'>[Correo]</label>
          <input
            id='email'
            type="email"
            {...register('email')}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='message'>[Mensaje]</label>
          <textarea
            id='message'
            {...register('message')}
          />
        </div>
        <div className="">
          <button
            type='submit'
          >Submit</button>
        </div>
      </form>
    </div>
  )
}