import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { EventoProps } from "@/types/EventoProps"
import { dateFormatter } from "@/utils/dateformatter"
import { ScrollArea } from "@/components/ui/scroll-area"

type TabelaDeEventosProps = {
  eventos: EventoProps[],
  selectedEvent: string | null,
  setSelectedEvent: (eventID: string | null) => void
}

export default function TabelaDeEventos({ eventos, selectedEvent, setSelectedEvent }: TabelaDeEventosProps) {
  return (
    <Card className="grow flex flex-col">
      <CardHeader className="px-7">
        <CardTitle>📳 Tabela de Eventos de Dispositivos</CardTitle>
        <CardDescription>Todos os eventos registrados estão abaixo</CardDescription>
      </CardHeader>
      <ScrollArea className="grow h-40">
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Id do Dispositivo</TableHead>
                <TableHead>Momento do Evento</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {eventos.map((evento, idx) =>
                <TableRow key={idx} className={`${selectedEvent == evento.idEvent ? 'bg-accent' : ''}`} onClick={() => setSelectedEvent(evento.idEvent)}>
                  <TableCell>
                    <div className="font-medium">{evento.idDispositivo}</div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{dateFormatter(evento.timestamp.toDate())}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </ScrollArea>
    </Card>
  )
}
