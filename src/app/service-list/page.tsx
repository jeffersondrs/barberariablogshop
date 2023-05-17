export default function ServiceList() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="flex flex-col items-center justify-center w-full px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
          Serviços
        </h1>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>

        <div className="flex flex-col items-center justify-center w-full mt-8 space-y-4">
          <div className="flex flex-col items-center justify-center w-full max-w-4xl px-4 py-8 space-y-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex flex-col items-center justify-center w-full space-y-4">
              <div className="flex flex-col items-center justify-center w-full space-y-4">
                <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
                  Estilos novos e tradicionais
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  A melhor experiência
                </p>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam
                </p>
              </div>
              <button className="px-4 py-2 font-bold text-white bg-gray-800 rounded hover:bg-gray-700">
                Leia mais...
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
