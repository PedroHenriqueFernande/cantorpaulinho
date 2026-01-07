const AgendaShows = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">
                        Agenda de Shows
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Confira os próximos shows e não perca nenhuma apresentação!
                    </p>
                </div>

                <div className="w-full">
                    {/* Mobile: Agenda de Show Feed */}
                    <img
                        src="/jan.jpeg"
                        alt="Agenda de Shows - Janeiro"
                        className="md:hidden w-full rounded-2xl shadow-hover"
                    />

                    {/* Desktop: Agenda Dezembro Site */}
                    <div className="hidden md:flex justify-center">
                        <img
                            src="/jan.jpeg"
                            alt="Agenda de Shows - Janeiro"
                            className="max-h-[70vh] w-auto max-w-full rounded-2xl shadow-hover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgendaShows;
