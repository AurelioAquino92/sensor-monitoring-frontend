'use client'

import Metric from "@/components/Metric";
import TabelaDeEventos from "@/components/TabelaDeEventos";
import firebase from "@/services/firebase";
import { Gauge, Triangle } from "@phosphor-icons/react";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore"
import { EventoProps } from "@/types/EventoProps"
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Grafico from "@/components/Grafico";
import { dateFormatter } from "@/utils/dateformatter";

export default function Home() {
  const q = query(collection(firebase, 'eventos'), orderBy('timestamp', 'desc'))
  const [docsSnapshot, loading, error] = useCollection(q)
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)

  const eventos = docsSnapshot?.docs.map((doc): EventoProps => ({
    idEvent: doc.id,
    idDispositivo: doc.data().id,
    timestamp: doc.data().timestamp,
    vx: doc.data().vx,
    vy: doc.data().vy,
    vz: doc.data().vz
  }))

  const eventoSelecionado = docsSnapshot?.docs.find((doc) => doc.id == selectedEvent)?.data()
  let maxValue = 0
  if (eventoSelecionado) {
    const values = [...eventoSelecionado.vx, ...eventoSelecionado.vy, ...eventoSelecionado.vz]
    maxValue = values.reduce((acc, current) => Math.max(acc, current))
  }

  return (
    <main className="flex flex-col md:flex-row min-h-screen items-start justify-between p-0 bg-white font-sans">
      <nav className="flex flex-col gap-8 bg-blue-500 md:min-h-screen md:w-1/4 w-full md:max-w-60">
        <div className="flex bg-blue-600/20 justify-center items-center p-5 font-bold gap-2 text-white">
          <Triangle size={32} />
          ATM
        </div>
        <div className="hidden md:flex flex-col gap-5 pl-5">
          <button className="flex justify-start items-center gap-2 bg-white text-transparent pl-5 py-2 rounded-l-full max-h-10">
            <Gauge size={25} className="text-blue-600 max-h-full" />
            <span className="hidden md:flex text-blue-600 font-bold">
              Painel
            </span>
          </button>
        </div>
      </nav>
      <div className="flex flex-col grow p-2 md:p-10 gap-4 min-h-screen max-h-screen overflow-auto md:overflow-hidden">
        {eventoSelecionado &&
          <div className="flex flex-col gap-4 basis-1/2">
            <div className="flex gap-4 justify-around">
              <Metric title={'⚙ Máquina'} msg={eventoSelecionado.id} />
              <Metric title={'⏲ Hora'} msg={dateFormatter(eventoSelecionado.timestamp.toDate())} />
              <Metric title={'⬆ Valor Máximo'} msg={maxValue.toString()} />
            </div>
            <div className="grow">
              <Card>
                <CardHeader className="text-center p-2">Histórico</CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-5">
                  <Grafico title="Aceleração em X" values={eventoSelecionado.vx} />
                  <Grafico title="Aceleração em Y" values={eventoSelecionado.vy} />
                  <Grafico title="Aceleração em Z" values={eventoSelecionado.vz} />
                </CardContent>
              </Card>
            </div>
          </div>
        }
        {eventos &&
          <TabelaDeEventos eventos={eventos} selectedEvent={selectedEvent} setSelectedEvent={(id) => setSelectedEvent(id)} />
        }
      </div>
    </main>
  );
}
