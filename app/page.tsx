'use client'

import Loading from '@/components/feat/loading'
import Message from '@/components/feat/message'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import { Suspense, useState, useTransition } from 'react'

async function getApi() {
  const data = await fetch('/api').then(res => res.json())
  return {
    posts: data.posts.slice(0, Math.floor(Math.random() * 6) + 10),
  } as Response
}

export default function Home() {
  const [response, setApi] = useState(getApi)
  const [isPending, startTransition] = useTransition()

  function clickToGetMessage() {
    startTransition(() => {
      setApi(getApi())
    })
  }
  return (
    <div className="w-96 mx-auto my-10 space-y-4">
      <Button onClick={clickToGetMessage}>
        Click to update
      </Button>
      <Suspense fallback={<Loading />}>
        <Message isPending={isPending} response={response} />
      </Suspense>
    </div>
  )
}
