'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormData } from '../validation/form-validation';
import '@/app/styles/FormPage.css';
import ButtonComponent from './ButtonComponent';

const FormComponent: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    router.push(`/result?name=${data.name}&phone=${data.phone}&email=${data.email}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        placeholder="Nome"
        {...register('name')}
        className="input-field"
      />
      {errors.name && <span className="error">{errors.name.message}</span>}

      <div className="fields-row">
        <div className="input-group">
          <label htmlFor="phone">Telefone</label>
          <input
            type="text"
            placeholder="(00) 00000-0000"
            {...register('phone')}
            className="input-field"
          />
          {errors.phone && <span className="error">{errors.phone.message}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            placeholder="nome@email.com"
            {...register('email')}
            className="input-field"
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>
      </div>
      <div className="consent-text">
        <ul>
          <li>Ao preencher o formulário, concordo em receber comunicações de acordo com meus interesses.</li>
          <li>Ao informar meus dados, eu concordo com a <a href="#">Política de privacidade</a>.</li>
        </ul>
        <p>* Você pode alterar suas permissões de comunicação a qualquer tempo.</p>
      </div>
      <ButtonComponent label="Gerar Cartão de Visita" />
    </form>
  );
};

export default FormComponent;
