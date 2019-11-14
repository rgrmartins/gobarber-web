import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo2.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input placeholder="Nome Completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho conta.</Link>
      </form>
    </>
  );
}
