import type { OAuthConfig, OAuthUserConfig } from "../node_modules/next-auth/providers";
export interface StravaProfile extends Record<string, any> {
    id: string;
    firstname: string;
    lastname: string;
    profile: string;
}
export default function Strava<P extends StravaProfile>(options: OAuthUserConfig<P>): OAuthConfig<P>;
