import { provideIcons } from '@ng-icons/core';
import {
  diAngularOriginal, diDockerOriginal, diDotnetcoreOriginal, diEntityframeworkcoreOriginal,
  diMicrosoftsqlserverOriginal,
  diNodejsOriginal, diPlaywrightOriginal,
  diTailwindcssOriginal,
  diTypescriptOriginal, diVitestOriginal
} from '@ng-icons/devicon/original';
import {EnvironmentProviders, Provider} from '@angular/core';

export const devIconProvider: (Provider | EnvironmentProviders)[] = [
  provideIcons({
    diAngularOriginal,
    diTypescriptOriginal,
    diNodejsOriginal,
    diTailwindcssOriginal,
    diPlaywrightOriginal,
    diDotnetcoreOriginal,
    diVitestOriginal,
    diDockerOriginal,
    diEntityframeworkcoreOriginal,
    diMicrosoftsqlserverOriginal
  }),
];
