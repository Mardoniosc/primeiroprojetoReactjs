import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import logoimg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoimg} alt="Github Explore" />
      <Title>Explorer repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/35425708?s=460&u=fe2a2a2f7e53f4a77cab22c39f44831cb1857d31&v=4"
            alt="Mardonio Costa"
          />
          <div>
            <strong>Mardoniosc/recursos</strong>
            <p>guardar recursos adicionais para programação</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/35425708?s=460&u=fe2a2a2f7e53f4a77cab22c39f44831cb1857d31&v=4"
            alt="Mardonio Costa"
          />
          <div>
            <strong>Mardoniosc/recursos</strong>
            <p>guardar recursos adicionais para programação</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/35425708?s=460&u=fe2a2a2f7e53f4a77cab22c39f44831cb1857d31&v=4"
            alt="Mardonio Costa"
          />
          <div>
            <strong>Mardoniosc/recursos</strong>
            <p>guardar recursos adicionais para programação</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
