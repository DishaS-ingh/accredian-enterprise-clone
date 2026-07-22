import Image from "next/image";
import Container from "../ui/Container";
import { clients } from "@/constants/clients";

export default function Clients() {
  return (
    <section id="clients" className="bg-white py-10">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our Proven <span className="text-blue-600">Partnerships</span>
          </h2>

          <p className="mt-3 text-lg text-slate-600">
            Successful Collaborations With the{" "}
            <span className="text-blue-600">Industry's Best</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-10 gap-x-8 md:grid-cols-3 xl:grid-cols-6">
        {clients.map((client) => (
            <div
            key={client.name}
            className="flex items-center justify-center transition duration-300 hover:scale-105"
            >
            <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="h-14 w-auto object-contain"
            />
            </div>
        ))}
        </div>
      </Container>
    </section>
  );
}