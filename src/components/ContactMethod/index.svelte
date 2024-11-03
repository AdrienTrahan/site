<script lang="ts">
    import { ICON_COLORS, TEXT_COLORS } from "../../utils/colors";

    export let icon;
    export let text;
    export let link;
    export let color;
</script>

<a target="_blank" rel="noopener noreferrer" class="flex justify-center items-center group" href={link}>
    <span class={`${ICON_COLORS[color]} h-0 flex justify-center items-center scale-125 group-hover:scale-150 md:scale-100 transition-all`}>
        <svelte:component size="1.0x" this={icon} />
    </span>
    <p class={`${TEXT_COLORS[color]} max-w-0 md:max-w-24 -translate-x-8 opacity-0 md:translate-x-0 md:opacity-100 md:block font-medium ml-2 duration-300 transition-all group-hover:underline underline-offset-0 group-hover:underline-offset-4`}>{text}</p>
</a>