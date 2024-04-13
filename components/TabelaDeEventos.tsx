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
import { Switch } from "@/components/ui/switch"

type TabelaDeEventosProps = {
  eventos: EventoProps[],
  selectedEvent: string | null,
  setSelectedEvent: (eventID: string | null) => void,
  autoReload: boolean,
  setAutoReload: (status: boolean) => void
}

export default function TabelaDeEventos({ eventos, selectedEvent, setSelectedEvent, autoReload, setAutoReload }: TabelaDeEventosProps) {
  return (
    <Card className="grow flex flex-col">
      <CardHeader className="px-7">
        <CardTitle>📳 Tabela de Eventos de Dispositivos</CardTitle>
        <CardDescription>Selecione um dos eventos abaixo</CardDescription>
        <div className="flex gap-2 pt-2 items-center justify-end">
          <CardDescription>Auto Reload</CardDescription>
          <Switch checked={autoReload} onCheckedChange={() => setAutoReload(autoReload)} />
        </div>
      </CardHeader>
      <ScrollArea className="grow h-96">
        <CardContent className="pt-2 md:pt-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Id do Dispositivo</TableHead>
                <TableHead>Momento do Evento</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {eventos.map((evento, idx) =>
                <TableRow
                  key={idx}
                  className={`${selectedEvent == evento.idEvent ? 'bg-accent' : ''}`}
                  onClick={() => {
                    setSelectedEvent(evento.idEvent)
                    setAutoReload(true)
                  }}
                >
                  <TableCell>
                    <div className="font-medium">{evento.idDispositivo}</div>
                  </TableCell>
                  <TableCell>{dateFormatter(evento.timestamp.toDate())}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </ScrollArea>
    </Card>
  )
}
