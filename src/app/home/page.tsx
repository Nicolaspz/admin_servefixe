import {Button} from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, Hash, Percent } from 'lucide-react'
import { ChartOverview } from '@/components/chart'
export default function page() {
  return (
    <main className='sm:ml-14 p-4'>
      <section className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        <Card>
            <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>
                Total Vendas
              </CardTitle>
              <DollarSign className='ml-auto w-4 h-4' />
            </div>
            <CardDescription>
              Total vendas em 90 dias
            </CardDescription>

          </CardHeader>
          <CardContent>
            <p>R$ 40.000</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>
                Total do Stock
              </CardTitle>
              <Hash className='ml-auto w-4 h-4' />
            </div>
            <CardDescription>
              stock em 90 dias
            </CardDescription>

          </CardHeader>
          <CardContent>
            <p>400</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>
                Pedidos Hoje
              </CardTitle>
              <Percent className='ml-auto w-4 h-4' />
            </div>
            <CardDescription>
              Pedidos Feitos Hoje
            </CardDescription>

          </CardHeader>
          <CardContent>
            <p>400</p>
          </CardContent>
        </Card>
        <Card>
            <CardHeader>
            <div className='flex items-center justify-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>
                Total Vendas hoje
              </CardTitle>
              <DollarSign className='ml-auto w-4 h-4' />
            </div>
            <CardDescription>
              Total de vendas Hoje
            </CardDescription>

          </CardHeader>
          <CardContent>
            <p>R$ 40.000</p>
          </CardContent>
        </Card>
      </section>


      <section className='mt-4 flex flex-col md:flex-row gap-4'>
          <ChartOverview/>
      </section>
    </main>
  )
}