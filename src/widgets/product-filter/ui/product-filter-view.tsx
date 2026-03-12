import { useCallback, useState } from "react"
import type { PropsWithChildren } from "react"
import { useSearchParams } from "react-router"

import { Button, Title } from "@shared/ui"

import { type BaseFilterOption, FilterGroup } from "./filter-section"

const Root = ({ children }: PropsWithChildren) => {
    return <div className="flex w-112.5 flex-col self-stretch">{children}</div>
}

const Header = ({ children }: PropsWithChildren) => {
    return <div>{children}</div>
}

const Content = ({ children }: PropsWithChildren) => {
    return <div className="overflow-y-auto">{children}</div>
}

const Footer = ({ children }: PropsWithChildren) => {
    return <div>{children}</div>
}

const Divider = () => (
    <div className="my-6 h-px w-full bg-linear-to-r from-transparent via-gray-200 to-transparent" />
)

export type Props<T extends BaseFilterOption> = {
    data: Array<{
        name: string
        url_key: string
        options: T[]
    }>
}

export const ProductFilterView = <T extends BaseFilterOption>({ data }: Props<T>) => {
    const [searchParams, setSearchParams] = useSearchParams()

    const [pendingFilters, setPendingFilters] = useState<Record<string, string[]>>(() =>
        Object.fromEntries(data.map((g) => [g.url_key, searchParams.getAll(g.url_key)])),
    )

    const handleGroupChange = useCallback((urlKey: string) => (id: string) => {
        setPendingFilters((prev) => {
            const arr = prev[urlKey] ?? []
            const next = arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id]
            return { ...prev, [urlKey]: next }
        })
    }, [])

    const applyFilters = useCallback(() => {
        const next = new URLSearchParams(searchParams)
        data.forEach((g) => {
            next.delete(g.url_key)
            ;(pendingFilters[g.url_key] ?? []).forEach((v) => next.append(g.url_key, v))
        })
        setSearchParams(next)
    }, [data, searchParams, pendingFilters, setSearchParams])

    return (
        <Root>
            <Header>
                <Title as={"h2"} size={"sm"}>
                    Фильтрация
                </Title>
            </Header>

            <Content>
                {data.map(({ name, url_key, options }, index) => {
                    const isLast = index === data.length - 1

                    return (
                        <div key={name}>
                            <FilterGroup
                                name={name}
                                urlKey={url_key}
                                items={options}
                                selectedValues={pendingFilters[url_key] ?? []}
                                onChange={handleGroupChange(url_key)}
                            />
                            {!isLast && <Divider />}
                        </div>
                    )
                })}
            </Content>

            <Footer>
                <Button size="lg" className="w-full" onClick={applyFilters}>
                    Применить
                </Button>
            </Footer>
        </Root>
    )
}
