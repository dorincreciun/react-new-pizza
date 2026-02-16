import { LockIcon, MailIcon } from "lucide-react"
import { FormProvider } from "react-hook-form"

import { useModalStore } from "@entities/modal"

import { Button, Input } from "@shared/ui"
import { cn } from "@shared/utils"

import { RegisterHeader } from "./register-header"
import { useRegisterForm } from "../lib/use-register-form"

export const RegisterModal = () => {
    const { methods, onSubmit, isLoading, errors } = useRegisterForm()
    const openModal = useModalStore((s) => s.openModal)

    return (
        <FormProvider {...methods}>
            <RegisterHeader />

            <form onSubmit={onSubmit} className="space-y-5">
                <Input name="email">
                    <Input.Label>Adresă de email</Input.Label>
                    <Input.Control variant="primary">
                        <Input.Slot>
                            <MailIcon size={18} />
                        </Input.Slot>
                        <Input.Field
                            type="email"
                            placeholder="exemplu@mail.com"
                            rules={{
                                required: "Email-ul este obligatoriu",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Adresa de email nu este validă",
                                },
                            }}
                        />
                    </Input.Control>
                    <Input.Helper />
                </Input>

                <Input name="password">
                    <Input.Label>Parolă</Input.Label>
                    <Input.Control variant="primary">
                        <Input.Slot>
                            <LockIcon size={18} />
                        </Input.Slot>
                        <Input.Field
                            type="password"
                            placeholder="••••••••"
                            rules={{
                                required: "Parola este obligatorie",
                                minLength: { value: 6, message: "Minim 6 caractere" },
                            }}
                        />
                    </Input.Control>
                    <Input.Helper />
                </Input>

                {/* Afișare eroare de server (root) */}
                {errors.root && (
                    <div
                        className={cn(
                            "animate-in fade-in slide-in-from-top-1 mt-1.5 ml-1 text-[11px]",
                            "font-medium text-red-500 transition-all duration-300",
                        )}
                    >
                        {errors.root.message}
                    </div>
                )}

                <Button
                    isLoading={isLoading}
                    className="h-12 w-full text-base font-semibold shadow-sm transition-all"
                    type="submit"
                >
                    Înregistrare
                </Button>

                <div className="mt-2 border-t border-gray-50 pt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Nu ai un cont încă?{" "}
                        <Button type={"button"} kind={"ghost"} onClick={() => openModal("LOGIN")}>
                            Conectare
                        </Button>
                    </p>
                </div>
            </form>
        </FormProvider>
    )
}
