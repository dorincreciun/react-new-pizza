import { HeaderActions } from "@widgets/header/ui/header-actions"
import { HeaderLogo } from "@widgets/header/ui/header-logo"

import { Container } from "@shared/ui"

export const Header = () => {
    return (
        <header className={"border-b border-gray-200 py-10"}>
            <Container className={"flex items-center justify-between gap-4"}>
                {/* Logo */}
                <HeaderLogo />

                {/* Search */}
                {/*<SearchForm />*/}

                <HeaderActions />
            </Container>
        </header>
    )
}
