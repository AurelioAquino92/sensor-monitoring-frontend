import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, YAxis } from "recharts"

type GraficoProps = {
    title: string
    values: number[]
}

export default function Grafico({ title, values }: GraficoProps) {
    const data = values.map(v => { return { valor: v } })

    return (
        <Card className="grow overflow-auto">
            <CardHeader className="pb-2">
                <CardDescription>{title}</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer height={100} width="100%">
                    <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorValor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <Tooltip />
                        <CartesianGrid />
                        <YAxis domain={['auto', 'auto']} width={30} />
                        <Area type="monotone" dataKey="valor" stroke="#3B82F6" fillOpacity={1} fill="url(#colorValor)" />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}