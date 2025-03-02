import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <section className="h-screen">
        <div className="container-fluid mx-auto flex h-full flex-col-reverse space-y-0 px-0 md:flex-row md:space-y-0">
          {/* left section [form] */}
          <div className="h-full bg-white p-32 dark:bg-gray-700 md:w-1/2">
            <div>{children}</div>
          </div>
          {/* right section [vector] */}
          <div className="flex h-full w-full flex-col space-y-32 bg-latte pt-32 dark:bg-gray-800 md:w-1/2">
            <Image
              alt="Easy Genartor login - registration page image"
              src="/assets/svg/login.svg"
              width={500}
              height={500}
              className="mx-auto rounded-md object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
