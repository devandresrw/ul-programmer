'use client'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { ContactSchema, IContactForm } from '@/schemas/contact.scheama'

export const useContactForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IContactForm>({
    resolver: zodResolver(ContactSchema)
  })

  const onSubmit = async (data: IContactForm) => {
    try {
      await axios.post('/api/form', data)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit
  }
}