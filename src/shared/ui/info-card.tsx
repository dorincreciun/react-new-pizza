import type { ElementType, ReactNode } from "react"

/**
 * Componenta container principală care definește structura vizuală de bază a cardului.
 * @param children - Conținutul cardului (Header, Body etc.).
 */
const Root = ({ children }: { children: ReactNode }) => (
    <div className="overflow-hidden rounded-xl border border-black/6 bg-white shadow-sm">
        {children}
    </div>
)

/**
 * Secțiunea superioară a cardului, separată vizual printr-o bordură inferioară.
 * @param children - Titlul sau elementele din antet.
 */
const Header = ({ children }: { children: ReactNode }) => (
    <div className="border-b border-gray-100 px-6 py-4">{children}</div>
)

/**
 * Containerul principal pentru informații, gestionează spațierea verticală între rânduri.
 * @param children - Elementele de tip InfoCard.Row.
 */
const Body = ({ children }: { children: ReactNode }) => (
    <div className="space-y-4 p-6">{children}</div>
)

/**
 * Un rând stilizat pentru afișarea unei informații specifice, cu efect de hover.
 * @param children - Combinație de Icon, Content și Action.
 */
const Row = ({ children }: { children: ReactNode }) => (
    <div className="flex items-center gap-4 rounded-xl border border-black/6 bg-[#FAFAFA] p-4 transition-all duration-150 hover:bg-white">
        {children}
    </div>
)

/**
 * Container pentru iconița asociată unei informații.
 * @param icon - Componenta iconiței (ex: din lucide-react).
 */
const Icon = ({ icon: IconComponent }: { icon: ElementType }) => (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FE5F00]/10 text-[#FE5F00]">
        <IconComponent size={18} />
    </div>
)

/**
 * Afișează o pereche etichetă-valoare cu suport pentru trunchierea textului.
 * @param label - Descrierea câmpului (ex: "Email").
 * @param value - Valoarea propriu-zisă (ex: "user@example.com").
 */
const Content = ({ label, value }: { label: string; value: string }) => (
    <div className="min-w-0 flex-1">
        <p className="mb-1 text-xs text-gray-500">{label}</p>
        <p className="truncate text-base font-medium text-gray-900">{value}</p>
    </div>
)

/**
 * Slot poziționat la finalul rândului pentru acțiuni contextuale.
 * @param children - Elementul de control (buton, checkbox etc.).
 */
const Action = ({ children }: { children: ReactNode }) => (
    <div className="flex shrink-0 items-center justify-center">{children}</div>
)

/**
 * Componentă de tip InfoCard pentru afișarea structurată a informațiilor de profil sau setări.
 * Utilizează pattern-ul Compound Components pentru flexibilitate maximă.
 * @example
 * ```tsx
 * <InfoCard>
 *      <InfoCard.Header>Detalii Utilizator</InfoCard.Header>
 *      <InfoCard.Body>
 *          <InfoCard.Row>
 *              <InfoCard.Icon icon={User} />
 *              <InfoCard.Content label="Nume" value="Alex" />
 *              <InfoCard.Action>
 *                  <Button>Edit</Button>
 *              </InfoCard.Action>
 *          </InfoCard.Row>
 *      </InfoCard.Body>
 * </InfoCard>
 * ```
 */
export const InfoCard = Object.assign(Root, {
    Header,
    Body,
    Row,
    Icon,
    Content,
    Action,
})
