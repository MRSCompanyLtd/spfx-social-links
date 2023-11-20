import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneCheckbox,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
// import { IReadonlyTheme } from '@microsoft/sp-component-base';
import * as strings from 'SocialLinksWebPartStrings';
import SocialLinks from './components/SocialLinks';
import { ISocialLinksProps } from './components/ISocialLinksProps';
// import { FieldCollectionData, CustomCollectionFieldType } from '@pnp/spfx-controls-react/lib/FieldCollectionData';

export interface ISocialLinksWebPartProps {
  showTwitter: boolean;
  twitterLink: string;
  showLinkedin: boolean;
  linkedinLink: string;
  showYouTube: boolean;
  youTubeLink: string;
  showFacebook: boolean;
  facebookLink: string;
  showInstagram: boolean;
  instagramLink: string;
  showPinterest: boolean;
  pinterestLink: string;
  showSnapchat: boolean;
  snapchatLink: string;
  showReddit: boolean;
  redditLink: string;
  showTikTok: boolean;
  tikTokLink: string;
  title: string;
  updateTitle: (value: string) => void;
}

export default class SocialLinksWebPart extends BaseClientSideWebPart<ISocialLinksWebPartProps> {
  public render(): void {
    const element: React.ReactElement<ISocialLinksProps> = React.createElement(
      SocialLinks,
      {
        showTwitter: this.properties.showTwitter,
        twitterLink: this.properties.twitterLink,
        showLinkedin: this.properties.showLinkedin,
        linkedinLink: this.properties.linkedinLink,
        showYouTube: this.properties.showYouTube,
        youTubeLink: this.properties.youTubeLink,
        showFacebook: this.properties.showFacebook,
        facebookLink: this.properties.facebookLink,
        showInstagram: this.properties.showInstagram,
        instagramLink: this.properties.instagramLink,
        showPinterest: this.properties.showPinterest,
        pinterestLink: this.properties.pinterestLink,
        showSnapchat: this.properties.showSnapchat,
        snapchatLink: this.properties.snapchatLink,
        showReddit: this.properties.showReddit,
        redditLink: this.properties.redditLink,
        showTikTok: this.properties.showTikTok,
        tikTokLink: this.properties.tikTokLink,
        title: this.properties.title,
        updateTitle: (value: string) => (this.properties.title = value)
      }
    );

    ReactDom.render(element, this.domElement);
  }

  // protected onInit(): Promise<void> {
  //   return new Promise(() => {});
  // }

  // protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
  //   if (!currentTheme) {
  //     return;
  //   }

  //   this._isDarkTheme = !!currentTheme.isInverted;
  //   const {
  //     semanticColors
  //   } = currentTheme;

  //   if (semanticColors) {
  //     this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
  //     this.domElement.style.setProperty('--link', semanticColors.link || null);
  //     this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
  //   }

  // }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneCheckbox('showTwitter', {
                  checked: this.properties.showTwitter,
                  text: 'Show Twitter?'
                }),
                PropertyPaneTextField('twitterLink', {
                  label: 'Twitter Link',
                  disabled: !this.properties.showTwitter,
                  value: this.properties.twitterLink,
                  placeholder: 'https://twitter.com/username'
                }),
                PropertyPaneCheckbox('showLinkedin', {
                  checked: this.properties.showLinkedin,
                  text: 'Show Linkedin?'
                }),
                PropertyPaneTextField('linkedinLink', {
                  label: 'Linkedin Link',
                  disabled: !this.properties.showLinkedin,
                  value: this.properties.linkedinLink,
                  placeholder: 'https://www.linkedin.com/in/username'
                }),
                PropertyPaneCheckbox('showYouTube', {
                  checked: this.properties.showYouTube,
                  text: 'Show YouTube?'
                }),
                PropertyPaneTextField('youTubeLink', {
                  label: 'YouTube Link',
                  disabled: !this.properties.showYouTube,
                  value: this.properties.youTubeLink,
                  placeholder: 'https://www.youtube.com/channel/username'
                }),
                PropertyPaneCheckbox('showFacebook', {
                  checked: this.properties.showFacebook,
                  text: 'Show Facebook?'
                }),
                PropertyPaneTextField('facebookLink', {
                  label: 'Facebook Link',
                  disabled: !this.properties.showFacebook,
                  value: this.properties.facebookLink,
                  placeholder: 'https://www.facebook.com/username'
                }),
                PropertyPaneCheckbox('showInstagram', {
                  checked: this.properties.showInstagram,
                  text: 'Show Instagram?'
                }),
                PropertyPaneTextField('instagramLink', {
                  label: 'Instagram Link',
                  disabled: !this.properties.showInstagram,
                  value: this.properties.instagramLink,
                  placeholder: 'https://www.instagram.com/username'
                }),
                PropertyPaneCheckbox('showPinterest', {
                  checked: this.properties.showPinterest,
                  text: 'Show Pinterest?'
                }),
                PropertyPaneTextField('pinterestLink', {
                  label: 'Pinterest Link',
                  disabled: !this.properties.showPinterest,
                  value: this.properties.pinterestLink,
                  placeholder: 'https://www.pinterest.com/username'
                }),
                PropertyPaneCheckbox('showSnapchat', {
                  checked: this.properties.showSnapchat,
                  text: 'Show Snapchat?'
                }),
                PropertyPaneTextField('snapchatLink', {
                  label: 'Snapchat Link',
                  disabled: !this.properties.showSnapchat,
                  value: this.properties.snapchatLink,
                  placeholder: 'https://www.snapchat.com/add/username'
                }),
                PropertyPaneCheckbox('showReddit', {
                  checked: this.properties.showReddit,
                  text: 'Show Reddit?'
                }),
                PropertyPaneTextField('redditLink', {
                  label: 'Reddit Link',
                  disabled: !this.properties.showReddit,
                  value: this.properties.redditLink,
                  placeholder: 'https://www.reddit.com/user/username'
                }),
                PropertyPaneCheckbox('showTikTok', {
                  checked: this.properties.showTikTok,
                  text: 'Show TikTok?'
                }),
                PropertyPaneTextField('tikTokLink', {
                  label: 'TikTok Link',
                  disabled: !this.properties.showTikTok,
                  value: this.properties.tikTokLink,
                  placeholder: 'https://www.tiktok.com/@username'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
