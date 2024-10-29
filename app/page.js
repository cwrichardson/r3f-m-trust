import { ActiveVideo } from '@/components/active-video';
import { Model } from '@/components/model';

export default function Home() {

  return (
      <main>
        <ActiveVideo />
        <Model w={'100vw'} h={'100vh'} />
      </main>
  );
}
