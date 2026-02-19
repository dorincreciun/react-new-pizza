import { Calendar, Edit2, Shield } from "lucide-react"

import { DashboardStats } from "@pages/profile/ui/dashboard-stats"

import { UpdateAvatar } from "@features/user-edit"

import { PersonalInfoCard, UserInfoProfile } from "@entities/user"

import { Button, Container, InfoCard, Title } from "@shared/ui"

export const ProfilePage = () => {
    return (
        <Container className="pt-6 pb-12 md:pt-8 md:pb-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10 xl:gap-12">
                {/* Sidebar: identitate (fixă, la stânga pe desktop) */}
                <aside className="shrink-0 lg:sticky lg:top-6 lg:w-72 xl:w-80">
                    <Title as="h1" size="xl" className="mb-6 lg:mb-6">
                        Profilul meu
                    </Title>
                    <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm">
                        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:text-left lg:flex-col lg:text-center">
                            <UpdateAvatar />
                            <UserInfoProfile />
                        </div>
                    </div>
                </aside>

                {/* Zona principală: statistici + informații + setări */}
                <main className="min-w-0 flex-1 space-y-8">
                    <section aria-label="Statistici">
                        <DashboardStats />
                    </section>

                    <section aria-label="Informații personale">
                        <PersonalInfoCard />
                    </section>

                    <section aria-label="Setări cont">
                        <InfoCard>
                            <InfoCard.Header>
                                <Title as="h2" size="md" className="text-gray-900">
                                    Setări cont
                                </Title>
                            </InfoCard.Header>

                            <InfoCard.Body>
                                <InfoCard.Row>
                                    <InfoCard.Icon icon={Shield} />
                                    <InfoCard.Content
                                        label="Schimbă parola"
                                        value="Actualizează parola contului tău"
                                    />
                                    <InfoCard.Action>
                                        <Button onlyIcon size="sm" kind="ghost">
                                            <Edit2 size={18} />
                                        </Button>
                                    </InfoCard.Action>
                                </InfoCard.Row>

                                <InfoCard.Row>
                                    <InfoCard.Icon icon={Calendar} />
                                    <InfoCard.Content
                                        label="Istoric comenzi"
                                        value="Vezi comenzile tale anterioare"
                                    />
                                    <InfoCard.Action>
                                        <Button onlyIcon size="sm" kind="ghost">
                                            <Edit2 size={18} />
                                        </Button>
                                    </InfoCard.Action>
                                </InfoCard.Row>
                            </InfoCard.Body>
                        </InfoCard>
                    </section>
                </main>
            </div>
        </Container>
    )
}
