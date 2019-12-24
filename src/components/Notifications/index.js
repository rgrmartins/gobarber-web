import React from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>Você Possui um novo agendamento para amanhã</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como Lida</button>
          </Notification>
          <Notification>
            <p>Você Possui um novo agendamento para amanhã</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como Lida</button>
          </Notification>
          <Notification>
            <p>Você Possui um novo agendamento para amanhã</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como Lida</button>
          </Notification>
          <Notification>
            <p>Você Possui um novo agendamento para amanhã</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como Lida</button>
          </Notification>
          <Notification>
            <p>Você Possui um novo agendamento para amanhã</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como Lida</button>
          </Notification>
          <Notification>
            <p>Você Possui um novo agendamento para amanhã</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como Lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
