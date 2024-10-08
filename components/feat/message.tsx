'use client'

import { use } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

interface MessageProps {
  isPending: boolean
  response: Promise<Response>
}

export default function Message(props: MessageProps) {
  const { response } = props
  const content = use(response)
  return (
    <Accordion type="single" collapsible>
      {content.posts.map(item => (
        <AccordionItem value={`item-${item.id}`} key={item.id}>
          <AccordionTrigger>{ item.title }</AccordionTrigger>
          <AccordionContent>
            { item.content }
          </AccordionContent>
        </AccordionItem>
      ))}

    </Accordion>
  )
}
