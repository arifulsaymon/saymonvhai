export type Platform = {
  slug: string;
  name: string;
  logoUrl: string;
  recoveryUrl: string;
  description: string;
  theme: string;
};

export const platforms: Platform[] = [
  {
    slug: 'googlehelp',
    name: 'Google',
    logoUrl: 'https://www.google.com/favicon.ico',
    recoveryUrl: 'https://accounts.google.com/signin/recovery',
    description: 'Account recovery and security support',
    theme: 'theme-google',
  },
  {
    slug: 'microsofthelp',
    name: 'Microsoft',
    logoUrl: 'https://www.microsoft.com/favicon.ico',
    recoveryUrl: 'https://account.live.com/password/reset',
    description: 'Account recovery and security support',
    theme: 'theme-microsoft',
  },
  {
    slug: 'discordhelp',
    name: 'Discord',
    logoUrl: 'https://discord.com/assets/favicon.ico',
    recoveryUrl: 'https://support.discord.com/hc/en-us/requests/new',
    description: 'Account and access support',
    theme: 'theme-discord',
  },
  {
    slug: 'facebookhelp',
    name: 'Facebook',
    logoUrl: 'https://www.facebook.com/favicon.ico',
    recoveryUrl: 'https://www.facebook.com/login/identify/',
    description: 'Account recovery and security support',
    theme: 'theme-facebook',
  },
  {
    slug: 'instagramhelp',
    name: 'Instagram',
    logoUrl: 'https://www.instagram.com/favicon.ico',
    recoveryUrl: 'https://www.instagram.com/accounts/password/reset/',
    description: 'Account recovery and security support',
    theme: 'theme-instagram',
  },
  {
    slug: 'xhelp',
    name: 'X',
    logoUrl: 'https://abs.twimg.com/favicons/twitter.3.ico',
    recoveryUrl: 'https://help.x.com/en/forms/account-access',
    description: 'Account access and security support',
    theme: 'theme-x',
  },
];

export function getPlatform(slug: string): Platform | undefined {
  return platforms.find((platform) => platform.slug === slug);
}
