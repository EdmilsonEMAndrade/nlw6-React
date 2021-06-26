import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button } from '../../component/Button';
import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import '../../styles/auth.scss';

export function NewRoom() {
  const { user } = useAuth();
  const [newRoom, SetNewRoom] = useState('');
  const history = useHistory();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    if (newRoom.trim() === '') {
      console.log('entrou if')
      return;
    }
    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authoId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <div id='page-auth'>
      <aside>
        <img src={illustrationImg} alt='Ilustração simbolizando perguntas e respostas' />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={logoImg} alt='Letmeask' />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type='text'
              placeholder='Nome da sala'
              onChange={event => SetNewRoom(event.target.value)}
              value={newRoom}
            />
          </form>
          <Button type='submit' onClick={handleCreateRoom}>
            Criar sala
          </Button>
          <p>
            Quer entrar em uma sala existente? <Link to='/'>clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}