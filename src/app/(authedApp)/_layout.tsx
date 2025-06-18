import { Slot, Stack } from 'expo-router';
import { useEffect } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, OverlayProvider } from 'stream-chat-expo';

const client = StreamChat.getInstance('jfsfn8r5755v');

export default function AuthLayout() {
  useEffect(() => {
    const connect = async () => {
      await client.connectUser(
        {
          id: 'atomas',
          name: 'Tomas Anderson',
          image: 'https://i.imgur.com/fR9Jz14.png',
        },
        client.devToken('atomas')
      );
      const channel = client.channel('messaging', 'the_meeting', {
        name: 'The Meeting',
      } as any);
      await channel.watch();
    };

    connect();
  }, []);

  return (
    <OverlayProvider>
      <Chat client={client}>
        <Slot />
      </Chat>
    </OverlayProvider>
  );
}
