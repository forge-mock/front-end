import React from "react";
import { signIn } from "next-auth/react";
import GoogleIcon from "@assets/oauth-providers/google.svg";
import GithubIcon from "@assets/oauth-providers/github.svg";
import { IconButton } from "@shared/components";

export interface OauthButtonsProps {
  addedProviders?: string[];
}

function isProviderAdded(name: string, providers: string[]): boolean {
  return providers.includes(name);
}

const OAUTH_PROVIDERS = [
  { id: "google", name: "Google", Icon: GoogleIcon },
  { id: "github", name: "GitHub", Icon: GithubIcon },
];

function OauthButtons({ addedProviders = [] }: Readonly<OauthButtonsProps>): React.JSX.Element {
  async function handleOauthLogin(provider: string): Promise<void> {
    await signIn(provider);
  }

  return (
    <div className="w-100 items-center flex justify-center gap-4 mb-4">
      {OAUTH_PROVIDERS.map((provider) => (
        <IconButton
          key={provider.id}
          Icon={provider.Icon}
          height={40}
          width={40}
          ariaLabel={`${provider.name} OAuth`}
          onClick={() => handleOauthLogin(provider.id)}
          isDisabled={isProviderAdded(provider.name, addedProviders)}
        />
      ))}
    </div>
  );
}

export default OauthButtons;
