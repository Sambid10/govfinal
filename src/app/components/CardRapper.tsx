
import { Card, CardContent, CardFooter } from '@/app/components/ui/card'
import React from 'react'

export default function CardRapper({children}:{children:React.ReactNode}) {
  return (
    <div>
        <Card className='h-fit border-none shadow-xl'>
            <CardContent>
                {children}
            </CardContent>
            <div className='flex justify-end w-full items-center h-full '>
            <CardFooter>
            </CardFooter>
            </div>
           
        </Card>
    </div>
  )
}
