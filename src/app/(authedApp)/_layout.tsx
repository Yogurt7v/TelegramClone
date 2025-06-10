import { Slot, Stack } from 'expo-router';
import { useEffect } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, OverlayProvider } from 'stream-chat-expo';

const client = StreamChat.getInstance('jfsfn8r5755v');
// const client = StreamChat.getInstance(process.env.API_KEY);

export default function AuthLayout() {
  useEffect(() => {
    const connect = async () => {
      await client.connectUser(
        {
          id: 'Jimmy',
          name: 'Jim Lah',
          image: 'https://i.imgur.com/fR9Jz14.png',
        },
        client.devToken('Jimmy')
      );
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
