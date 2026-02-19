import { Edit2, Mail, MapPin, Phone, User } from "lucide-react"

import { Button, InfoCard } from "@shared/ui"

export const PersonalInfoCard = () => {
    return (
        <InfoCard>
            <InfoCard.Header>Informații personale</InfoCard.Header>

            <InfoCard.Body>
                {/* Prenume */}
                <InfoCard.Row>
                    <InfoCard.Icon icon={User} />
                    <InfoCard.Content label="Prenume" value="John" />
                    <InfoCard.Action>
                        <Button onlyIcon size="sm" kind="ghost">
                            <Edit2 size={18} />
                        </Button>
                    </InfoCard.Action>
                </InfoCard.Row>

                {/* Nume de familie */}
                <InfoCard.Row>
                    <InfoCard.Icon icon={User} />
                    <InfoCard.Content label="Nume de familie" value="Doe" />
                    <InfoCard.Action>
                        <Button onlyIcon size="sm" kind="ghost">
                            <Edit2 size={18} />
                        </Button>
                    </InfoCard.Action>
                </InfoCard.Row>

                {/* Email */}
                <InfoCard.Row>
                    <InfoCard.Icon icon={Mail} />
                    <InfoCard.Content label="Adresă de email" value="john.doe@example.com" />
                    <InfoCard.Action>
                        <Button onlyIcon size="sm" kind="ghost">
                            <Edit2 size={18} />
                        </Button>
                    </InfoCard.Action>
                </InfoCard.Row>

                {/* Telefon */}
                <InfoCard.Row>
                    <InfoCard.Icon icon={Phone} />
                    <InfoCard.Content label="Număr de telefon" value="+40 712 345 678" />
                    <InfoCard.Action>
                        <Button onlyIcon size="sm" kind="ghost">
                            <Edit2 size={18} />
                        </Button>
                    </InfoCard.Action>
                </InfoCard.Row>

                {/* Adresă */}
                <InfoCard.Row>
                    <InfoCard.Icon icon={MapPin} />
                    <InfoCard.Content label="Adresă" value="București, România" />
                    <InfoCard.Action>
                        <Button onlyIcon size="sm" kind="ghost">
                            <Edit2 size={18} />
                        </Button>
                    </InfoCard.Action>
                </InfoCard.Row>
            </InfoCard.Body>
        </InfoCard>
    )
}
