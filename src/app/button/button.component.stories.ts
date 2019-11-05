import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
// import { of } from 'rxjs';

import { FlexLayoutModule } from '@angular/flex-layout';
import { object } from '@storybook/addon-knobs';
import { ButtonComponent } from '../button/button.component';

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
