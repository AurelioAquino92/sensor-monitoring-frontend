import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
type MetricProps = {
  title: string
  msg: string | undefined
}
  
export default function Metric({title, msg} : MetricProps) {
  return (
    <Card className="grow pb-2">
      <CardHeader className="pb-2">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-xl md:text-2xl">{msg ? msg : '-'}</CardTitle>
      </CardHeader>
    </Card>
  )
}