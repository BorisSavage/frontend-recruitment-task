import Hero from "@/components/Hero";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="mt-[calc(80svh-3rem)] flex flex-col items-center justify-center pb-24">
      <Hero />
      <main className="relative">
        <section>
          <h2 className="py-8 text-center text-3xl sm:text-5xl">Lorem ipsum</h2>
          <div
            className={cn(
              "grid grid-cols-1 gap-4 px-4 text-justify text-sm",
              "sm:grid-cols-3 sm:text-base"
            )}
          >
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                atque, qui et ut suscipit voluptates veniam, facilis enim saepe
                necessitatibus, dolore eveniet ipsam! Accusamus harum a fuga
                maiores illo deserunt. Ipsa qui inventore repellendus,
                asperiores quaerat neque corporis eveniet aliquid, temporibus
                officiis esse quas velit beatae? Recusandae cum cumque beatae ab
                enim, molestias porro unde, architecto blanditiis nesciunt
                molestiae voluptatibus? Necessitatibus ipsa quisquam velit eius
                quis numquam harum quasi quaerat nobis. Ipsam facere ex eos
                perferendis porro necessitatibus animi asperiores neque, fugiat
                aut aliquam harum recusandae eum doloremque et repellat.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                inventore dolorum deleniti dolores minus excepturi. Facilis
                dolorem blanditiis dolores consectetur et ea quos voluptatum
                aspernatur! Veritatis alias accusantium a dignissimos. Eaque
                quam labore architecto laborum et illum voluptates natus nemo?
                Voluptates modi consectetur ipsam accusantium, laudantium odio
                aliquam nulla at ducimus quidem pariatur repudiandae qui aperiam
                officia cupiditate quisquam non. Enim ex, dolore repellat
                eligendi doloremque earum aperiam blanditiis? Quibusdam, quo
                perferendis? Eius aut neque sapiente dolorem laboriosam
                distinctio eos alias quibusdam dolore. Illo earum eaque itaque
                consectetur nostrum dolorem.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, quod id aut fugit amet debitis illum mollitia maiores
                obcaecati laudantium inventore fugiat! Enim, ipsa blanditiis
                molestias laboriosam dolor ipsum iste? Dolorum architecto,
                nostrum repudiandae natus modi a amet excepturi inventore,
                itaque aspernatur nemo eum, voluptas et recusandae optio atque
                cumque facere! Eum, culpa nobis! Quaerat cupiditate error minus
                ab aliquid? Hic minus iste nulla ratione reprehenderit
                laboriosam repellendus, nobis consectetur saepe tenetur velit
                obcaecati provident voluptatum. Possimus earum, quod recusandae
                cupiditate dicta deserunt incidunt adipisci illo quae asperiores
                nam quasi.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
