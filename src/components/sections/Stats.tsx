import Container from "../ui/Container";
import { stats } from "@/constants/stats";

export default function Stats() {
  return (
    <section
      id="stats"
      className="bg-white pt-16 pb-8"
    >
      <Container>
        <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Our <span className="text-blue-600">Track Record</span>
            </h2>

            <p className="mt-3 text-lg text-slate-600">
              The Numbers Behind <span className="text-blue-600">Our Success</span>
            </p>
          </div>
        <div className="grid grid-cols-2 gap-6 rounded-3xl bg-slate-50 py-12 px-6 shadow-sm grid grid-cols-1 gap-8 rounded-3xl bg-slate-50 py-12 px-6 shadow-sm md:grid-cols-3">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center text-center px-8 ${
                index !== stats.length - 1
                  ? "border-b border-slate-200 pb-8 md:border-b-0 md:border-r md:pb-0"
                  : ""
              }`}
            >
              <div className="inline-flex items-center justify-center rounded-full bg-blue-100 px-10 py-4 shadow-sm">
                <span className="text-4xl md:text-5xl font-bold tracking-tight text-blue-600">
                  {stat.value}
                </span>
              </div>

              <p className="mt-5 max-w-xs text-base leading-8 text-slate-700">
                {stat.label}
                    </p>
                  </div>
                ))}

        </div>
      </Container>
    </section>
  );
}