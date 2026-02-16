import { LockIcon, MailIcon } from "lucide-react"
import { FormProvider } from "react-hook-form"

import { Button, Input } from "@shared/ui"
import { cn } from "@shared/utils"

import { LoginHeader } from "./login-header"
import { useLoginForm } from "../lib/use-login-form"


export const LoginModal = () => {
    const { methods, onSubmit, isLoading, errors } = useLoginForm()

    return (
        <FormProvider {...methods}>
            <LoginHeader />

            <form onSubmit={onSubmit} className="space-y-5">
                <Input name="email">
                    <Input.Label>Email</Input.Label>
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
                    Conectare
                </Button>
            </form>
        </FormProvider>
    )
}
