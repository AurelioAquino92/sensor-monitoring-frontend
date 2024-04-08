import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
  } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, YAxis } from "recharts"
  
type GraficoProps = {
  title: string
  values: number[]
}
  
export default function Grafico({title, values} : GraficoProps) {
    const data = values.map(v => { return {valor: v} })
    
    return (
        <Card className="grow overflow-auto">
            <CardHeader className="pb-2">
                <CardDescription>{title}</CardDescription>
                {/* <CardTitle className="text-4xl">{dispID}</CardTitle> */}
            </CardHeader>
            <CardContent>
                <LineChart data={data} height={100} width={200}>
                    <Tooltip />
                    <CartesianGrid />
                    <YAxis domain={['auto', 'auto']}/>
                    <Line dataKey="valor"/>
                </LineChart>
            </CardContent>
        </Card>
    )
}