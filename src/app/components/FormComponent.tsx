'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputMask from 'react-input-mask';

import { formSchema, FormData } from '../validation/form-validation';
import '@/app/styles/FormPage.css';

import ButtonComponent from './Button';
import InputComponent from './Input';

const FormComponent: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: (data: FormData) => void = (data: FormData) => {
    router.push(`/result?name=${data.name}&phone=${data.phone}&email=${data.email}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <InputComponent
        label="Nome"
        type="text"
        placeholder="Nome"
        register={register('name')}
        error={errors.name?.message}
      />
      <div className="fields-row">
        <div className="input-group">
          <label htmlFor="phone">Telefone</label>
          <InputMask
            mask="(99) 99999-9999"
            onChange={(e: any) => setValue('phone', e.target.value)}
            className='input-field'
            placeholder="(99) 9999[9]-9999"
          >
          </InputMask>
          {errors.phone && <p className="error">{errors.phone?.message}</p>}
        </div>
        <InputComponent
          label="E-mail"
          type="email"
          placeholder="nome@email.com"
          register={register('email')}
          error={errors.email?.message}
        />
      </div>
      <div className="consent-text">
        <ul>
          <li>Ao preencher o formulário, concordo em receber comunicações de acordo com meus interesses.</li>
          <li>Ao informar meus dados, eu concordo com a <a href="https://legal.rdstation.com/pt/privacy-policy/">Política de privacidade</a>.</li>
        </ul>
        <p>* Você pode alterar suas permissões de comunicação a qualquer tempo.</p>
      </div>
      <ButtonComponent label="Gerar Cartão de Visita" />
    </form>
  );
};

export default FormComponent;
