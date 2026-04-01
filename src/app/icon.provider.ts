import { provideIcons } from '@ng-icons/core';
import {
  diAngularOriginal,
  diAzuredevopsOriginal,
  diConfluenceOriginal,
  diCsharpOriginal,
  diCss3Original, diDatadogOriginal, diDebianOriginal, diDockerOriginal, diDotnetcoreOriginal, diEntityframeworkcoreOriginal,
  diEslintOriginal, diGitOriginal, diGithubOriginal, diGrafanaOriginal, diHtml5Original, diJavaOriginal, diLinuxOriginal,
  diMicrosoftsqlserverOriginal,
  diNginxOriginal,
  diNodejsOriginal, diPlaywrightOriginal, diPowershellOriginal, diPrimengOriginal, diPrometheusOriginal, diProxmoxOriginalWordmark,
  diTailwindcssOriginal,
  diTraefikproxyOriginal,
  diTypescriptOriginal, diVitestOriginal
} from '@ng-icons/devicon/original';
import { matDownloadOutline } from '@ng-icons/material-icons/outline';
import {EnvironmentProviders, Provider} from '@angular/core';
import {diJestPlain} from '@ng-icons/devicon/plain';
import { bootstrapGithub, bootstrapSunFill, bootstrapMoonFill } from '@ng-icons/bootstrap-icons';

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
    diMicrosoftsqlserverOriginal,
    diDatadogOriginal,
    diAzuredevopsOriginal,
    diConfluenceOriginal,
    diCsharpOriginal,
    diCss3Original,
    diEslintOriginal,
    diGitOriginal,
    diGithubOriginal,
    diHtml5Original,
    diLinuxOriginal,
    diJavaOriginal,
    diProxmoxOriginalWordmark,
    diPrimengOriginal,
    diPowershellOriginal,
    diNginxOriginal,
    diTraefikproxyOriginal,
    diDebianOriginal,
    diGrafanaOriginal,
    diPrometheusOriginal,
    matDownloadOutline,
    diJestPlain,
    bootstrapGithub,
    bootstrapSunFill,
    bootstrapMoonFill
  }),
];
