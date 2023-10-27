import Image from 'next/image'
import { NameForm } from '@/app/components/NameForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NameForm />
    </main>
  )
}
