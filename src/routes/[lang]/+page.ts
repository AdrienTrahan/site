import { type Load, type LoadEvent } from '@sveltejs/kit';
import { getLatestUpdateTime } from '../../utils/update';

export async function load({ params, fetch } : LoadEvent) {
    const { lang } = params;
    const translations = await import(`../../i18n/${lang}.json`);
    const latestUpdate = await getLatestUpdateTime(fetch);
    return {
        lang,
        translations: translations.default,
        latestUpdate
    };
}