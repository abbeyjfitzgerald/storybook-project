import { storiesOf, moduleMetadata, addDecorator, addParameters } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
// import { withCssResources } from '@storybook/addon-cssresources';
// import { of } from 'rxjs';

import { FlexLayoutModule } from '@angular/flex-layout';
import { object } from '@storybook/addon-knobs';
import { ButtonComponent } from '../button/button.component';

// addParameters({
//   cssresources: [
//     {
//         id: `red`,
//         code: `<style>body { background-color: red; }</style>`,
//         picked: true,
//     },
//     {
//         id: `yellow`,
//         code: `<style>body { background-color: yellow; }</style>`,
//         picked: false,
//     },
//   ],
// });
//
// addDecorator(withCssResources);

storiesOf('Button', module)
    .addDecorator(
        moduleMetadata({
            declarations: [
                ButtonComponent
            ],
            imports: [
                FlexLayoutModule
            ],
        }),
    ).add('button options', () => {
      return {
          component: ButtonComponent,
          props: {
              className: ['btn']
          },
        };
    });
