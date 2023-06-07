/* eslint-disable @next/next/no-img-element */
import Layout from "../components/templates/Layout";
import Link from "next/link";
import Image from "next/image";

import {
  RocketLaunchIcon,
  BeakerIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

import Features from "../components/sections/Features";
import Faq from "../components/sections/Faq";

const services = [
  {
    icon: RocketLaunchIcon,
    color: "bg-accent",
    title: `Percorso formativo "Crea la tua Startup"`,
    description:
      "Dall'idea alla creazione di un pitch deck. Step pratici, framework e contenuti utili per validare la tua idea di startup.",
    cta: "Coming soon",
  },
  {
    icon: BeakerIcon,
    color: "bg-secondary",
    title: "Accelerazione e supporto progetti",
    description:
      "Ottieni il meglio dai tuoi progetti. Accedi a tutti i vantaggi per raggiungere obiettivi sempre più ambiziosi.",
    cta: "Coming soon",
  },
  {
    icon: TrophyIcon,
    color: "bg-primary",
    title: "Premio Giovane Talento Imprenditoriale",
    description:
      "Ogni anno premiamo con una borsa di studio i migliori progetti validati e sviluppati dai più giovani.",
    cta: "Coming soon",
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-primary text-5xl">
          <span className="font-bold">Start</span>Hub
        </h1>
        <p className="text-gray-500 text-lg mt-4 text-center max-w-5xl">
          I giovani possono e devono sviluppare progetti utili ed interessanti.
          StartHub è una associazione no-profit che vuole aiutare i giovani a
          raggiungere obiettivi ambiziosi. Mettiamo a disposizione servizi e
          strumenti utili per accelerare lo sviluppo imprenditoriale.
        </p>
      </div>

      {/* Services */}
      <div className="flex md:flex-row flex-col mt-8 gap-x-8 gap-y-8">
        {services.map((service, index) => (
          <div
            className="flex flex-col px-6 py-8 border-2 border-gray-200 justify-between rounded-xl hover:shadow-2xl hover:border-white hover:-translate-y-2  transition duration-300 ease-in-out"
            key={index}
          >
            <div className="flex flex-col">
              {service.icon && (
                <div
                  className={`h-14 w-14 rounded-lg p-3 flex items-center justify-center ${service.color}`}
                >
                  <service.icon className="h-12 w-12 text-white" />
                </div>
              )}

              <h2 className="text-primary text-xl font-bold mt-5">
                {service.title}
              </h2>
              <p className="text-gray-500 text-lg mt-4">
                {service.description}
              </p>
            </div>

            <Link href="#" className="text-primary mt-6">
              {service.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="flex md:flex-row flex-col mt-16 gap-x-8 gap-y-8">
        {/* OpenSource */}
        <div className="flex flex-row justify-between bg-secondary/20 rounded-xl">
          <div className="md:w-2/3 w-full p-10">
            <h2 className="text-primary text-3xl font-bold">Open Source</h2>
            <p className="text-gray-500 text-lg mt-4 max-w-5xl">
              Tutti i dati e i processi di StartHub sono pubblici per permettere
              a chiunque di suggerire miglioramenti.
            </p>
          </div>
          <div className="w-1/3 flex flex-col justify-end ">
            <img src="/feature1.png" alt="" className="w-full pt-4 pr-4" />
          </div>
        </div>
        {/* OpenSource */}
        <div className="flex flex-row justify-between bg-accent/20 rounded-xl">
          <div className="md:w-2/3 w-full p-10">
            <h2 className="text-primary text-3xl font-bold">No-profit</h2>
            <p className="text-gray-500 text-lg mt-4 max-w-5xl">
              StartHub è un&apos;associazione no-profit e tutti i servizi
              offerti sono gratuiti per garantirne l&apos;accesso a più giovani
              possibili.
            </p>
          </div>
          <div className="w-1/3 flex flex-col justify-end">
            <img src="/feature2.png" alt="" className="w-full pt-4 pr-4" />
          </div>
        </div>
      </div>

      <Faq />
    </Layout>
  );
}
