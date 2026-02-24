import { useState } from "react"

import { Virtual } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { IngredientItem } from "@pages/product/ui/ingredient-item"

import type { IngredientType } from "@entities/product/model/types"

interface Props {
    ingredients: IngredientType[]
    onChange?: (ingredient: IngredientType) => void
}

export const IngredientSelect = ({ingredients, onChange}: Props) => {
    const [activeAddon, setActiveAddon] = useState<number | null>(0)

    const handleSelect = (ingredient: IngredientType) => {
        setActiveAddon(ingredient.id)
        onChange?.(ingredient)
    }
    return (
        <div>
            <div className="pb-4 text-base font-semibold">Ингредиенты</div>
            <div>
                <Swiper modules={[Virtual]} spaceBetween={14} slidesPerView={3.5} virtual>
                    {ingredients.map((ingredients, index) => (
                        <SwiperSlide key={ingredients.id} virtualIndex={index}>
                            <IngredientItem
                                image={ingredients.imageUrl}
                                name={ingredients.name}
                                price={"0"}
                                isActive={activeAddon === ingredients.id}
                                onClick={() => handleSelect(ingredients)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
