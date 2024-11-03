<script lang="ts">
    import { TEXT_COLORS, HOVER_BACKGROUND_COLORS} from "../../utils/colors";
    import { ArrowUpRightIcon } from 'svelte-feather-icons'
    export let tag;
    const { name, link, color } = tag;
</script>

<a target="_blank" rel="noopener noreferrer" class={`${TEXT_COLORS[color]} ${HOVER_BACKGROUND_COLORS[color]} group transition-all duration-300 rounded-md hover:px-2 hover:py-1 inline`} href={link}>
    {name}
    <div class=" duration-300 max-w-0 group-hover:max-w-32 inline-block scale-0 translate-y-2 -translate-x-4 group-hover:translate-y-0 group-hover:translate-x-0 [&>*]:inline-block group-hover:scale-100 transition-all" >
        <ArrowUpRightIcon size="0.8x" />
    </div>
</a>