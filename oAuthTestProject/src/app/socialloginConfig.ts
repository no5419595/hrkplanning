import { SocialLoginModule,AuthServiceConfig,GoogleLoginProvider } from "angular5-social-login";
import { Constants } from './Constants';

export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([{
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(Constants['CLIENT_ID'])
    }]);
    
    return config;
}