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
                        src="/Agenda de Show Feed.jpg"
                        alt="Agenda de Shows - Próximas apresentações"
                        className="md:hidden w-full rounded-2xl shadow-hover"
                    />

                    {/* Desktop: Agenda Dezembro Site */}
                    <img
                        src="/Agenda Dezembro Site.jpg"
                        alt="Agenda de Shows - Próximas apresentações"
                        className="hidden md:block w-full rounded-2xl shadow-hover"
                    />
                </div>
            </div>
        </section>
    );
};

export default AgendaShows;
