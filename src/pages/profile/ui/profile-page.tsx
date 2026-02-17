import { Calendar, Edit2, Shield } from "lucide-react"

import { DashboardStats } from "@pages/profile/ui/dashboard-stats"

import { UpdateAvatar } from "@features/user-edit"

import { PersonalInfoCard, UserInfoProfile } from "@entities/user"

import { Button, Container, InfoCard, Title } from "@shared/ui"

export const ProfilePage = () => {
    return (
        <Container className="pt-5 pb-9">
            {/* Header Section */}
            <div className="mb-8">
                <Title as="h1" size="xl" className="mb-6">
                    Profilul meu
                </Title>

                <DashboardStats />

                {/* Profile Card */}
                <div className="rounded-xl border border-black/6 bg-white p-6 shadow-sm">
                    <div className="flex items-start gap-6">
                        <UpdateAvatar />
                        <UserInfoProfile />
                    </div>
                </div>
            </div>

            {/* Information Sections - Layout pe două coloane */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <PersonalInfoCard />

                <InfoCard>
                    <InfoCard.Header>
                        <Title as="h2" size="md" className="text-gray-900">
                            Setări cont
                        </Title>
                    </InfoCard.Header>

                    <InfoCard.Body>
                        {/* Schimbă Parola - Feature: Auth */}
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

                        {/* Istoric Comenzi - Feature: Orders */}
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
            </div>
        </Container>
    )
}
