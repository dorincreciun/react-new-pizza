export const HeaderLogo = () => {
    return (
        <div className="relative flex max-w-max shrink-0 items-center gap-4">
            <img src="/img/logo.png" alt="" />
            <div>
                <div className="text-2xl leading-6.5 font-black tracking-[1%]">NEXT PIZZA</div>
                <div className={"leading-5 text-[#7B7B7B]"}>вкусней уже некуда</div>
            </div>
        </div>
    )
}