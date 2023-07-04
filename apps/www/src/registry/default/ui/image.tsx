import { Image as ImagePrimitive } from "@kobalte/core"
import { splitProps, type ParentComponent } from "solid-js"

export const ImageRoot: ParentComponent<ImagePrimitive.ImageRootProps> = (
    props
) => {
    const [local, rest] = splitProps(props, ["class", "classList"])
    return (
        <ImagePrimitive.Root
            class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
            classList={{
                [local.class!]: Boolean(local.class),
                ...local.classList,
            }}
            {...rest}
        />
    )
}

export const Image: ParentComponent<ImagePrimitive.ImageImgProps> = (props) => {
    const [local, rest] = splitProps(props, ["class", "classList", "classList"])
    return (
        <ImagePrimitive.Img
            class="aspect-square h-full w-full"
            classList={{
                [local.class!]: Boolean(local.class),
                ...local.classList,
            }}
            {...rest}
        />
    )
}

export const ImageFallback: ParentComponent<
    ImagePrimitive.ImageFallbackProps
> = (props) => {
    const [local, rest] = splitProps(props, ["class", "classList"])
    return (
        <ImagePrimitive.Fallback
            class="flex h-full w-full items-center justify-center rounded-full bg-muted"
            classList={{
                [local.class!]: Boolean(local.class),
                ...local.classList,
            }}
            {...rest}
        />
    )
}
