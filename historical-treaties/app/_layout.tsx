import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Historical Treaties' }} />
      <Stack.Screen name="detail/[id]" options={{ title: 'Treaty Details' }} />
    </Stack>
  );
}
