import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../validations/contactSchema";

interface IFormInput {
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(contactSchema),
  });

  return (
    <section id="contact" className="w-full px-5 pt-16 pb-20">
      <div className="w-full max-w-5xl mx-auto grid md:flex gap-20 md:gap-20">
        <div className="flex-1 grid gap-20">
          <div className="grid gap-4">
            <h3 className="text-4xl font-bold text-wine tracking-wider">
              Contact Sales
            </h3>
            <p className="text-justify text-pretty">
              At <span translate="no">AC!D-OS</span>, we are committed to
              helping you achieve your business objectives effectively and
              efficiently.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-wine text-zinc-100 grid place-items-center rounded-md">
              <span className="icon-shop"></span>
            </div>
            <div className="flex-1 grid gap-2">
              <h4 className="font-bold text-xl tracking-wider">
                Sales support
              </h4>
              <p className="text-justify text-wine-secondary dark:text-wine-secondary-dark">
                Our sales team is trained to understand your specific needs and
                offer you solutions adapted to your project.
              </p>
              <a
                href="https://github.com/lazy-mux"
                target="_blank"
                rel="noreferrer noopener"
                className="text-translucent font-bold !text-sm"
              >
                CONTACT US &gt;
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-wine text-zinc-100 grid place-items-center rounded-md">
              <span className="icon-cog"></span>
            </div>
            <div className="flex-1 grid gap-2">
              <h4 className="font-bold text-xl tracking-wider">
                Technical support
              </h4>
              <p className="text-justify text-wine-secondary dark:text-wine-secondary-dark">
                Our sales team is trained to understand your specific needs and
                offer you solutions adapted to your project.
              </p>
              <a href="#" className="text-translucent font-bold !text-sm">
                JOIN OUR DISCORD &gt;
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between gap-12">
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
            className="grid gap-6"
          >
            <input
              id="input-email"
              placeholder="Email"
              autoComplete="off"
              {...register("email")}
              className="w-full py-2 px-4 outline-none focus:outline-wine/20 bg-neutral-50 dark:bg-neutral-950 rounded-md"
            />
            {errors.email && (
              <p className="text-rose-700 text-sm tracking-wide -translate-y-4">
                <b>[ ! ] {errors.email.message}</b>
              </p>
            )}
            <input
              type="tel"
              id="phone"
              placeholder="Phone number"
              autoComplete="off"
              {...register("phone")}
              className="w-full py-2 px-4 outline-none focus:outline-wine/20 bg-neutral-50 dark:bg-neutral-950 rounded-md"
            />
            {errors.phone && (
              <p className="text-rose-700 text-sm tracking-wide -translate-y-4">
                <b>[ ! ] {errors.phone.message}</b>
              </p>
            )}
            <textarea
              id="message"
              placeholder="Message"
              rows={4}
              {...register("message")}
              className="resize-none w-full py-2 px-4 outline-none focus:outline-wine/20 bg-neutral-50 dark:bg-neutral-950 rounded-md"
            ></textarea>

            {errors.message && (
              <p className="text-rose-700 text-sm tracking-wide -translate-y-4">
                <b>[ ! ] {errors.message.message}</b>
              </p>
            )}
            <input
              type="submit"
              className="w-full border border-zinc-900 dark:border-zinc-100 rounded-md py-2 px-4"
            />
          </form>
          <div className="w-full bg-neutral-50 dark:bg-neutral-950 rounded-md py-4 px-4 grid gap-4">
            <h3 className="text-xl font-bold tracking-wider">Collaborate</h3>
            <a
              href="https://github.com/lazy-mux"
              target="_blank"
              rel="noreferrer noopener"
              className="flex gap-2 items-center text-translucent"
            >
              <span className="icon-github"></span>
              &nbsp;Github/lazy-mux
            </a>
            <a href="#" className="flex gap-2 items-center text-translucent">
              <span className="icon-linkedin"></span>
              &nbsp;Linkedin/gusstavo-renteria
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
