<script lang="ts">
    import LinkTag from "$components/LinkTag/index.svelte";
    import ContactMethod from "$components/ContactMethod/index.svelte";
    import { FacebookIcon, InstagramIcon, LinkedinIcon, GithubIcon } from "svelte-feather-icons";
    import { formatDate } from "../../utils/utils.js";
    import { FACEBOOK_PROFILE_URL, GITHUB_PROFILE_URL, INSTAGRAM_PROFILE_URL, LINKEDIN_PROFILE_URL, REPO_URL } from "../../utils/consts.js";

    export let data;
    const { lang, translations, latestUpdate } = data;
    const oppositeLang = lang?.toUpperCase() == "FR" ? "en" : "fr";
</script>
<div class="flex flex-col inset-0 fixed items-center">
    <div class="w-full px-4 pt-4 flex">
        <div>
            <a class="text-zinc-400 select-none hover:underline" href="/{oppositeLang}" data-sveltekit-reload>{oppositeLang.toUpperCase()}</a>
        </div>
        <div class="flex-1 flex gap-6 justify-end">
            <ContactMethod icon={GithubIcon} color="indigo" text="Github" link={GITHUB_PROFILE_URL} />
            <ContactMethod icon={LinkedinIcon} color="sky" text="LinkedIn" link={LINKEDIN_PROFILE_URL} />
            <ContactMethod icon={FacebookIcon} color="blue" text="Facebook" link={FACEBOOK_PROFILE_URL} />
            <ContactMethod icon={InstagramIcon} color="rose" text="Instagram" link={INSTAGRAM_PROFILE_URL} />
        </div>
    </div>
    <div class="flex-1 [&>*]:leading-[2rem] [&>*]:text-xl px-12 max-w-[42rem] flex flex-col justify-center">
        <div class="mt-16 mb-8 relative h-12 select-none">
            <div class="wave-hand text-5xl absolute hover:scale-125 transition-all hover:drop-shadow-2xl">
                👋
            </div>
        </div>
        <div class=" mb-24">
            {#each translations.body as tag}
                {#if typeof tag === "string"}
                    <span class=" whitespace-pre-line">{tag}</span>
                {:else}
                    <LinkTag {tag} />
                {/if}
            {/each}
        </div>
    </div>
    <div class="flex w-full px-4 py-3 text-zinc-400 text-xs select-none">
        <div>
            {#if latestUpdate}
                <p>
                    {translations.footer.updated}
                    <span class="ml-2 font-bold text-zinc-500">
                        {formatDate(latestUpdate)}
                    </span>
                </p>
            {/if}
        </div>
        <a target="_blank" rel="noopener noreferrer" href={REPO_URL} class="flex-1 flex justify-end select-none underline-offset-0 hover:underline hover:underline-offset-4 transition-all">
            {translations.footer.hosted}
        </a>
    </div>
</div>

<style>

    @keyframes handWave {
        0% {
            rotate: 0deg;
        }
        10% {
            rotate: 20deg;
        }
        15% {
            rotate: -20deg;
        }
        20% {
            rotate: 20deg;
        }
        30% {
            rotate: 0deg;
        }
        100% {
            rotate: 0deg;
        }
    }

    .wave-hand{
        transform-origin: 80% 80%;
        animation-name: handWave;
        animation-duration: 3.2s;
        animation-iteration-count: infinite;
    }

</style>