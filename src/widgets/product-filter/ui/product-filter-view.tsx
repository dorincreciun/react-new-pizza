import type { PropsWithChildren } from "react"

import { Button, Title } from "@shared/ui"

import { type BaseFilterOption, FilterGroup } from "./filter-section"

const Root = ({ children }: PropsWithChildren) => {
    return <div className="flex w-75 flex-col self-stretch">{children}</div>
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
                            <FilterGroup key={name} name={name} urlKey={url_key} items={options} />
                            {!isLast && <Divider />}
                        </div>
                    )
                })}
            </Content>

            <Footer>
                <Button size="lg" className="w-full">
                    Применить
                </Button>
            </Footer>
        </Root>
    )
}
